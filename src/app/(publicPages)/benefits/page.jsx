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
        <div className="container flex flex-col items-center justify-center pt-40 pb-24 mx-auto max-w-[1320px]">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-8 col-start-3">
              <h1 className="text-2xl font-semibold text-center text-primary">
                Benefits of ConnectMD
              </h1>
              <h2 className="text-6xl font-semibold text-center text-gray-800 leading-[72px]">
                Clarity. Confidence. Care that fits you.
              </h2>
            </div>
            <div className="flex flex-col col-span-10 col-start-2 gap-6">
              <p className="text-lg text-center text-gray-800">
                At ConnectMD, we believe that access to the right medical
                insight—at the right time—can change everything. Our platform is
                designed to give patients and doctors the tools they need to
                make better decisions, faster, and with more confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container flex flex-col gap-10 mx-auto">
          <h2 className="text-6xl font-semibold text-center text-gray-800">
            Our Impact, In Real Terms
          </h2>

          <Accordion />
        </div>
      </section>

      <section className="relative py-24 overflow-hidden rounded-4xl bg-gradient-to-r from-primary to-cyanBlue">
        <div className="container mx-auto">
          <div className="grid items-center justify-center grid-cols-12 gap-4 ">
            <div className="flex flex-col col-span-10 col-start-2 gap-8">
              <h2 className="mb-5 text-6xl font-semibold text-center text-white">
                Why It Matters
              </h2>
              <p className="text-lg text-center text-white">
                Healthcare should be personalized, proactive, and empowering. At
                ConnectMD, we’re redefining what’s possible by bridging the gap
                between fragmented data and whole-person care.
              </p>
            </div>

            <div className="col-span-12">
              <div className="py-10">
                <Image
                  alt=""
                  className="w-full"
                  src={Images.Benefits.whyMattersBanner}
                ></Image>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center col-span-10 col-start-2 gap-8">
              <p className="text-lg text-center text-white">
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
