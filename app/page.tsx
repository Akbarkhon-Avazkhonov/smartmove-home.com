import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { FeaturesSection } from '@/components/features-section';
import { SetupShowcase } from '@/components/setup-showcase';
import { ErgoTipsSection } from '@/components/ergotips-section';
import { CookieConsent } from '@/components/cookie-consent';

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-[#F9F9FB] via-white to-[#F0F9F8]">
      <Header />
      <div className="pt-24">
        <HeroSection />
        <FeaturesSection />
        <SetupShowcase />
        <ErgoTipsSection />

        {/* Footer */}
        <footer className="w-full py-12 px-4 md:px-8 bg-[#008080] text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="font-outfit text-2xl font-bold mb-2">SmartMove</h3>
            <p className="text-white/80 mb-6">The Science of the Home Office</p>
            <div className="flex justify-center gap-8 text-sm text-white/60">
              <a href="#" className="hover:text-white transition">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition">
                Terms
              </a>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
              <a href="#" className="hover:text-white transition">
                Blog
              </a>
            </div>
            <p className="mt-8 text-white/40 text-xs">
              © 2025 SmartMove. Master Your Space. Perfect Your Pace.
            </p>
          </div>
        </footer>
      </div>
      <CookieConsent />
    </main>
  );
}
