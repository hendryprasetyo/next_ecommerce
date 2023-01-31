import React, { useRef, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from "emailjs-com";
import { RiMessengerLine, RiWhatsappLine } from "react-icons/ri";
import Link from "next/link";

const Contact = () => {
  const [notif, setNotif] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_95y5v8q",
      "template_cjxl5g3",
      form.current,
      "fTploNM37ebA9FSUJ"
    );
    e.target.reset();
  };
  return (
    <section id="contact" className=" pt-24  flex flex-col items-center">
      <h5 className="text-center font-medium">Get In Touch</h5>
      <h2 className="text-center text-xl mb-12 font-medium">Contact Me</h2>

      <div className={" bg-blue-300 container relative rounded-xl"}>
        <div className={"flex items-center flex-col gap-6 mt-5"}>
          <article
            className={
              "flex flex-col items-center rounded-md hover:bg-gray-300 p-4 w-10/12"
            }
          >
            <MdOutlineEmail className="md:absolute left-0 text-2xl" />
            <h4 className="font-medium text-2xl tracking-wider">Email</h4>
            <h5 className="font-semibold text-xl">hendryprras@gmail.com</h5>
            <Link
              className="font-medium animate-bounce"
              href="mailto:hendryprras@gmail.com"
            >
              Send a message
            </Link>
          </article>
          <article
            className={
              "flex flex-col  items-center rounded-md hover:bg-gray-300 p-4 w-10/12"
            }
          >
            <RiMessengerLine className={"md:absolute text-2xl left-0"} />
            <h4 className="font-medium text-2xl tracking-wider">Massenger</h4>
            <h5 className=" font-semibold text-xl">hendryprras</h5>
            <Link
              className={"font-medium animate-bounce"}
              href="https://m.me/ernest.achiever"
            >
              Send a message
            </Link>
          </article>
          <article
            className={
              "flex flex-col  items-center rounded-md hover:bg-gray-300 p-4 w-10/12"
            }
          >
            <RiWhatsappLine className={"md:absolute left-0 text-2xl"} />
            <h4 className="font-medium text-2xl tracking-wider">WhatsApp</h4>
            <h5 className="font-semibold  text-xl">+6288809773289</h5>
            <Link
              href="https://api.whatsapp.com/send?phone=+6288809773289"
              className={"font-medium animate-bounce"}
            >
              Send a message
            </Link>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className={"flex flex-col gap-2 items-center  pt-10"}
        >
          <input
            className={
              "w-10/12 bg-transparent border-2 pl-4 border-gray-500 rounded-md h-10"
            }
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            className={
              "rounded-md h-10 bg-transparent border-2 pl-4 border-gray-500 w-10/12 "
            }
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            className={
              "bg-transparent border-2 pl-4 pt-4 border-gray-500 w-10/12 rounded-md"
            }
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button
            type="submit"
            className="flex bg-red-500 font-semibold text-lg tracking-wide hover:bg-red-400 text-gray-100 transition-all rounded-lg p-3 mt-8 mb-8"
            onClick={() => setNotif(true)}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
