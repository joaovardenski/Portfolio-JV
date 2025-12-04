import { useState } from "react";
import { images } from "../constants";
import emailjs from "emailjs-com";

const Footer = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
  if (!username || !email || !message) {
    return alert("Please fill all fields");
  }

  setLoading(true);

  const templateParams = {
    name: username,
    from_email: email,
    message,
  };

  emailjs
    .send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(
      () => {
        setLoading(false);
        setIsFormSubmitted(true);
      },
      (error) => {
        setLoading(false);
        alert("Something went wrong, please try again.");
        console.error(error);
      }
    );
};


  return (
    <section id="contact" className="w-full flex flex-col items-center py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Take a coffee & chat with me
      </h2>

      {/* CONTACT CARDS */}
      <div className="w-full md:w-3/5 flex flex-wrap justify-evenly items-center mt-12 mb-8 gap-4">
        <div className="min-w-[260px] flex items-center p-4 rounded-xl cursor-pointer bg-red-50 hover:shadow-xl transition-all">
          <img src={images.email} alt="email" className="w-10 h-10 mr-4" />
          <a href="mailto:joaovvandrade@gmail.com" className="text-gray-700 font-medium">
            joaovvandrade@gmail.com
          </a>
        </div>

        <div className="min-w-[260px] flex items-center p-4 rounded-xl cursor-pointer bg-blue-50 hover:shadow-xl transition-all">
          <img src={images.mobile} alt="phone" className="w-10 h-10 mr-4" />
          <a href="tel:+5542998659526" className="text-gray-700 font-medium">
            +55 (42) 99865-9526
          </a>
        </div>
      </div>

      {/* FORM */}
      {!isFormSubmitted ? (
        <div className="w-full md:w-3/5 flex flex-col mt-4">
          <div className="w-full bg-indigo-50 rounded-xl hover:shadow-xl transition-all mb-3">
            <input
              type="text"
              name="username"
              placeholder="Your Name"
              value={username}
              onChange={handleChangeInput}
              className="w-full p-4 rounded-xl bg-indigo-100 text-gray-700 outline-none"
            />
          </div>

          <div className="w-full bg-indigo-50 rounded-xl hover:shadow-xl transition-all mb-3">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={handleChangeInput}
              className="w-full p-4 rounded-xl bg-indigo-100 text-gray-700 outline-none"
            />
          </div>

          <div className="w-full bg-indigo-50 rounded-xl hover:shadow-xl transition-all">
            <textarea
              name="message"
              placeholder="Your Message"
              value={message}
              onChange={handleChangeInput}
              className="w-full p-4 rounded-xl bg-indigo-100 text-gray-700 outline-none h-40 resize-none"
            />
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="mt-6 bg-indigo-600 text-white font-semibold py-3 rounded-xl hover:bg-indigo-700 transition-all"
          >
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-center">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </section>
  );
};

export default Footer;
