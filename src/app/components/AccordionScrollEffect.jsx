"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MedicalAccordion = () => {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Only initialize ScrollTrigger if the screen width is greater than 768px
    if (window.innerWidth > 768) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".accordions",
          pin: true,
          pinSpacing: false,
          start: "top 10%",
          end: "bottom 450px",
          scrub: 0.5,
          ease: "linear",
          // markers: true,
        },
      });

      tl.to(
        ".accordion .text",
        {
          height: 0,
          paddingBottom: 0,
          opacity: 0,
          stagger: 0.5,
          duration: 0.5,
        },
        0.1
      ).to(
        ".accordion",
        {
          marginBottom: -30,
          stagger: 0,
        },
        "<"
      );

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  const contentStyle = {
    margin: "0 auto",
  };

  const textContainerStyle = {
    flex: "1 1 300px",
    marginRight: "20px",
  };

  const imageContainerStyle = {
    flex: "0 0 auto",
    maxWidth: "300px",
    width: "100%",
  };

  const imageStyle = {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "8px",
  };

  const accordionData = [
    {
      number: "1",
      title: "Medical Records That Actually Tell Your Story",
      text: "We don't just ask about your symptoms—we uncover your full health history. Our proprietary technology securely retrieves, organizes, and delivers your complete medical records to our network of physicians. The result? Care that's based on facts, not fragments.",
      image: "/images/Apart1.svg",
      imageAlt: "Patient medical history chart",
      backgroundColor: "#C4CFFF",
    },
    {
      number: "2",
      title: "A National Network of Top Specialists",
      text: "ConnectMD partners with over 2,000 board-certified physicians across all major specialties. Whether you’re facing a complex diagnosis or exploring alternative treatment options, we’ll connect you with the right expert for your specific needs.",
      image: "/images/Apart2.svg",
      imageAlt: "Patient medical history chart",
      backgroundColor: "#FFB4AD",
    },
    {
      number: "3",
      title: "Personalized, Culturally Aligned Care Plans",
      text: "You’re not a checklist. Our doctors listen, consider your preferences, and design treatment plans that respect your values—whether you lean toward traditional medicine, holistic therapies, or emerging treatments like peptides.",
      image: "/images/Apart3.svg",
      imageAlt: "Patient medical history chart",
      backgroundColor: "#FFE79A",
    },
    {
      number: "4",
      title: "More Than a Second Opinion—A Strategic Health Partner",
      text: "While many platforms stop at second opinions, we go further. ConnectMD offers comprehensive medical reviews, treatment guidance, and long-term insights based on your unique health profile. It’s not just advice—it’s a strategy for your wellness.",
      image: "/images/Apart4.svg",
      imageAlt: "Patient medical history chart",
      backgroundColor: "#93F7FF",
    },
    {
      number: "5",
      title: "Precision + Compassion",
      text: "Our care model blends advanced data with a human touch. We believe the best decisions are made when medical insight is paired with empathy—and that’s what our providers deliver every time.",
      image: "/images/Apart5.svg",
      imageAlt: "Patient medical history chart",
      backgroundColor: "#D1FAE5",
    },
  ];

  return (
    <div
      id="wrapper"
      ref={wrapperRef}
      className="!md:pb-12 pt-0 md:pt-10 bg-white"
    >
      <div
        id="content"
        className="container mx-auto"
        ref={contentRef}
        style={contentStyle}
      >
        <div className="pin-wrapper">
          <div className="accordions">
            <h2 className="mb-4 text-3xl font-bold text-center text-gray-800 md:text-6xl md:mb-12">
              What Sets Us Apart
            </h2>
            {accordionData.map((item, idx) => (
              <div
                className="p-3 mb-4 overflow-hidden shadow accordion md:p-6 rounded-xl"
                key={idx}
                style={{
                  backgroundColor: item.backgroundColor,
                  transition: "all 0.3s ease",
                }}
              >
                <div className="flex items-start mb-2 md:mb-4 md:items-center">
                  <div className="flex items-center justify-center mr-3 font-bold bg-white rounded-full shrink-0 w-7 h-7 text-primaryExtraDark">
                    {item.number}
                  </div>
                  <div className="text-base font-semibold md:text-2xl text-neutral-800 title">
                    {item.title}
                  </div>
                </div>
                <div className="overflow-hidden bg-white text rounded-xl md:rounded-3xl">
                  <div className="flex flex-wrap items-start justify-between p-4 md:p-10">
                    <div style={textContainerStyle}>
                      <div className="text-base md:text-lg text-charcoal">
                        {item.text}
                      </div>
                    </div>
                    <div style={imageContainerStyle}>
                      <img
                        src={item.image}
                        alt={item.imageAlt}
                        style={imageStyle}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalAccordion;
