import AwardsSection from "../components/AwardsSection";
import Header from "../components/Header";

function AwardsPage() {
  return (
    <>
      <Header />
      <main className="py-20 px-10 md:px-10 lg:px-25">
        <AwardsSection />
      </main>
    </>
  );
}

export default AwardsPage;
