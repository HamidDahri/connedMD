"use client";
import React from "react";
import ThemeButton, { ButtonType } from "../../components/ThemeButton";
import { Images } from "../../ui/images";
import Image from "next/image";
import ConnectmdIcon from "../../../../public/svg/ConnectmdIcon";
import AccordionScrollEffect from "../../components/AccordionScrollEffect";

const page = () => {
  return (
    <>
      <section className="bg-[url(/images/heroBgPattern.svg)] bg-vista-white w-full bg-no-repeat bg-cover">
        <div className="container flex flex-col items-center justify-center pt-28  md:pt-40 pb-12 md:pb-24 mx-auto max-w-[1320px]">
          <div className="grid grid-cols-12 gap-4 px-4 md:gap-10 md:px-auto">
            <div className="flex flex-col col-span-12 gap-4 md:col-span-8 md:col-start-3">
              <h1 className="text-xl font-semibold text-center md:text-2xl text-primary">
                The ConnectMD Difference
              </h1>
              <h2 className="text-3xl md:text-6xl font-bold text-center text-gray-800 md:leading-[72px]">
                Where Insight Meets Individualized Care
              </h2>
            </div>
            <div className="flex flex-col col-span-12 gap-4 md:gap-6 md:col-span-10 md:col-start-2">
              <p className="text-base text-center text-gray-800 md:text-lg">
                In a world of rushed appointments, fragmented records, and
                one-size-fits-all solutions, ConnectMD offers something
                different: care that actually knows you.
              </p>

              <p className="text-base text-center text-gray-800 md:text-lg">
                We bring together deep clinical expertise, secure medical record
                access, and a personalized approach to give patients and doctors
                the clarity they need—and the care they deserve.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container px-4 pt-8 mx-auto md:py-16">
        <AccordionScrollEffect />
      </section>

      <section className="relative py-8 md:py-24">
        <div className="container flex flex-col gap-10 mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 md:text-6xl">
            Our Impact, In Real Terms
          </h2>

          <div className="grid items-stretch grid-cols-12 gap-4 px-4 md:px-auto">
            <div className="col-span-12 md:col-span-4">
              <div className="flex items-center justify-center h-full p-6 md:p-8cursor-pointer md:min-h-72 bg-gradient-to-b from-primary to-cyanBlue rounded-3xl">
                <span className="hidden animate-spin md:block">
                  <ConnectmdIcon height="154" width="154" fill="#ffffff" />
                </span>
                <span className="animate-spin md:hidden">
                  <ConnectmdIcon height="100" width="100" fill="#ffffff" />
                </span>
              </div>
            </div>

            <div className="col-span-12 md:col-span-4">
              <div className="relative flex flex-col h-full gap-4 p-6 cursor-pointer md:p-8 md:min-h-72 rounded-3xl bg-slate-100 group hover:bg-gradient-to-b from-primary to-cyanBlue">
                <Image
                  src={Images.connectmdDifference.termIcon1}
                  alt=""
                  className="w-16 md:w-20 drop-shadow-xl"
                />
                <div>
                  <h2 className="text-xl font-bold md:text-3xl text-slate-900 group-hover:text-white">
                    Faster access
                  </h2>
                  <p className="text-base font-normal md:text-lg group-hover:text-white">
                    to accurate diagnoses
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-4">
              <div className="relative flex flex-col h-full gap-4 p-6 cursor-pointer md:p-8 md:min-h-72 rounded-3xl bg-slate-100 group hover:bg-gradient-to-b from-primary to-cyanBlue">
                <Image
                  src={Images.connectmdDifference.termIcon2}
                  alt=""
                  className="w-16 md:w-20 drop-shadow-xl"
                />
                <div>
                  <h2 className="text-xl font-bold md:text-3xl text-slate-900 group-hover:text-white">
                    Reduced frustration
                  </h2>
                  <p className="text-base font-normal md:text-lg group-hover:text-white">
                    from navigating disjointed healthcare systems
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-4">
              <div className="flex flex-col h-full gap-4 p-6 cursor-pointer md:p-8 md:min-h-72 rounded-3xl bg-slate-100 group hover:bg-gradient-to-b from-primary to-cyanBlue">
                <Image
                  src={Images.connectmdDifference.termIcon3}
                  alt=""
                  className="w-16 md:w-20 drop-shadow-xl"
                />
                <div>
                  <h2 className="text-xl font-bold md:text-3xl text-slate-900 group-hover:text-white">
                    Greater confidence
                  </h2>
                  <p className="text-base font-normal md:text-lg group-hover:text-white">
                    in complex treatment decisions
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-4">
              <div className="relative flex flex-col h-full gap-4 p-6 cursor-pointer md:p-8 md:min-h-72 rounded-3xl bg-slate-100 group hover:bg-gradient-to-b from-primary to-cyanBlue">
                <Image
                  src={Images.connectmdDifference.termIcon4}
                  alt=""
                  className="w-16 md:w-20 drop-shadow-xl"
                />
                <div>
                  <h2 className="text-xl font-bold md:text-3xl text-slate-900 group-hover:text-white">
                    Stronger partnerships
                  </h2>
                  <p className="text-base font-normal md:text-lg group-hover:text-white">
                    between patients and providers
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="relative flex flex-col w-full h-full gap-4 p-6 cursor-pointer md:p-8 md:min-h-72 rounded-3xl bg-slate-100 group hover:bg-gradient-to-b from-primary to-cyanBlue">
                <Image
                  src={Images.connectmdDifference.termIcon5}
                  alt=""
                  className="w-16 md:w-20 drop-shadow-xl"
                />
                <div>
                  <h2 className="text-xl font-bold md:text-3xl text-slate-900 group-hover:text-white">
                    Better health outcomes
                  </h2>
                  <p className="text-base font-normal md:text-lg group-hover:text-white">
                    driven by complete, personalized care
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 mb-8 md:py-24 bg-woodSmoke rounded-3xl md:rounded-4xl bg-[url(/images/differenceFooterBanner.jpg)] bg-right bg-cover md:bg-contain bg-no-repeat relative">
        <div className="container mx-auto">
          <div className="grid items-center justify-center grid-cols-12 gap-4 px-4 md:px-0 ">
            <div className="flex flex-col col-span-12 gap-4 md:col-span-6 md:gap-8">
              <h2 className="mb-0 text-3xl font-bold text-center text-white md:mb-5 md:text-start md:text-6xl">
                Built for the
                <span className="px-2 text-white md:text-crocus-purple">
                  Whole
                </span>
                You
              </h2>
              <p className="text-base text-white md:text-lg">
                At ConnectMD, we’re not just helping people get second
                opinions—we’re helping them feel seen, supported, and understood
                in every step of their care journey. That’s the ConnectMD
                Difference.
              </p>
              <h2 className="text-lg font-semibold text-white md:text-xl">
                Your health is personal. Your care should be, too.
              </h2>

              <ThemeButton
                paddings="md:px-10 px-4 py-2.5"
                type={ButtonType.WHITE}
              >
                Discover Your ConnectMD Experience
              </ThemeButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
