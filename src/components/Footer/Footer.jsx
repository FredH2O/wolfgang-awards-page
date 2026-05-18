import FooterMarquee from "./FooterMarquee";
import {
  FaXTwitter,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="relative bg-[#063b36] text-white overflow-hidden pt-20">
      <div className="relative z-10 max-w-350 mx-auto px-6 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-4xl font-bold leading-tight mb-6">
            WOLFGANG INSIGHTS, IN YOUR INBOX
          </h2>

          <form className="grid grid-cols-2 gap-4">
            <input
              className="p-3 bg-transparent border border-white/40 rounded-lg"
              placeholder="First Name *"
            />
            <input
              className="p-3 bg-transparent border border-white/40 rounded-lg"
              placeholder="Last Name *"
            />

            <input
              className="p-3 bg-transparent border border-white/40 rounded-lg col-span-2"
              placeholder="Email *"
            />

            <select className="p-3 border border-white/40 rounded-lg col-span-2 bg-white text-green-900">
              <option>Business Type</option>
              <option>Lead Gen - B2B</option>
              <option>Lead Gen - B2C</option>
              <option>E-Commerce / Retail</option>
              <option>Other</option>
            </select>

            <label className="col-span-2 text-sm flex gap-2 items-center">
              <input type="checkbox" />I agree to receive emails
            </label>

            <button className="col-span-2 bg-lime-300 text-black py-3 rounded-full font-semibold">
              SIGN ME UP
            </button>
          </form>
        </div>

        <div className="grid grid-cols-3 gap-6 text-sm">
          <div className="border-l-lime-200 border-l self-start pl-4">
            <p className="font-semibold mb-3">Services</p>
            <ul className="space-y-2 text-white/70">
              <li>Search Engine Optimisation</li>
              <li>Paid Search</li>
              <li>Paid Social Media & Creative</li>
              <li>CRM</li>
              <li>Data & Analytics</li>
            </ul>
          </div>

          <div className="border-l-lime-200 border-l self-start pl-4">
            <p className="font-semibold mb-3">Company</p>
            <ul className="space-y-2 text-white/70">
              <li>Case Studies</li>
              <li>Testimonials</li>
              <li>Blog & Insight</li>
              <li>Awards</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="border-l-lime-200 border-l self-start pl-4">
            <p className="font-semibold mb-3">More</p>
            <ul className="space-y-2 text-white/70">
              <li>Our Story</li>
              <li>Team</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="inset-0 flex items-end opacity-10 pointer-events-none">
        <FooterMarquee />
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 mt-2 border-t border-white/20 py-4 px-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between text-xs text-white/60">
        {/* Left block */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-center sm:text-left">
          <p>© 2026 WOLFGANG</p>
          <p className="hidden sm:block">•</p>
          <p>PRIVACY POLICY</p>
          <p className="hidden sm:block">•</p>
          <p>WEBSITE PHOTOS</p>

          <a
            href="/"
            className="mt-2 sm:mt-0 text-xs border px-2 py-1 border-lime-500 text-lime-500 hover:bg-lime-500 hover:text-white transition-all duration-300"
          >
            COOKIE SETTINGS
          </a>
        </div>

        {/* Socials */}
        <div className="flex justify-center gap-4">
          <FaXTwitter
            size={30}
            className="text-white/70 hover:text-black hover:bg-white transition-all duration-300 p-1 rounded-full border border-white/20 hover:border-white"
          />

          <FaInstagram
            size={30}
            className="text-white/70 hover:text-pink-500 hover:bg-white transition-all duration-300 p-1 rounded-full border border-white/20 hover:border-white"
          />

          <FaFacebook
            size={30}
            className="text-white/70 hover:text-blue-600 hover:bg-white transition-all duration-300 p-1 rounded-full border border-white/20 hover:border-white"
          />

          <FaYoutube
            size={30}
            className="text-white/70 hover:text-red-600 hover:bg-white transition-all duration-300 p-1 rounded-full border border-white/20 hover:border-white"
          />
        </div>

        <p className="font-bold uppercase text-center md:text-right">
          Website Made by{" "}
          <a href="https://github.com/FredH2O" target="_blank">
            Fred
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
