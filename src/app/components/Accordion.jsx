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
      answer:
        "ConnectMD partners with over 2,000 board-certified physicians across every major specialty. Whether you're facing a complex diagnosis or seeking a second perspective, we connect you with the right expert for your needs.",
      icon: <PersonIcon />,
    },
    {
      question: "Personalized, Patient-Centered Care",
      title: "Treatment plans that reflect you.",
      answer:
        "We believe great care goes beyond the textbook. That’s why our doctors tailor their guidance to your values, preferences, and lifestyle—whether that includes conventional medicine, holistic practices, or innovative therapies like peptides.",
      icon: <HeartECGIcon />,
    },
    {
      question: "Informed Decisions, Without the Guesswork",
      title: "Know more. Worry less.",
      answer:
        "With full access to your health records and insights from top physicians, you can make care decisions with clarity and confidence. No more uncertainty—just a clear path forward.",
      icon: <CheckListIcon />,
    },
    {
      question: "Less Stress, More Support",
      title: "We handle the hard part.",
      answer:
        "Navigating healthcare can be frustrating. Our team takes care of the logistics—retrieving records, coordinating care, and keeping your data secure—so you can focus on your health, not the paperwork.",
      icon: <BrainIcon />,
    },
    {
      question: "Better Outcomes, Backed by Better Information",
      title: "Real care starts with real context.",
      answer:
        "When doctors have the full story, they make better choices—and so do you. That leads to more accurate diagnoses, more effective treatments, and better long-term outcomes.",
      icon: <InfoFolderIcon />,
    },
    {
      question: "Care That Comes to You",
      title: "Nationwide service, at your fingertips.",
      answer:
        "From the comfort of your home, you can access expert medical reviews and support—no travel, no waiting rooms, no unnecessary appointments.",
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
          className={`flex flex-col gap-6 p-3 transition duration-700 ease-in-out ${
            activeIndex === index ? "bg-primary" : "bg-alice-blue"
          } md:p-9 md:pb-10 rounded-2xl md:rounded-3xl`}
          onClick={() => handleToggle(index)}
        >
          <div className="flex items-start justify-between gap-4 cursor-pointer">
            <div className="flex items-start gap-3 md:gap-6">
              <span
                className={`flex items-center justify-center md:w-16 md:h-16 w-10 h-10 shrink-0 rounded-full ${
                  activeIndex === index ? "bg-secondary" : "bg-white"
                }`}
              >
                {item.icon}
              </span>
              <div>
                <h4
                  className={`text-base font-semibold ${
                    activeIndex === index ? "text-white" : "text-neutral-800"
                  } md:text-2xl`}
                >
                  {item.question}
                </h4>
                <h5
                  className={`text-sm font-normal ${
                    activeIndex === index ? "text-secondary" : "text-gray-800"
                  }`}
                >
                  {item.title}
                </h5>
              </div>
            </div>
            <div className="relative flex justify-center flex-shrink-0 px-4 text-base font-medium rounded-full md:w-5 md:h-5 rtl:pb-3 ltr:pt-0 md:text-xl ">
              <span className="absolute top-0 rounded-full ">
                {activeIndex === index ? (
                  <span className="flexs">
                    <AccordionIcon />
                  </span>
                ) : (
                  <span className="flex -rotate-180 ">
                    <AccordionIcon />
                  </span>
                )}
              </span>
            </div>
          </div>
          {activeIndex === index && (
            <div className="p-3 md:p-8 bg-white/10 rounded-2xl md:rounded-3xl">
              <p className="text-sm text-white md:text-lg">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
