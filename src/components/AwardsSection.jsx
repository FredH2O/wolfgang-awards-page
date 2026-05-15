import { useState } from "react";
import { awards } from "../data/awards";
import AwardsFilter from "./AwardsFilter";

function AwardsSection() {
  const [selectedGroup, setSelectedGroup] = useState("All");

  const awardGroups = [...new Set(awards.map((award) => award.group))];

  const filteredAwards =
    selectedGroup === "All"
      ? awards
      : awards.filter((award) => award.group === selectedGroup);

  return (
    <section className="px-6 py-20 text-green-950 lg:px-10">
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
        {filteredAwards.map((award) => (
          <article
            key={award.id}
            className="group border-t border-green-950/15 pt-10 transition-colors duration-300 hover:border-green-950"
          >
            <div className="mb-8 inline-flex rounded-full bg-lime-300 px-5 py-2 text-sm font-bold">
              {award.year}
            </div>

            <div className="grid gap-8 lg:grid-cols-[160px_1fr_1.5fr] lg:items-start">
              <div className="flex h-28 w-36 items-center justify-center rounded-xl bg-neutral-100 p-4 transition-transform duration-300 group-hover:-translate-y-1">
                {award.image ? (
                  <img
                    src={award.image}
                    alt={award.imageAlt}
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <span className="text-center text-xs font-bold uppercase text-green-950/50">
                    Award Logo
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-black uppercase tracking-tight md:text-3xl">
                {award.group}
              </h3>

              <div className="grid gap-6 md:grid-cols-[1fr_120px]">
                <div>
                  <p className="mb-3 text-sm text-green-950/45">Category</p>

                  <div className="space-y-1">
                    {award.categories.map((category) => (
                      <p key={category.name} className="font-medium">
                        {category.name}
                      </p>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-3 text-sm text-green-950/45">Awards</p>

                  <div className="space-y-1">
                    {award.categories.map((category) => (
                      <p key={category.name} className="font-medium">
                        {category.result}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AwardsSection;
