import HeroSection from "@/components/HeroSection";
import CraftSection from "@/components/CraftSection";
import SignatureMenu from '@/components/SignatureMenu';
import AmbienceSection from '@/components/AmbienceSection';
import DestinationSection from '@/components/DestinationSection';
export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <CraftSection />
      <SignatureMenu />
      <AmbienceSection /> 
      <DestinationSection />
    </main>
  );
}
