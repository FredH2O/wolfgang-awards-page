import { useState } from "react";
import HoverPreview from "./HoverPreview";

function AwardRow({ award }) {
  const [preview, setPreview] = useState({
    isVisible: false,
    x: 0,
    y: 0,
    rotate: 0,
  });

  function handleMouseMovement(event) {
    const row = event.currentTarget;
    const rowRect = row.getBoundingClientRect();

    const rowCenter = rowRect.left + rowRect.width / 2;
    const cursorDistanceFromCenter = event.clientX - rowCenter;
    const rotationAmount = cursorDistanceFromCenter / rowRect.width;

    setPreview({
      isVisible: true,
      x: event.clientX,
      y: event.clientY,
      rotate: rotationAmount * 25,
    });
  }

  return (
    <article
      onMouseMove={handleMouseMovement}
      onMouseEnter={() =>
        setPreview((currentPreview) => ({
          ...currentPreview,
          isVisible: true,
        }))
      }
      onMouseLeave={() =>
        setPreview((currentPreview) => ({
          ...currentPreview,
          isVisible: false,
        }))
      }
      className="group cursor-none -mx-4 transition-colors duration-300 hover:bg-emerald-900 hover:text-white md:-mx-10 lg:-mx-20"
    >
      <HoverPreview
        image={award.cursorImage}
        imageAlt={award.imageAlt}
        preview={preview}
      />
      <div className="px-4 md:px-10 lg:px-20">
        <div className="border-t border-green-950/15 transition-colors duration-300 group-hover:border-white/20" />

        <div className="grid gap-8 py-10 md:grid-cols-3 lg:grid-cols-6 lg:items-start">
          {/* Award logo and group */}
          <div className="flex items-center gap-5 md:col-span-3 lg:col-span-3">
            <div className="flex h-28 w-36 items-center justify-center rounded-xl bg-neutral-100 group-hover:bg-emerald-800 p-4 transition-transform duration-300 group-hover:-translate-y-1">
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

            <div className="flex min-h-28 items-center">
              <h3 className="text-2xl font-black uppercase tracking-tight md:text-3xl">
                {award.group}
              </h3>
            </div>
          </div>

          {/* Category, award result, and year */}
          <div className="grid grid-cols-6 gap-3 text-xs md:col-span-3 md:gap-6 md:text-sm lg:col-span-3">
            <div className="col-span-4">
              <p className="mb-3 text-xs text-green-950/45 transition-colors duration-300 group-hover:text-white/60 md:text-sm">
                Category
              </p>

              <div className="space-y-1">
                {award.categories.map((category) => (
                  <p key={category.name} className="font-medium">
                    {category.name}
                  </p>
                ))}
              </div>
            </div>

            <div className="col-span-1">
              <p className="mb-3 text-xs text-green-950/45 transition-colors duration-300 group-hover:text-white/60 md:text-sm">
                Awards
              </p>

              <div className="space-y-1">
                {award.categories.map((category) => (
                  <p key={category.name} className="font-medium">
                    {category.result}
                  </p>
                ))}
              </div>
            </div>

            <div className="col-span-1">
              <p className="font-bold">{award.year}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default AwardRow;
