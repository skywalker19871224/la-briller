/**
 * Antigravity Gallery Component
 * A premium, infinite-scrolling gallery with Apple-like inertia physics.
 * 
 * Usage:
 * <antigravity-gallery id="my-gallery"></antigravity-gallery>
 * 
 * document.getElementById('my-gallery').images = [
 *   { src: 'path/to/img1.jpg', alt: 'Image 1' },
 *   { src: 'path/to/img2.jpg', alt: 'Image 2' }
 * ];
 */

class AntigravityGallery extends HTMLElement {
    constructor() {
        super();

        this._images = [];
        this._isDragging = false;
        this._scrollInfo = {
            current: 0,
            target: 0,
            lastLogged: 0,
            velocity: 0,
            isAutoScrolling: true,
            autoSpeed: 0.5, // Pixels per frame
            autoDirection: 1, // 1 for right-to-left (moving content left)
            lastDragTime: 0,
            rafId: null
        };

        // Settings
        this.config = {
            friction: 0.95, // Friction after release
            dragFactor: 1.5, // How responsive dragging is
            autoResumeDelay: 2000,
            cloneCount: 2 // How many times to clone sets for infinite feel
        };
    }

    static get observedAttributes() {
        return ['auto-speed'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'auto-speed') {
            this._scrollInfo.autoSpeed = parseFloat(newValue) || 0.5;
        }
    }

    set images(value) {
        this._images = value;
        this.render();
    }

    get images() {
        return this._images;
    }

    connectedCallback() {
        this.render();
        this.startLoop();
        this.attachEvents();
    }

    disconnectedCallback() {
        this.stopLoop();
        // Cleanup global lightbox if exists
        const lightbox = document.getElementById(`antigravity-lightbox-overlay`);
        if (lightbox) lightbox.remove();
    }

    render() {




        const container = document.createElement('div');
        container.className = 'gallery-stream-container';

        const track = document.createElement('div');
        track.className = 'gallery-track';
        this.track = track;

        // Populate track
        this.updateTrackContent();

        container.appendChild(track);
        this.replaceChildren(container);

        this.container = container; // caching for events
    }

    updateTrackContent() {
        if (!this.track || this._images.length === 0) return;

        // Clear existing
        this.track.innerHTML = '';

        // Create card generator
        const createCard = (imgData) => {
            const card = document.createElement('div');
            card.className = 'gallery-card';

            const img = document.createElement('img');
            img.src = imgData.src;
            img.alt = imgData.alt || '';
            img.loading = 'lazy';

            card.appendChild(img);

            // Click to open lightbox
            card.addEventListener('click', (e) => {
                if (!this._wasDragging) {
                    this.openLightbox(imgData.src);
                }
            });

            // Prevent default drag behavior on images
            img.addEventListener('dragstart', (e) => e.preventDefault());

            return card;
        };

        // Append multiple sets for infinite loop
        // 3 sets: [Clone] [Original] [Clone] to handle bidirectional infinite scroll
        for (let i = 0; i < 3; i++) {
            this._images.forEach(imgData => {
                this.track.appendChild(createCard(imgData));
            });
        }
    }

    attachEvents() {
        const el = this.container;
        if (!el) return;

        let startX = 0;
        let lastX = 0;
        let lastTime = 0;
        let velocity = 0;

        // Touch Events
        el.addEventListener('touchstart', (e) => {
            this._isDragging = true;
            this._wasDragging = false;
            this._scrollInfo.isAutoScrolling = false;
            this._scrollInfo.velocity = 0;
            startX = e.touches[0].clientX;
            lastX = startX;
            lastTime = Date.now();
        }, { passive: true });

        el.addEventListener('touchmove', (e) => {
            if (!this._isDragging) return;
            const x = e.touches[0].clientX;
            const delta = (lastX - x) * this.config.dragFactor;
            const now = Date.now();
            const dt = now - lastTime;

            // Update stats
            this._scrollInfo.current += delta;

            // Calculate velocity (pixels per ms)
            if (dt > 0) {
                velocity = delta / dt; // Basic velocity
            }

            // Check if actually dragged
            if (Math.abs(startX - x) > 5) {
                this._wasDragging = true;
            }

            lastX = x;
            lastTime = now;
        }, { passive: true });

        el.addEventListener('touchend', () => {
            this._isDragging = false;
            // Apply momentum
            // Scale velocity up to frame-based (px per frame approx 16ms)
            // A simple multiplier feels better than exact physics sometimes
            this._scrollInfo.velocity = velocity * 16;
            this._scrollInfo.lastDragTime = Date.now();
        }, { passive: true });

        // Mouse Events (similar logic)
        el.addEventListener('mousedown', (e) => {
            this._isDragging = true;
            this._wasDragging = false;
            this._scrollInfo.isAutoScrolling = false;
            this._scrollInfo.velocity = 0;
            startX = e.clientX;
            lastX = startX;
            lastTime = Date.now();
            el.style.cursor = 'grabbing';
        });

        window.addEventListener('mousemove', (e) => {
            if (!this._isDragging) return;
            e.preventDefault();
            const x = e.clientX;
            const delta = (lastX - x) * this.config.dragFactor;
            this._scrollInfo.current += delta;

            // Check if actually dragged
            if (Math.abs(startX - x) > 5) {
                this._wasDragging = true;
            }

            const now = Date.now();
            velocity = delta / (now - lastTime || 1);
            lastX = x;
            lastTime = now;
        });

        window.addEventListener('mouseup', () => {
            if (this._isDragging) {
                this._isDragging = false;
                this._scrollInfo.velocity = velocity * 16;
                this._scrollInfo.lastDragTime = Date.now();
                el.style.cursor = 'grab';
            }
        });
    }

