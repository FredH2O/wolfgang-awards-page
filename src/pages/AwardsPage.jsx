import ContactSection from "../components/ContactSection";
import AwardsSection from "../components/AwardsSection";
import Header from "../components/Header";
import Hero from "../components/Hero";
import NewsCarousel from "../components/NewsCarousel/NewsCarousel";
import FinalCTA from "../components/FinalCTA";

function AwardsPage() {
  return (
    <div className="relative">
      <Header />

      <main>
        <Hero />
        <AwardsSection />
        <div className="px-3 py-3 md:px-4 lg:px-5 xl:px-25">
          <ContactSection />
          <NewsCarousel />
        </div>
        <FinalCTA />
      </main>
    </div>
  );
}

export default AwardsPage;
