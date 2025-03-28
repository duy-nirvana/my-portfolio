import React, { useState } from "react";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import { FiMail, FiPhone } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import useCopy from "../../hooks/useCopy";

const ContactSection = () => {
  const [copiedIds, setCopy] = useCopy();

  const contactInfo = [
    {
      icon: FiMail,
      title: "Email",
      value: "trankhanhduy8599@gmail.com",
      href: 'trankhanhduy8599@gmail.com',
      isCopy: true,
    },
    {
      icon: FiPhone,
      title: "Phone",
      value: "(+84) 932 625 091",
      href: '0932625091',
      isCopy: true,
    },
    {
      icon: HiOutlineLocationMarker,
      title: "Location",
      value: "District 8, HCM City",
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

        <div className="flex justify-center w-full">
          <div className="animate-slide-in-left w-full md:w-fit">
            <div className="flex justify-center flex-col gap-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    className={twMerge(
                      "flex items-center gap-4 bg-dark text-secondary py-2 px-4 lg:px-6 rounded-md relative transition-all",
                      item.isCopy && " cursor-pointer",
                      copiedIds[index] && "copied"
                    )}
                    key={index}
                    onClick={() => item.isCopy && setCopy(index, item.href)}
                  >
                    <Icon className="w-7 h-7 min-w-fit" />
                    <div className="flex flex-col gap-1">
                      <p>{item.title}</p>
                      <p className="break-words">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
