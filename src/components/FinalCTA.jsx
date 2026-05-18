import contactImage from "../assets/images/contact-us.jpg";
import backgroundImage from "../assets/images/WG-Office-Shoot_5.jpg";

function FinalCTA() {
  return (
    <div className="rounded-t-4xl overflow-hidden text-white">
      <div className="relative lg:h-200 px-6 sm:px-10 lg:px-20 py-10 text-white">
        <img
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          src={backgroundImage}
        />
        <div className="absolute inset-0 -z-10 bg-black/50" />

        <div className="h-full grid grid-rows-2">
          <div />

          <div className="flex flex-col justify-end">
            <div className="border-t border-white/30 pt-6 mb-6" />

            <p className="uppercase text-xs font-bold mb-6 tracking-wider">
              • Let's start a conversation
            </p>

            <div className="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-lime-200 uppercase max-w-4xl leading-tight">
                What will world-leading look like for you?
              </h2>

              <div className="flex flex-col justify-end space-y-4 max-w-md">
                <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                  Partner with a 6x Best Global Agency Winner that's as invested
                  in your growth as you are.
                </p>

                <div className="flex items-center gap-4 pt-2">
                  <a className="rounded-full border cursor-pointer border-lime-500 px-5 py-2 text-sm font-semibold transition-all hover:-translate-y-1 duration-300">
                    Contact Us
                  </a>

                  <img
                    src={contactImage}
                    className="hidden h-11 w-11 rounded-full object-cover sm:block"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinalCTA;
