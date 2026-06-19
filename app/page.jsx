import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import FeaturePreview from '@/components/FeaturePreview';
import LaunchStatus from '@/components/LaunchStatus';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Header />
      <Hero />
      <ProblemSection />
      <FeaturePreview />
      <LaunchStatus />
      <CTASection />
      <Footer />
    </main>
  );
}
