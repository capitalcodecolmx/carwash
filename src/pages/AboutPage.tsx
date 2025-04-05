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

      {/* Story Section */}
      <AboutStorySection />

      {/* Statistics Section */}
      <AboutStatisticsSection />

      {/* Values Section */}
      <AboutValuesSection />

      {/* Team Section */}
      <AboutTeamSection />

      {/* CTA Section */}
      <AboutCTASection />
    </div>
  );
}