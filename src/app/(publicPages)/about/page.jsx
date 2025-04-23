"use client";
import React from "react";
import ThemeButton, { ButtonType } from "../../components/ThemeButton";
import { Images } from "../../ui/images";
import Image from "next/image";
import ConnectmdIcon from "../../../../public/svg/ConnectmdIcon";

const page = () => {
  return (
    <>
      <section className="bg-[url(/images/heroBgPattern.svg)] bg-vista-white w-full bg-no-repeat bg-cover">
        <div className="container flex flex-col gap-4 pb-8 mx-auto md:pb-24 md:gap-8 pt-28 md:pt-40">
          <div className="grid grid-cols-12 px-4 md:px-auto">
            <div className="flex flex-col col-span-12 gap-4 mb-4 md:mb-auto md:col-span-7 md:gap-6">
              <h1 className="text-3xl md:text-[52px] text-center md:text-start font-semibold  text-gray-800 md:leading-[60px]">
                Personalized{" "}
                <span className="italic text-secondary font-playfair">
                  Medical Expertise,
                </span>{" "}
                Powered by Complete Health Histories
              </h1>

              <ThemeButton
                type={ButtonType.PRIMARY}
                paddings="px-10 py-2.5 w-full md:w-auto"
                onClick={() => console.log("Learn How It Works")}
              >
                Learn How It Works
              </ThemeButton>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="text-base text-gray-800 md:text-lg ">
                At <strong>ConnectMD</strong>, we’re transforming how patients
                access expert medical insight. Through our national network of
                over 2,000 board-certified physicians spanning all major
                specialties, we connect individuals with specialists who provide
                personalized, in-depth medical evaluations and care
                recommendations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4 px-4 md:gap-6 md:px-auto">
            <div className="flex flex-col col-span-12 gap-4 md:flex-row md:gap-6 md:col-span-6">
              <p className="text-base text-gray-800 md:text-lg ">
                Patients don’t always remember every detail of their medical
                history, which can make it difficult for doctors to get the full
                picture. That’s why we’ve built proprietary technology that
                securely retrieves and organizes a patient’s complete medical
                records—giving physicians the information they need to identify
                patterns, uncover clinical connections, and make more informed
                decisions.
              </p>
              <p className="text-lg text-gray-800 ">
                Unlike traditional telehealth services focused on symptoms
                alone,
                <strong>ConnectMD</strong> offers thoughtful medical reviews and
                treatment strategies tailored to each individual’s history,
                preferences, and values. Whether a patient prefers conventional
                medicine, holistic therapies, or cutting-edge modalities like
                peptides, our platform supports care that is both clinically
                sound and personally meaningful.
              </p>
            </div>
            <div className="flex flex-col col-span-12 gap-4 md:gap-6 md:col-span-6">
              <p className="text-lg text-gray-800 ">
                We’re closing critical gaps in the healthcare system—fragmented
                records, rushed appointments, and generic care plans—by enabling
                secure, streamlined access to health data and matching patients
                with doctors who practice with empathy and precision.
              </p>
              <p className="text-lg text-gray-800 ">
                Our goal is simple: to help patients live healthier, more
                fulfilling lives by delivering the clarity and confidence they
                need to make informed choices about their care.
              </p>

              <p className="text-lg text-gray-800 ">
                <strong>ConnectMD</strong> is headquartered in Southern
                California and proudly serves patients nationwide. Welcome to a
                new era of personalized, data-driven healthcare.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-24">
        <div className="container flex flex-col items-center justify-center gap-4 mx-auto">
          <h2 className="text-xl font-semibold text-center md:text-2xl text-primary">
            Our Mission
          </h2>
          <h3 className="text-3xl font-bold text-center text-gray-800 md:w-3/4 md:text-5xl md:leading-16">
            Empowering Better Care Through Clarity, Connection, and Compassion
          </h3>

          <div className="w-full mt-4 md:mt-12">
            <div className="p-8 md:p-24 bg-primaryExtraDark rounded-t-3xl md:rounded-t-4xl">
              <div className="mb-8 md:px-12 md:mb-16">
                <Image src={Images.About.about} alt="" />
              </div>
              <span className="text-base text-center md:text-2xl block w-fit mb-6 bg-gradient-to-r from-[#C1DFC4] to-[#DEECDD] px-4 md:px-8 py-2.5 rounded-full text-primaryExtraDark ">
                At <strong>ConnectMD</strong>, our mission is simple
              </span>

              <div className="flex flex-col gap-4">
                <h2 className="text-3xl font-semibold text-white md:text-6xl md:leading-16">
                  To help people live healthier, more fulfilling lives by{" "}
                  <span className="text-moon-mist">making expert</span> medical
                  guidance more personalized, accessible, and informed.
                </h2>
                <p className="text-base text-gray-300 md:text-xl md:leading-9">
                  We believe that every patient deserves care rooted in
                  understanding—of their full medical history, their personal
                  values, and their unique journey. Yet too often, that
                  understanding is limited by incomplete records, generic
                  treatment plans, and impersonal healthcare experiences.
                </p>
              </div>
            </div>
            <div className="p-4 md:py-12 md:px-24 bg-moon-mist rounded-b-4xl">
              <div className="flex items-center justify-center gap-3">
                <span className="hidden animate-spin md:block">
                  <ConnectmdIcon />
                </span>
                <span className="block animate-spin md:hidden">
                  <ConnectmdIcon width="34" height="34" />
                </span>
                <h2 className="text-xl font-bold text-center md:text-4xl text-primaryExtraDark">
                  We’re here to change that.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container flex flex-col gap-4 px-4 mx-auto md:px-auto md:gap-10">
          <h2 className="text-3xl font-bold text-center md:text-6xl">
            What We Stand For
          </h2>

          <div className=" rounded-4xl bg-soft-pink">
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-8">
                <div className="flex flex-col items-start justify-start gap-4 p-4 md:gap-6 md:p-12">
                  <div className="relative flex items-center justify-center">
                    <Image
                      src={Images.About.iconWhiteBG}
                      className="w-16 md:w-auto "
                      alt=""
                    />
                    <div className="absolute hidden animate-spin md:block">
                      <ConnectmdIcon fill="#FFB4AD" />
                    </div>
                    <div className="absolute block md:hidden animate-spin">
                      <ConnectmdIcon fill="#FFB4AD" width="34" height="34" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h2 className="text-4xl font-bold text-charcoal">
                      Whole-Person Insight
                    </h2>
                    <p className="text-lg ">
                      We give doctors a complete view of each patient’s health
                      journey by securely retrieving and organizing medical
                      records from across providers and time. With this depth of
                      knowledge, physicians can spot patterns, connect the dots,
                      and make truly informed recommendations. Expertise with
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-12 overflow-hidden md:col-span-4">
                <div className="relative m-4 mb-0 md:m-12">
                  <Image
                    src={Images.About.abt1}
                    alt=""
                    className="top-0 w-full md:absolute"
                  ></Image>
                </div>
              </div>
            </div>
          </div>

          <div className=" rounded-4xl bg-pale-aqua">
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-8">
                <div className="flex flex-col items-start justify-start gap-6 p-4 md:p-12">
                  <div className="relative flex items-center justify-center">
                    <Image
                      src={Images.About.iconWhiteBG}
                      className="w-16 md:w-auto "
                      alt=""
                    />

                    <div className="absolute hidden animate-spin md:block">
                      <ConnectmdIcon fill="#C4CFFF" />
                    </div>
                    <div className="absolute block md:hidden animate-spin">
                      <ConnectmdIcon fill="#C4CFFF" width="34" height="34" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h2 className="text-4xl font-bold text-charcoal">
                      Whole-Person Insight
                    </h2>
                    <p className="text-lg ">
                      We give doctors a complete view of each patient’s health
                      journey by securely retrieving and organizing medical
                      records from across providers and time. With this depth of
                      knowledge, physicians can spot patterns, connect the dots,
                      and make truly informed recommendations. Expertise with
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-12 overflow-hidden md:col-span-4">
                <div className="relative m-4 mb-0 md:m-12">
                  <Image
                    src={Images.About.abt2}
                    alt=""
                    className="top-0 w-full md:absolute"
                  ></Image>
                </div>
              </div>
            </div>
          </div>

          <div className=" rounded-4xl bg-tron-blue">
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-8">
                <div className="flex flex-col items-start justify-start gap-4 p-4 md:gap-6 md:p-12">
                  <div className="relative flex items-center justify-center">
                    <Image
                      src={Images.About.iconWhiteBG}
                      className="w-16 md:w-auto "
                      alt=""
                    />

                    <div className="absolute hidden animate-spin md:block">
                      <ConnectmdIcon fill="#93F7FF" />
                    </div>
                    <div className="absolute block md:hidden animate-spin">
                      <ConnectmdIcon fill="#93F7FF" width="34" height="34" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h2 className="text-4xl font-bold text-charcoal">
                      Whole-Person Insight
                    </h2>
                    <p className="text-lg ">
                      We give doctors a complete view of each patient’s health
                      journey by securely retrieving and organizing medical
                      records from across providers and time. With this depth of
                      knowledge, physicians can spot patterns, connect the dots,
                      and make truly informed recommendations. Expertise with
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-12 overflow-hidden md:col-span-4">
                <div className="relative m-4 md:m-12">
                  <Image
                    src={Images.About.abt3}
                    alt=""
                    className="top-0 w-full md:absolute"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b to-[#A8EDEA09] from-[#9BCFE570] rounded-t-4xl pt-8 md:pt-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-4 px-4 md:px-auto">
            <div className="flex flex-col items-center justify-center col-span-12 gap-4 mb-2 md:mb-12">
              <h3 className="text-3xl font-semibold text-center text-gray-800 md:my-3 md:text-6xl">
                Why It Matters
              </h3>
              <h4 className="text-base font-normal text-center text-gray-800 md:w-3/4 md:text-lg">
                Healthcare should be about more than just treating symptoms—it
                should be about understanding people. When patients feel seen,
                heard, and supported, they’re more confident in their care, more
                engaged in their healing, and more likely to achieve meaningful
                health outcomes.
              </h4>
            </div>
            <div className="col-span-12">
              <div>
                <Image
                  alt=""
                  className="w-full"
                  src={Images.About.whyMattersBanner}
                ></Image>
              </div>
            </div>

            <div className="col-span-12 mt-4 md:col-span-10 md:col-start-2 md:mt-12">
              <p className="mb-4 text-base text-center text-gray-800 md:text-lg">
                <strong>ConnectMD</strong> bridges the gap between fragmented
                medical records and truly personalized care. We're setting a new
                standard in healthcare—one that values clarity, connection, and
                compassion at every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-24 bg-black rounded-3xl md:rounded-4xl bg-[url(/images/aboutFooterBanner.jpg)] bg-right bg-cover md:bg-contain bg-no-repeat">
        <div className="container mx-auto">
          <div className="grid items-center justify-center grid-cols-12 gap-4 px-4 md:px-auto ">
            <div className="flex flex-col col-span-12 gap-4 md:gap-8 md:col-span-6">
              <h2 className="mb-0 text-3xl font-semibold text-center text-white md:mb-5 md:text-start md:text-6xl">
                Looking <span className="text-emerald-400">Ahead</span>
              </h2>
              <p className="text-base text-center text-white md:text-start md:text-lg">
                We’re proud to serve patients across the country from our home
                base in Southern California. But our vision is bigger: a
                healthcare system that treats people, not just problems.
              </p>
              <p className="mb-4 text-base text-center text-white md:text-start md:text-lg">
                With every record retrieved, every conversation had, and every
                decision made with insight—we’re getting one step closer.
              </p>

              <div className="py-3 md:py-5 border-l-[5px] rounded-lg bg-emerald-900 px-4 md:px-9 border-emerald-400">
                <h2 className="text-sm text-white md:text-lg">
                  Because better information leads to better care. And better
                  care leads to better lives.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
