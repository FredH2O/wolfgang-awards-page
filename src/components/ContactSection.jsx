import formImage from "../assets/images/global-social-media-cursor-image.jpg";
import ContactForm from "./ContactForm";

function ContactSection() {
  return (
    <section className="grid py-10 text-white md:px-6 lg:grid-cols-2 lg:px-16">
      <div className="relative min-h-96 overflow-hidden rounded-t-3xl lg:rounded-l-3xl lg:rounded-t-none">
        <img
          src={formImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 flex min-h-96 flex-col justify-end gap-4 p-6 md:p-8 lg:p-10">
          <h2 className="max-w-xl text-4xl font-black uppercase leading-none tracking-tight sm:text-5xl md:text-5xl lg:text-5xl">
            Ready to own your category?
          </h2>

          <p className="max-w-xl text-sm leading-6 text-white/85 md:text-base">
            Search is changing. You need a strategy that wins on Google today
            and establishes your authority for AI tomorrow. Fill out the form,
            and let’s build the future-proof roadmap your business deserves.
          </p>
        </div>
      </div>

      <ContactForm />
    </section>
  );
}

export default ContactSection;
