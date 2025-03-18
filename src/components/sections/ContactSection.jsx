import React, { useState } from "react";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import { FiMail, FiPhone } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: "Email",
      value: "trankhanhduy8599@gmail.com",
      link: "mailto:hello@joshua.com",
      isCopy: true,
    },
    {
      icon: FiPhone,
      title: "Phone",
      value: "(+84) 932 625 091",
      link: "tel:+15551234567",
      isCopy: true,
    },
    {
      icon: HiOutlineLocationMarker,
      title: "Location",
      value: "New York, USA",
      link: null,
      isCopy: false,
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container-narrow">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind? Let's talk about it"
          align="center"
        />

        <div className="flex justify-center">
          <div className="animate-slide-in-left">
            {/* <h3 className="text-2xl font-bold mb-6">
              Let's build something amazing together
            </h3>
            <p className="text-light/80 mb-8">
              I'm always interested in hearing about new projects and
              opportunities. Whether you have a question or just want to say hi,
              I'll try my best to get back to you!
            </p> */}

            <div className="flex justify-center flex-col gap-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    className={twMerge(
                      "flex items-center gap-4 bg-black/20 py-2 px-4 lg:px-6 rounded-md relative",
                      item.isCopy &&
                        "cursor-pointer after:absolute after:w-fit after:h-fit after:bg-accent after:right-0 after:top-0 after:-translate-y-1/2 after:content-['Copied!'] after:text-xs after:p-1 after:rounded-md"
                    )}
                    key={index}
                  >
                    <Icon className="w-7 h-7" />
                    <div className="flex flex-col gap-1">
                      <p>{item.title}</p>
                      <p>{item.value}</p>
                    </div>
                  </div>
                );
              })}
              {/* {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-secondary p-3 rounded-lg mr-4">
                      {item.icon === "mail" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      )}
                      {item.icon === "phone" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      )}
                      {item.icon === "location" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-light/80 hover:text-accent transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-light/80">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))} */}
            </div>
          </div>

          {/* <div className="animate-slide-in-right">
            <form
              onSubmit={handleSubmit}
              className="bg-secondary rounded-xl p-8"
            >
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-primary/50 border border-light/10 rounded-lg p-3 text-light focus:outline-none focus:ring-2 focus:ring-accent/50"
                  placeholder="Your name"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-primary/50 border border-light/10 rounded-lg p-3 text-light focus:outline-none focus:ring-2 focus:ring-accent/50"
                  placeholder="Your email"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-primary/50 border border-light/10 rounded-lg p-3 text-light focus:outline-none focus:ring-2 focus:ring-accent/50"
                  placeholder="Subject"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-primary/50 border border-light/10 rounded-lg p-3 text-light focus:outline-none focus:ring-2 focus:ring-accent/50"
                  placeholder="Your message"
                ></textarea>
              </div>

              {submitStatus === "success" && (
                <div className="mb-6 p-3 bg-green-500/20 border border-green-500 rounded-lg text-green-400">
                  Your message has been sent successfully!
                </div>
              )}

              <Button
                type="submit"
                variant="primary"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
