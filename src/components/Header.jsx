function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-5 text-green-950 lg:px-10">
      <a
        href="/"
        className="flex items-center gap-3"
        aria-label="Wolfgang Digital home"
      >
        <img
          src="/images/wolfgang_digital_logo.png"
          alt="Wolfgang Logo"
          className="h-10 w-10 rounded-full bg-green-950 object-cover"
        />

        <span className="text-xl font-black leading-none tracking-tight">
          WOLFGANG{" "}
          <span className="block text-sm font-semibold lowercase tracking-normal">
            digital
          </span>
        </span>
      </a>

      <nav aria-label="Main navigation" className="hidden lg:block">
        <ul className="flex items-center gap-8 text-sm font-semibold">
          <li>
            <a href="" className="transition-colors hover:text-lime-500">
              Services
            </a>
          </li>
          <li>
            <a href="" className="transition-colors hover:text-lime-500">
              Work
            </a>
          </li>
          <li>
            <a href="" className="transition-colors hover:text-lime-500">
              About Us
            </a>
          </li>
          <li>
            <a href="" className="transition-colors hover:text-lime-500">
              Insights
            </a>
          </li>
          <li>
            <a href="" className="transition-colors hover:text-lime-500">
              Careers
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <a
          href=""
          className="rounded-full border border-green-950 px-5 py-2 text-sm font-semibold transition-colors hover:bg-green-950 hover:text-white"
        >
          Contact Us
        </a>

        <img
          src="../images/contact-us.jpg"
          alt=""
          className="hidden h-11 w-11 rounded-full bg-lime-300 object-cover sm:block"
        />
      </div>
    </header>
  );
}

export default Header;
