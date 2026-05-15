function AwardRow({ award }) {
  return (
    <article className="group border-t border-green-950/15 py-10 transition-colors duration-300 hover:border-green-950">
      <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-6 lg:items-start">
        {/* Award logo */}
        <div className="flex items-center gap-5 md:col-span-3 lg:col-span-3">
          <div className="flex h-28 w-36 items-center justify-center rounded-xl bg-neutral-100 p-4 transition-transform duration-300 group-hover:-translate-y-1 md:col-span-1">
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

          {/* Award group */}
          <div className="flex min-h-28 items-center md:col-span-2">
            <h3 className="text-2xl font-black uppercase tracking-tight md:text-3xl">
              {award.group}
            </h3>
          </div>
        </div>

        {/* Category, award result, and year */}
        <div className="grid grid-cols-6 gap-3 text-xs md:col-span-3 md:gap-6 md:text-sm lg:col-span-3">
          <div className="col-span-4">
            <p className="mb-3 text-xs text-green-950/45 md:text-sm">
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
            <p className="mb-3 text-xs md:text-sm text-green-950/45">Awards</p>

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
    </article>
  );
}

export default AwardRow;
