import reCAPTCHA from "../assets/images/reCAPTCHA.png";

function ContactForm() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Thank you!");
    e.target.reset();
  }

  const formLabels = [
    {
      name: "First name",
      id: "firstName",
      type: "text",
    },
    {
      name: "Last name",
      id: "lastName",
      type: "text",
    },
    {
      name: "Email",
      id: "email",
      type: "email",
    },
    {
      name: "Phone number",
      id: "phoneNumber",
      type: "tel",
    },
  ];

  return (
    <div className="rounded-b-3xl lg:rounded-bl-none lg:rounded-tr-3xl lg:rounded-br-3xl  bg-emerald-950 p-6 md:p-8 lg:p-10">
      <form className="grid gap-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 md:grid-cols-2">
          {formLabels.map((label, index) => (
            <div key={index} className="grid min-w-0 gap-2">
              <label>{label.name} *</label>
              <input
                id={label.id}
                name={label.id}
                type={label.type}
                required
                className="w-full rounded-2xl border border-white/50 bg-transparent px-5 py-3 text-white outline-none transition-colors focus:border-lime-300"
              />
            </div>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="grid min-w-0 gap-2">
            <label htmlFor="businessType" className="text-sm font-semibold">
              Business Type *
            </label>
            <select
              id="businessType"
              name="businessType"
              required
              className="w-full rounded-2xl border border-white/50 bg-emerald-950 px-5 py-3 text-white outline-none transition-colors focus:border-lime-300"
            >
              <option value="">Please Select</option>
              <option value="lead-gen-b2b">Lead Gen - B2B</option>
              <option value="lead-gen-b2c">Lead Gen - B2C</option>
              <option value="ecommerce-retail">E-Commerce / Retail</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="grid min-w-0 gap-2">
            <label htmlFor="companyName" className="text-sm font-semibold">
              Company name *
            </label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              required
              className="w-full rounded-2xl border border-white/50 bg-transparent px-5 py-3 text-white outline-none transition-colors focus:border-lime-300"
            />{" "}
          </div>
        </div>

        <div className="grid gap-2">
          <label htmlFor="country" className="text-sm font-semibold">
            Country *
          </label>
          <select
            id="country"
            name="country"
            required
            className="rounded-2xl border border-white/50 bg-emerald-950 px-5 py-3 text-white outline-none transition-colors focus:border-lime-300"
          >
            <option value="">Please Select</option>
            <option value="ireland">Ireland</option>
            <option value="united-kingdom">United Kingdom</option>
            <option value="rest-of-europe">Rest of Europe</option>
            <option value="usa">United States of America</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="grid gap-2">
          <label htmlFor="message" className="text-sm font-semibold">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            maxLength={500}
            rows={5}
            className="resize-none rounded-3xl border border-white/50 bg-transparent px-5 py-4 text-white outline-none transition-colors focus:border-lime-300"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-2">
            <label htmlFor="hearAboutUs" className="text-sm font-semibold">
              How did you hear about us? *
            </label>
            <input
              id="hearAboutUs"
              name="hearAboutUs"
              type="text"
              required
              className="rounded-2xl border border-white/50 bg-transparent px-5 py-3 text-white outline-none transition-colors focus:border-lime-300"
            />
          </div>

          <div className="flex items-center justify-center">
            <label className="flex items-start gap-3 text-sm leading-6 text-white/85">
              <input
                name="newsletter"
                type="checkbox"
                className="mt-1 h-4 w-4 accent-lime-300"
              />
              <span>
                I want to subscribe to your newsletter and receive email
                communication.
              </span>
            </label>
          </div>
        </div>

        <img
          src={reCAPTCHA}
          alt="Protected by reCAPTCHA"
          className="h-auto w-44"
        />

        <button
          type="submit"
          className="rounded-2xl cursor-pointer bg-lime-300 px-6 py-4 font-bold text-green-950 transition-colors hover:bg-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
