"use client";
import React from "react";
import MedicalDashboardSwiper from "../components/MedicalDashboardSwiper";
import { Images } from "../ui/images";
import Image from "next/image";
import ThemeButton, { ButtonType } from "../components/ThemeButton";

const page = () => {
  const dashboardViews = [
    {
      id: "condition-history",
      title: "Condition History",
      imagePath: "/images/reviewSlide1.png",
      thumbnailPath: "/images/reviewSlide1Thumb.png",
    },
    {
      id: "vital-signs",
      title: "Vital Signs",
      imagePath: "/images/slide1.png",
      thumbnailPath: "/images/thumbSlide1.png",
    },
  ];
  return (
    <>
      <section className="bg-[url(/images/heroBgPattern.svg)] bg-vista-white w-full bg-no-repeat bg-cover">
        <div className="container flex flex-col items-center justify-center pt-40 pb-24 mx-auto">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-8 col-start-3">
              <h1 className="text-2xl font-semibold text-center text-primary">
                Meet C.A.R.E.™ — The ConnectMD AI Advantage
              </h1>
              <h2 className="text-6xl font-semibold text-center text-gray-800 leading-[72px]">
                Your Health. Your History. Your Answers.
              </h2>
            </div>
            <div className="flex flex-col col-span-10 col-start-2 gap-6">
              <p className="text-lg text-center text-gray-800">
                At ConnectMD, we’re always pushing the boundaries of
                personalized healthcare—and now, we’re taking it even further
                with the power of artificial intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container flex flex-col items-center justify-center pt-24 pb-0 mx-auto ">
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-10 col-start-2">
              <h2 className="text-base font-semibold text-center text-rosePink">
                Introducing C.A.R.E.™
              </h2>
              <h3 className="text-5xl font-semibold text-center text-gray-800 leading-[72px]">
                Clinical AI for Review & Engagement
              </h3>
            </div>
            <div className="col-span-10 col-start-2">
              <p className="mb-4 text-lg text-center text-gray-800">
                C.A.R.E.™ is our proprietary AI engine designed to support our
                network of physicians and empower patients like never before.
                From accelerating diagnosis to helping you understand your own
                medical records, C.A.R.E.™ brings clarity, speed, and confidence
                to your care experience.
              </p>
            </div>
            <div className="col-span-12">
              <MedicalDashboardSwiper dashboardViews={dashboardViews} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container flex flex-col gap-8 mx-auto">
          <h3 className="text-5xl font-semibold text-center text-slate-900 leading-[72px]">
            What C.A.R.E. Can Do
          </h3>

          <div className="grid items-center grid-cols-12 gap-8">
            <div className="flex flex-col order-1 col-span-6 gap-4 md:order-1">
              <h3 className="text-4xl font-bold text-gray-900">
                Speed Up the Path to Diagnosis
              </h3>
              <p className="text-lg text-gray-800">
                C.A.R.E.™ scans and synthesizes your entire medical
                history—labs, imaging, physician notes, prescriptions, and
                more—and surfaces the most relevant information to your
                ConnectMD physician. That means less time reviewing records, and
                more time focused on what matters: you.
              </p>
            </div>

            <div className="order-2 h-full col-span-6 md:order-2">
              <div className="bg-gradient-to-tl rounded-4xl from-[#FCB69F] to-[#FFECD2]  ">
                <div className="bg-[url(/images/LinePattern.svg)] p-8">
                  <Image src={Images.Meet.careImg1} alt=""></Image>
                </div>
              </div>
            </div>

            <div className="flex flex-col order-3 col-span-6 gap-4 md:order-4">
              <h3 className="text-4xl font-bold text-gray-900">
                Help Physicians Build Smarter Treatment Plans
              </h3>
              <p className="text-lg text-gray-800">
                As you remain covered, you pre-select a percentage that
                seamlessly go into your growth fund, letting your finances
                quietly expand without extra steps. This approach nurtures
                consistent value in the background, so you can focus on what
                matters most.
              </p>
            </div>

            <div className="order-4 h-full col-span-6 md:order-3">
              <div className="bg-gradient-to-tl rounded-4xl from-[#E6DEE9] to-[#FDCAF1]  ">
                <div className="bg-[url(/images/LinePattern.svg)] p-8">
                  <Image src={Images.Meet.careImg2} alt=""></Image>
                </div>
              </div>
            </div>

            <div className="flex flex-col order-5 col-span-6 gap-4 md:order-5">
              <h3 className="text-4xl font-bold text-gray-900">
                Chat With Your Medical Records
              </h3>
              <p className="text-lg text-gray-800">
                Ever wish you could ask your health records a question? Now you
                can. With C.A.R.E.™ Chat, you can interact with your health
                history in plain language. Want to know when your last MRI was?
                What medications you’ve tried for a condition? What trends your
                bloodwork is showing? Just ask. C.A.R.E.™ makes your data
                understandable and accessible—instantly.
              </p>
            </div>

            <div className="order-6 h-full col-span-6 md:order-6">
              <div className="bg-gradient-to-tl rounded-4xl from-[#C1DFC4] to-[#DEECDD]  ">
                <div className="bg-[url(/images/LinePattern.svg)] p-8">
                  <Image src={Images.Meet.careImg3} alt=""></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden rounded-4xl bg-red-50">
        <div className="container mx-auto">
          <div className="grid items-center justify-center grid-cols-12 gap-4 ">
            <div className="flex flex-col col-span-10 col-start-2 gap-8">
              <h2 className="mb-5 text-6xl font-semibold text-center text-slate-900">
                Why It Matters
              </h2>
              <p className="text-lg text-center text-gray-800">
                Most healthcare systems are reactive, slow, and disconnected. At
                ConnectMD, we believe in proactive care that puts patients in
                the driver’s seat. C.A.R.E.™ is a key part of that vision.
              </p>
              <p className="text-lg text-center text-gray-800">
                With the support of smart, secure AI, we’re making it easier for
                doctors to deliver precision care—and for patients to feel
                informed and empowered every step of the way
              </p>
            </div>

            <div className="col-span-12 ">
              <div className="py-10">
                <Image
                  alt=""
                  className="w-full "
                  src={Images.Meet.whyMattersBanner}
                ></Image>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center col-span-10 col-start-2 gap-8">
              <ThemeButton className="" type={ButtonType.RED}>
                Experience the Benefits Today
              </ThemeButton>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-24">
        <div className="container pb-12 mx-auto border-b border-b-slate-300">
          <div className="grid items-center justify-center grid-cols-12 gap-4 ">
            <div className="flex flex-col col-span-6 gap-8">
              <h2 className="mb-5 text-6xl font-bold text-slate-900">
                Built on Trust and Privacy
              </h2>
              <p className="text-lg text-gray-800">
                C.A.R.E.™ was built with patient privacy at its core. Your data
                is encrypted, protected, and never used outside your care
                journey. The technology is designed to assist—not replace—your
                physician’s judgment, and to give you more control over your
                health story.
              </p>
              <p className="mb-4 text-lg text-gray-800">
                Whether you're seeking a treatment recommendation, exploring a
                complex diagnosis, or simply trying to understand your health
                better, C.A.R.E.™ is here to help—backed by the power of
                ConnectMD’s clinical network and your complete medical records.
              </p>

              <ThemeButton type={ButtonType.PRIMARY} paddings="px-10 py-2.5">
                <span className="font-semibold">
                  Experience C.A.R.E.™ Today
                </span>
              </ThemeButton>
            </div>
            <div className="col-span-6">
              <Image
                src={Images.Meet.privacyTrustBanner}
                alt="healthcare "
              ></Image>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
