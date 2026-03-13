import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface TitleBandProps {
  en: string;
  ja: React.ReactNode;
  className?: string;
  description?: React.ReactNode;
}

export const TitleBand: React.FC<TitleBandProps> = ({
  en,
  ja,
  className,
  description,
}) => {
  return (
    <div className="bg-parfait-blue py-10 text-center text-white">
      <div className="container mx-auto px-6">
        <SectionHeader
          en={en}
          ja={ja}
          theme="dark"
          className={className ?? "mb-0"}
          description={description}
        />
      </div>
    </div>
  );
};
