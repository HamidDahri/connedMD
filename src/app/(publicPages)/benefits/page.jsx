"use client";
import React from "react";
import Accordion from "../../components/Accordion";
import ThemeButton, { ButtonType } from "../../components/ThemeButton";
import { Images } from "../../ui/images";
import Image from "next/image";

const page = () => {
  return (
    <>
      <section className="bg-[url(/images/heroBgPattern.svg)] bg-vista-white w-full bg-no-repeat bg-cover">
        <div className="container flex flex-col items-center justify-center pt-28 md:pt-40 pb-12 md:pb-24 mx-auto max-w-[1320px]">
          <div className="grid grid-cols-12 gap-4 px-4 md:gap-10 md:px-auto">
            <div className="flex flex-col col-span-12 gap-4 md:col-span-8 md:col-start-3">
              <h1 className="text-xl font-semibold text-center md:text-2xl text-primary">
                Benefits of ConnectMD
              </h1>
              <h2 className="text-3xl md:text-6xl font-bold text-center text-gray-800 md:leading-[72px]">
                Clarity. Confidence. Care that fits you.
              </h2>
            </div>
            <div className="flex flex-col col-span-12 gap-6 md:col-span-10 md:col-start-2">
              <p className="text-base text-center text-gray-800 md:text-lg">
                At ConnectMD, we believe that access to the right medical
                insight—at the right time—can change everything. Our platform is
                designed to give patients and doctors the tools they need to
                make better decisions, faster, and with more confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-24">
        <div className="container flex flex-col gap-4 px-4 mx-auto md:gap-10 md:px-0">
          <h2 className="text-3xl font-bold text-center text-gray-800 md:text-6xl">
            Our Impact, In Real Terms
          </h2>

          <Accordion />
        </div>
      </section>

      <section className="relative py-8 mb-8 overflow-hidden md:py-24 rounded-3xl md:rounded-4xl bg-gradient-to-r from-primary to-cyanBlue">
        <div className="container mx-auto">
          <div className="grid items-center justify-center grid-cols-12 gap-4 px-4 md:px-auto">
            <div className="flex flex-col col-span-12 gap-4 md:col-span-10 md:col-start-2 md:gap-8">
              <h2 className="mb-0 text-3xl font-bold text-center text-white md:mb-5 md:text-6xl">
                Why It Matters
              </h2>
              <p className="text-base text-center text-white md:text-lg">
                Healthcare should be personalized, proactive, and empowering. At
                ConnectMD, we’re redefining what’s possible by bridging the gap
                between fragmented data and whole-person care.
              </p>
            </div>

            <div className="col-span-12">
              <div className="py-4 md:py-10">
                <Image
                  alt=""
                  className="w-full"
                  src={Images.Benefits.whyMattersBanner}
                ></Image>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center col-span-12 gap-4 md:gap-8 md:col-span-10 md:col-start-2">
              <p className="text-base text-center text-white md:text-lg">
                Because better information leads to better care—and better care
                leads to a better life.
              </p>

              <ThemeButton type={ButtonType.SECONDARY}>
                Experience the Benefits Today
              </ThemeButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
