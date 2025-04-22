"use client";
import { useState } from "react";
import AccordionIcon from "../../../public/svg/AccordionIcon";
import HealthIcon from "../../../public/svg/HealthIcon";
import BrainIcon from "../../../public/svg/BrainIcon";
import CheckListIcon from "../../../public/svg/CheckListIcon";
import HeartECGIcon from "../../../public/svg/HeartECGIcon";
import InfoFolderIcon from "../../../public/svg/InfoFolderIcon";
import PersonIcon from "../../../public/svg/PersonIcon";
import SupportCareIcon from "../../../public/svg/SupportCareIcon";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqItems = [
    {
      question: "A Complete View of Your Health",
      title: "Your medical story, finally in one place.",
      answer:
        "We securely collect and organize your health records from doctors, hospitals, and clinics nationwide. That means no more repeating yourself, chasing paperwork, or missing critical details. Just a clear, complete picture of your medical history.",
      icon: <HealthIcon />,
    },
    {
      question: "Access to Trusted Specialists Nationwide",
      title: "Expertise you can trust—wherever you are.",
      answer: "We simplify your health data like never before.",
      icon: <PersonIcon />,
    },
    {
      question: "Personalized, Patient-Centered Care",
      title: "Treatment plans that reflect you.",
      answer: "Your medical data is encrypted and safe with us.",
      icon: <HeartECGIcon />,
    },
    {
      question: "Informed Decisions, Without the Guesswork",
      title: "Know more. Worry less.",
      answer: "Your medical data is encrypted and safe with us.",
      icon: <CheckListIcon />,
    },
    {
      question: "Less Stress, More Support",
      title: "We handle the hard part.",
      answer: "Your medical data is encrypted and safe with us.",
      icon: <BrainIcon />,
    },
    {
      question: "Better Outcomes, Backed by Better Information",
      title: "Real care starts with real context.",
      answer: "Your medical data is encrypted and safe with us.",
      icon: <InfoFolderIcon />,
    },
    {
      question: "Care That Comes to You",
      title: "Nationwide service, at your fingertips.",
      answer: "Your medical data is encrypted and safe with us.",
      icon: <SupportCareIcon />,
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-3 cursor-pointer select-none group">
      {faqItems.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col gap-6 p-3 ${
            activeIndex === index ? "bg-primary" : "bg-alice-blue"
          } md:p-9 md:pb-10 rounded-3xl`}
          onClick={() => handleToggle(index)}
        >
          <div className="flex items-center justify-between cursor-pointer">
            <div className="flex items-start gap-6">
              <span
                className={`flex items-center justify-center w-16 h-16 rounded-full ${
                  activeIndex === index ? "bg-secondary" : "bg-white"
                }`}
              >
                {item.icon}
              </span>
              <div>
                <h4
                  className={`text-xl font-semibold ${
                    activeIndex === index ? "text-white" : "text-neutral-800"
                  } md:text-2xl`}
                >
                  {item.question}
                </h4>
                <h5
                  className={`text-base font-normal ${
                    activeIndex === index ? "text-secondary" : "text-gray-800"
                  }`}
                >
                  {item.title}
                </h5>
              </div>
            </div>
            <span className="relative flex items-center justify-center rtl:pb-3 ltr:pt-0.5 flex-shrink-0 w-5 h-5 text-base border-2 rounded-full font-medium md:text-xl border-gray-m-800">
              <span className="absolute block rounded-full group-hover:border-4 group-hover:border-white/20">
                {activeIndex === index ? (
                  <AccordionIcon />
                ) : (
                  <span className="block -rotate-180">
                    <AccordionIcon />
                  </span>
                )}
              </span>
            </span>
          </div>
          {activeIndex === index && (
            <div className="p-8 bg-white/10 rounded-3xl">
              <p className="text-lg text-white">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