    startLoop() {
        // Wait for layout to be ready to set initial position
        requestAnimationFrame(() => {
            if (this.track && this.track.scrollWidth) {
                const singleSetWidth = this.track.scrollWidth / 3;
                this._scrollInfo.current = singleSetWidth; // Start at the beginning of the middle set
            }
        });

        const loop = () => {
            if (!this.track) return;

            // 1. Auto Scroll Logic
            if (!this._isDragging) {
                // Resume auto scroll check
                const timeSinceDrag = Date.now() - this._scrollInfo.lastDragTime;

                if (Math.abs(this._scrollInfo.velocity) < 0.1 && timeSinceDrag > this.config.autoResumeDelay) {
                    // Smoothly ramp up to auto speed
                    this._scrollInfo.isAutoScrolling = true;
                }

                if (this._scrollInfo.isAutoScrolling) {
                    // Interpolate velocity towards autoSpeed
                    const targetSpeed = this._scrollInfo.autoSpeed * this._scrollInfo.autoDirection;
                    this._scrollInfo.velocity += (targetSpeed - this._scrollInfo.velocity) * 0.05;
                } else {
                    // Apply friction to inertia
                    this._scrollInfo.velocity *= this.config.friction;
                }

                // Apply velocity
                this._scrollInfo.current += this._scrollInfo.velocity;
            }

            // 2. Infinite Loop Logic (Teleportation)
            const trackWidth = this.track.scrollWidth;
            if (trackWidth > 0) {
                const singleSetWidth = trackWidth / 3; // We cloned 3 times

                // If we scrolled past the second set start (moving right)
                if (this._scrollInfo.current >= singleSetWidth * 2) {
                    this._scrollInfo.current -= singleSetWidth;
                }
                // If we scrolled past start (moving left)
                else if (this._scrollInfo.current <= 0) {
                    this._scrollInfo.current += singleSetWidth;
                }
            }

            // 3. Render
            this.track.style.transform = `translate3d(${-this._scrollInfo.current}px, 0, 0)`;

            this._scrollInfo.rafId = requestAnimationFrame(loop);
        };
        this._scrollInfo.rafId = requestAnimationFrame(loop);
    }

    stopLoop() {
        if (this._scrollInfo.rafId) cancelAnimationFrame(this._scrollInfo.rafId);
    }

    openLightbox(src) {
        // Create lightbox if not exists (append to document body to escape shadow boundaries/overflows)
        let lightbox = document.getElementById('antigravity-lightbox-overlay');
        if (!lightbox) {
            lightbox = document.createElement('div');
            lightbox.id = 'antigravity-lightbox-overlay';
            lightbox.className = 'lightbox-overlay';
            // Inject styles for global lightbox
            const style = document.createElement('style');
            style.textContent = `
                .lightbox-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.95); z-index: 10000; display: flex; align-items: center; justify-content: center; opacity: 0; pointer-events: none; transition: opacity 0.3s; backdrop-filter: blur(10px); }
                .lightbox-overlay.active { opacity: 1; pointer-events: auto; }
                .lightbox-img { max-width: 90vw; max-height: 85vh; border-radius: 8px; box-shadow: 0 20px 50px rgba(0,0,0,0.5); transform: scale(0.95); transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); }
                .lightbox-overlay.active .lightbox-img { transform: scale(1); }
                .lightbox-close { position: absolute; top: 20px; right: 20px; color: white; background: rgba(255,255,255,0.1); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; font-family: sans-serif; font-size: 20px; }
                .lightbox-close:hover { background: rgba(255,255,255,0.25); }
                .lightbox-dl { position: absolute; bottom: 30px; left: 50%; transform: translateX(-50%); color: white; text-decoration: none; background: rgba(255,255,255,0.1); padding: 10px 20px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.2); font-family: sans-serif; font-size: 14px; display: flex; gap: 8px; align-items: center; transition: all 0.2s; }
                .lightbox-dl:hover { background: white; color: black; }
            `;
            document.head.appendChild(style);

            lightbox.innerHTML = `
                <div class="lightbox-close">✕</div>
                <img class="lightbox-img" src="" alt="Zoom">
                <a class="lightbox-dl" download href="">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    保存する
                </a>
            `;

            lightbox.querySelector('.lightbox-close').addEventListener('click', () => {
                lightbox.classList.remove('active');
            });
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) lightbox.classList.remove('active');
            });

            document.body.appendChild(lightbox);
        }

        const img = lightbox.querySelector('img');
        const dl = lightbox.querySelector('a');

        img.src = src;
        dl.href = src;

        // Small delay to allow display change
        requestAnimationFrame(() => {
            lightbox.classList.add('active');
        });
    }
}

if (!customElements.get('antigravity-gallery')) {
    customElements.define('antigravity-gallery', AntigravityGallery);
}

export { AntigravityGallery };
