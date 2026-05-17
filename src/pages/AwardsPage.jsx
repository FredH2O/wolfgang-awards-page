import AwardsSection from "../components/AwardsSection";
import Header from "../components/Header";
import Hero from "../components/Hero";

function AwardsPage() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <main className="py-20 px-10 md:px-10 lg:px-25">
        <AwardsSection />
      </main>
    </div>
  );
}

export default AwardsPage;
