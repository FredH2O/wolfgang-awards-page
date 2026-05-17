import heroImage from "../assets/images/hero-image.jpg";

function Hero() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden rounded-b-[2rem] text-white">
      {" "}
      <div className="relative">
        <img
          src={heroImage}
          alt="Hero Image"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex min-h-[70vh] items-center justify-center px-6 py-1 lg:px-10">
          <h1 className="max-w-4xl text-6xl font-black uppercase leading-none tracking-tight md:text-8xl lg:text-9xl">
            Our Awards
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Hero;
