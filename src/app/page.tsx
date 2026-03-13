import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Helo } from "@/components/sections/Helo";
import { Merits } from "@/components/sections/Merits";
import { Flow } from "@/components/sections/Flow";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { QA } from "@/components/sections/QA";
import { ClinicGallery } from "@/components/sections/ClinicGallery";
import { Access } from "@/components/sections/Access";
import { WhatIsLabriller } from "@/components/sections/WhatIsLabriller";
import { ComparisonTable } from "@/components/sections/ComparisonTable";

export default function Home() {
  return (
    <main className="min-h-screen bg-parfait-white selection:bg-gold/30 pb-16 md:pb-20">
      <Header />

      <Helo />

      <WhatIsLabriller />

      <Merits />

      <ComparisonTable />
      
      <InstagramSection />

      <Flow />

      <QA />

      <ClinicGallery />

      <Access />

      <Footer />
      <FloatingCTA />
    </main>
  );
}
