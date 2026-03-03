import React from 'react';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-header">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Double Name Logo Section */}
        <div className="flex items-center space-x-4">
          <div className="flex flex-col">
            <span className="text-xl font-serif tracking-tight text-foreground font-bold">Parfait Clinic</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Main Body / Trusted</span>
          </div>
          <div className="h-8 w-[1px] bg-gold/30 mx-2" />
          <div className="flex flex-col">
            <span className="text-xl font-sans font-black tracking-tighter text-labriller-blue">La Briller</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-labriller-blue/70">Scientific Excellence</span>
          </div>
        </div>

        {/* Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent font-serif")}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent font-serif")}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent font-serif")}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Button */}
        <div className="flex items-center space-x-4">
          <button className="px-6 py-2 bg-labriller-blue text-white text-sm font-medium hover:bg-labriller-blue/90 transition-all rounded-none ring-1 ring-gold/20 shadow-lg">
            RESERVATION
          </button>
        </div>
      </div>
    </header>
  );
};
