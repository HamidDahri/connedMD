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
        <div className="container flex flex-col items-center justify-center pt-40 pb-24 mx-auto max-w-[1320px]">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-8 col-start-3">
              <h1 className="text-2xl font-semibold text-center text-primary">
                The ConnectMD Difference
              </h1>
              <h2 className="text-6xl font-semibold text-center text-gray-800 leading-[72px]">
                Where Insight Meets Individualized Care
              </h2>
            </div>
            <div className="flex flex-col col-span-10 col-start-2 gap-6">
              <p className="text-lg text-center text-gray-800">
                In a world of rushed appointments, fragmented records, and
                one-size-fits-all solutions, ConnectMD offers something
                different: care that actually knows you.
              </p>

              <p className="text-lg text-center text-gray-800">
                We bring together deep clinical expertise, secure medical record
                access, and a personalized approach to give patients and doctors
                the clarity they need—and the care they deserve.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container py-24 mx-auto">
        {/* <h2 className="text-6xl font-semibold text-center text-gray-800">
          What Sets Us Apart
        </h2> */}
        <AccordionScrollEffect />
      </section>

      <section className="relative py-24">
        <div className="container flex flex-col gap-10 mx-auto">
          <h2 className="text-6xl font-semibold text-gray-800">
            Our Impact, In Real Terms
          </h2>

          <div className="grid items-stretch grid-cols-12 gap-4">
            <div className="col-span-4">
              <div className="flex items-center justify-center h-full p-8 cursor-pointer min-h-72 bg-gradient-to-b from-primary to-cyanBlue rounded-3xl">
                <span className="animate-spin">
                  <ConnectmdIcon height="154" width="154" fill="#ffffff" />
                </span>
              </div>
            </div>

            <div className="col-span-4">
              <div className="relative flex flex-col h-full gap-4 p-8 cursor-pointer min-h-72 rounded-3xl bg-slate-100 group hover:bg-gradient-to-b from-primary to-cyanBlue">
                <Image
                  src={Images.connectmdDifference.termIcon1}
                  alt=""
                  className="drop-shadow-xl"
                />
                <div>
                  <h2 className="text-3xl font-semibold text-slate-900 group-hover:text-white">
                    Faster access
                  </h2>
                  <p className="text-lg font-normal group-hover:text-white">
                    to accurate diagnoses
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-4">
              <div className="relative flex flex-col h-full gap-4 p-8 cursor-pointer min-h-72 rounded-3xl bg-slate-100 group hover:bg-gradient-to-b from-primary to-cyanBlue">
                <Image
                  src={Images.connectmdDifference.termIcon2}
                  alt=""
                  className="drop-shadow-xl"
                />
                <div>
                  <h2 className="text-3xl font-semibold text-slate-900 group-hover:text-white">
                    Reduced frustration
                  </h2>
                  <p className="text-lg font-normal group-hover:text-white">
                    from navigating disjointed healthcare systems
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-4">
              <div className="relative flex flex-col h-full gap-4 p-8 cursor-pointer min-h-72 rounded-3xl bg-slate-100 group hover:bg-gradient-to-b from-primary to-cyanBlue">
                <Image
                  src={Images.connectmdDifference.termIcon3}
                  alt=""
                  className="drop-shadow-xl"
                />
                <div>
                  <h2 className="text-3xl font-semibold text-slate-900 group-hover:text-white">
                    Greater confidence
                  </h2>
                  <p className="text-lg font-normal group-hover:text-white">
                    in complex treatment decisions
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-4">
              <div className="relative flex flex-col h-full gap-4 p-8 cursor-pointer min-h-72 rounded-3xl bg-slate-100 group hover:bg-gradient-to-b from-primary to-cyanBlue">
                <Image
                  src={Images.connectmdDifference.termIcon4}
                  alt=""
                  className="drop-shadow-xl"
                />
                <div>
                  <h2 className="text-3xl font-semibold text-slate-900 group-hover:text-white">
                    Stronger partnerships
                  </h2>
                  <p className="text-lg font-normal group-hover:text-white">
                    between patients and providers
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-4">
              <div className="relative flex flex-col w-full h-full gap-4 p-8 cursor-pointer min-h-72 rounded-3xl bg-slate-100 group hover:bg-gradient-to-b from-primary to-cyanBlue">
                <Image
                  src={Images.connectmdDifference.termIcon5}
                  alt=""
                  className="drop-shadow-xl"
                />
                <div>
                  <h2 className="text-3xl font-semibold text-slate-900 group-hover:text-white">
                    Better health outcomes
                  </h2>
                  <p className="text-lg font-normal group-hover:text-white">
                    driven by complete, personalized care
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" py-24 bg-woodSmoke rounded-4xl bg-[url(/images/differenceFooterBanner.jpg)] bg-right bg-contain bg-no-repeat relative">
        <div className="container mx-auto">
          <div className="grid items-center justify-center grid-cols-12 gap-4 ">
            <div className="flex flex-col col-span-6 gap-8">
              <h2 className="mb-5 text-6xl font-semibold text-white">
                Built for the{" "}
                <span className="text-crocus-purple pe-2">Whole</span>
                You
              </h2>
              <p className="text-lg text-white">
                At ConnectMD, we’re not just helping people get second
                opinions—we’re helping them feel seen, supported, and understood
                in every step of their care journey. That’s the ConnectMD
                Difference.
              </p>
              <h2 className="text-xl font-semibold text-white">
                Your health is personal. Your care should be, too.
              </h2>

              <ThemeButton paddings="px-10 py-2.5" type={ButtonType.WHITE}>
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
