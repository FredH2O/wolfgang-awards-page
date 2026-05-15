import { useState } from "react";
import { awards } from "../data/awards";
import AwardsFilter from "./AwardsFilter";
import AwardRow from "./AwardRow";

function AwardsSection() {
  const [selectedGroup, setSelectedGroup] = useState("All");
  const years = [2025, 2024];

  const awardGroups = [...new Set(awards.map((award) => award.group))];

  const filteredAwards =
    selectedGroup === "All"
      ? awards
      : awards.filter((award) => award.group === selectedGroup);

  return (
    <section className=" text-green-950">
      <div className="mb-24 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <h2 className="max-w-5xl text-2xl font-black uppercase leading-none tracking-tight md:text-6xl lg:text-5xl">
          Six-time best global large agency, delivering award-winning strategy,
          creativity, and performance worldwide.
        </h2>

        <AwardsFilter
          awardGroups={awardGroups}
          selectedGroup={selectedGroup}
          onGroupChange={setSelectedGroup}
        />
      </div>

      <div className="space-y-20">
        {years.map((year) => {
          const awardsForYear = filteredAwards.filter(
            (award) => award.year === year,
          );

          if (awardsForYear.length === 0) {
            return null;
          }

          return (
            <div key={year}>
              <div className="mb-8 inline-flex rounded-full bg-lime-300 px-5 py-2 text-sm font-bold">
                {year}
              </div>

              <div>
                {awardsForYear.map((award) => (
                  <AwardRow key={award.id} award={award} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default AwardsSection;
