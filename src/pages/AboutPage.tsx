import { AboutHeroSection } from "@/components/About/AboutHeroSection";
import { AboutStorySection } from "@/components/About/AboutStorySection";
import { AboutValuesSection } from "@/components/About/AboutValuesSection";
import { AboutTeamSection } from "@/components/About/AboutTeamSection";
import { AboutStatisticsSection } from "@/components/About/AboutStatisticsSection";
import { AboutCTASection } from "@/components/About/AboutCTASection";

export function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <AboutHeroSection />

      {/* Story Section - with negative margin for better spacing */}
      <div className="mt-6 sm:mt-8 md:mt-10">
        <AboutStorySection />
      </div>

      {/* Statistics Section - with custom spacing */}
      <div className="mt-0 sm:mt-2">
        <AboutStatisticsSection />
      </div>

      {/* Values Section - with custom spacing */}
      <div className="mt-0">
        <AboutValuesSection />
      </div>

      {/* Team Section - with custom spacing */}
      <div className="mt-6 sm:mt-8">
        <AboutTeamSection />
      </div>

      {/* CTA Section - with custom spacing */}
      <div className="mt-8 sm:mt-12 mb-8 sm:mb-12">
        <AboutCTASection />
      </div>
    </div>
  );
}