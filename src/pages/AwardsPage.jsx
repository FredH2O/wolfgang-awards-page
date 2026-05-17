import AwardsSection from "../components/AwardsSection";
import Header from "../components/Header";
import Hero from "../components/Hero";

function AwardsPage() {
  return (
    <div className="relative">
      <Header />

      <main>
        <Hero />
        <AwardsSection />
        <div className="px-10 py-20 md:px-10 lg:px-25"></div>
      </main>
    </div>
  );
}

export default AwardsPage;
