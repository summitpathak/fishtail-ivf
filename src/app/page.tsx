import { Hero } from "@/components/home/Hero";
import { TrustMetrics } from "@/components/home/TrustMetrics";
import { MeetDrAnu } from "@/components/home/MeetDrAnu";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TreatmentsOverview } from "@/components/home/TreatmentsOverview";
import { VideoShowcase } from "@/components/home/VideoShowcase";
import { HowItWorks } from "@/components/home/HowItWorks";
import { StoryCarousel } from "@/components/home/StoryCarousel";
import { SocialFeed } from "@/components/home/SocialFeed";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <TrustMetrics />
      <MeetDrAnu />
      <WhyChooseUs />
      <TreatmentsOverview />
      <VideoShowcase />
      <HowItWorks />
      <StoryCarousel />
      <SocialFeed />
    </div>
  );
}
