import logo from "../assets/images/wolfgang_digital_logo.png";
import contactImage from "../assets/images/contact-us.jpg";

const navLinks = [
  { label: "Services", href: "#" },
  { label: "Work", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Insights", href: "#" },
  { label: "Careers", href: "#" },
];
function RollingLink({ href, children }) {
  return (
    <a
      href={href}
      className="group relative inline-block overflow-hidden leading-none"
    >
      <span className="block py-2 transition-transform duration-300 ease-out group-hover:-translate-y-full">
        {children}
      </span>

      <span className="absolute py-2 left-0 top-full block transition-transform duration-300 ease-out group-hover:-translate-y-full">
        {children}
      </span>
    </a>
  );
}

function Header() {
  return (
    <header className="absolute left-0 top-0 z-50 flex w-full items-center justify-between bg-transparent px-6 py-5 text-white lg:px-10">
      <a
        href="/"
        className="flex items-center gap-3 hover:translate-x-1 transition-all duration-300"
        aria-label="Wolfgang Digital home"
      >
        <img
          src={logo}
          alt="Wolfgang Logo"
          className="h-10 w-10 rounded-full bg-green-950 object-cover"
        />

        <span className=" text-xl font-black leading-none tracking-tight">
          WOLFGANG
          <span className="block text-sm font-semibold lowercase tracking-normal">
            digital
          </span>
        </span>
      </a>
      <nav aria-label="Main navigation" className="hidden lg:block">
        <ul className="flex items-center gap-8 text-sm font-semibold">
          {navLinks.map((link) => (
            <li key={link.label}>
              <RollingLink href={link.href}>{link.label}</RollingLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        <a
          href=""
          className="rounded-full border border-lime-500 px-5 py-2 text-sm font-semibold transition-all hover:-translate-y-1 ease-in-out duration-300 hover:text-white"
        >
          Contact Us
        </a>

        <img
          src={contactImage}
          alt=""
          className="hidden h-11 w-11 rounded-full bg-lime-300 object-cover sm:block"
        />
      </div>
    </header>
  );
}

export default Header;
