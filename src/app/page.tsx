import Feature1 from "@/components/section/Feature1";
import GrowYourBussiness from "@/components/section/GrowYourBussiness";
import HeroSection from "@/components/section/HeroSection";
import HowWorks from "@/components/section/HowWorks";
import MeetWithClient from "@/components/section/MeetWithClient";
import UserRating from "@/components/section/UserRating";

export default function Home() {
  return (
    <div className="flex flex-col gap-[100px]">
      <HeroSection />
      <UserRating />
      <HowWorks />
      <Feature1 />
      <GrowYourBussiness />
      <MeetWithClient />
    </div>
  );
}
