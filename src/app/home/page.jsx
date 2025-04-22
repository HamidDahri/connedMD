import React from "react";
import ThemeButton, { ButtonType } from "../components/ThemeButton";
import { Images } from "../ui/images";
import Image from "next/image";
import MedicalDashboardSwiper from "../components/MedicalDashboardSwiper";

const page = () => {
  const dashboardViews = [
    {
      id: "condition-history",
      title: "Condition History",
      imagePath: "/images/slide1.png",
      thumbnailPath: "/images/thumbSlide1.png",
    },
    {
      id: "vital-signs",
      title: "Vital Signs",
      imagePath: "/images/slide1.png",
      thumbnailPath: "/images/thumbSlide1.png",
    },
    {
      id: "medication-history",
      title: "Medication History",
      imagePath: "/images/slide1.png",
      thumbnailPath: "/images/thumbSlide1.png",
    },
    {
      id: "appointment-history",
      title: "Appointment History",
      imagePath: "/images/slide1.png",
      thumbnailPath: "/images/thumbSlide1.png",
    },
  ];
  return (
    <>
      <section className="bg-[url(/images/heroBgPattern.svg)] bg-vista-white min-h-screen w-full bg-no-repeat bg-cover">
        <div className="container flex flex-col items-center justify-center pt-40 pb-0 mx-auto max-w-[1320px]">
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-7 col-start-4">
              <h1 className="text-6xl font-semibold text-center text-gray-800 leading-[72px]">
                Expert Medical Insight,{" "}
                <span className="italic text-secondary font-playfair">
                  Personalized
                </span>{" "}
                to You
              </h1>
            </div>
            <div className="col-span-8 col-start-3">
              <p className="text-lg text-center text-gray-800">
                ConnectMD connects you with a nationwide network of{" "}
                <strong>2,000+</strong>
                board-certified physicians who provide in-depth evaluations and
                tailored care recommendations—based on your complete medical
                history.
              </p>
            </div>

            <div className="flex items-center justify-center col-span-12 gap-4">
              <ThemeButton type={ButtonType.WHITE} paddings="px-10 py-2.5">
                Get Started
              </ThemeButton>
              <ThemeButton type={ButtonType.SECONDARY}>
                Learn How It Works
              </ThemeButton>
            </div>
          </div>

          <div className="w-full mt-16">
            <Image
              alt=""
              className="w-full"
              src={Images.IndexPage.heroImage}
            ></Image>
          </div>
        </div>
      </section>
      <section>
        <div className="container flex flex-col items-center justify-center pt-40 pb-0 mx-auto max-w-[1320px]">
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-10 col-start-2">
              <h2 className="text-base font-semibold text-center text-rosePink">
                How It Works
              </h2>
              <h1 className="text-5xl font-semibold text-center text-gray-800 leading-[72px]">
                We Make Your{" "}
                <span className="italic text-rosePink font-playfair">
                  Health
                </span>{" "}
                Story Whole Again
              </h1>
            </div>
            <div className="col-span-10 col-start-2">
              <p className="mb-4 text-lg text-center text-gray-800">
                Patients don’t always remember every detail of their medical
                history. That’s where we come in. Our proprietary technology
                securely retrieves and organizes your full medical records,
                giving physicians a clear, complete view of your health.
              </p>
              <p className="text-lg text-center text-gray-800">
                With the full picture in hand, doctors can better identify
                clinical patterns, uncover key insights, and make truly informed
                care decisions.
              </p>
            </div>
            <div className="col-span-12 mb-20">
              <MedicalDashboardSwiper dashboardViews={dashboardViews} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b to-[#A8EDEA09] from-[#9BCFE570] rounded-t-4xl py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 mb-12">
              <h2 className="text-2xl font-semibold text-center text-primary">
                Why ConnectMD
              </h2>
              <h3 className="my-3 text-6xl font-semibold text-center text-gray-800">
                Go <span className="italic font-playfair">Beyond</span> Generic
                Healthcare
              </h3>
              <h4 className="text-lg font-normal text-center text-gray-800">
                Most virtual care focuses on symptoms. We focus on you.
              </h4>
            </div>
            <div className="col-span-4">
              <div>
                <Image
                  alt=""
                  className="w-full"
                  src={Images.IndexPage.app1}
                ></Image>
              </div>
            </div>
            <div className="col-span-4">
              <div>
                <Image
                  alt=""
                  className="w-full"
                  src={Images.IndexPage.app2}
                ></Image>
              </div>
            </div>
            <div className="col-span-4">
              <div className="flex flex-col justify-between w-full gap-4">
                <Image
                  alt=""
                  className="w-full"
                  src={Images.IndexPage.app3}
                ></Image>
              </div>
            </div>
            <div className="col-span-10 col-start-2 mt-12">
              <p className="mb-4 text-lg text-center text-gray-800">
                ConnectMD offers personalized medical reviews and treatment
                strategies tailored to your history, preferences, and
                values—whether you prefer conventional medicine, holistic
                therapies, or cutting-edge treatments like peptides.
              </p>
            </div>
            <div className="flex items-center justify-center col-span-12 gap-4">
              <ThemeButton type={ButtonType.WHITE} paddings="px-10 py-2.5">
                Get Started
              </ThemeButton>
              <ThemeButton type={ButtonType.SECONDARY}>
                Learn How It Works
              </ThemeButton>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container pb-24 mx-auto">
          <div className="grid grid-cols-12 gap-4">
            <div className="flex justify-center col-span-12 ">
              <div className="w-[85%] ">
                <h3 className="my-3 text-6xl font-semibold text-center text-gray-800">
                  The <span className="text-secondary">ConnectMD</span>{" "}
                  Advantage
                </h3>
                <p className="mb-4 text-lg text-center text-gray-800">
                  Discover what sets ConnectMD apart—comprehensive medical
                  record access, a nationwide network of specialists, and truly
                  personalized treatment plans tailored to your history, values,
                  and lifestyle.
                </p>
              </div>
            </div>
            <div className="col-span-4">
              <div className="p-6 gap-4 rounded-3xl hover:bg-gradient-to-b flex flex-col justify-center items-center from-[#1E4E79] to-[#193956] group">
                <Image
                  alt="certified"
                  className="drop-shadow-xl"
                  src={Images.IndexPage.certified}
                ></Image>
                <h2 className="px-3 font-semibold text-center text-lg2 group-hover:text-white">
                  2,000+ board-certified specialists
                </h2>
                <p className="text-base text-center group-hover:text-white">
                  ConnectMD gives you access to top specialists nationwide,
                  ensuring expert opinions across all major fields.
                </p>
              </div>
            </div>
            <div className="col-span-4">
              <div className="p-6 gap-4 rounded-3xl hover:bg-gradient-to-b flex flex-col justify-center items-center from-[#1E4E79] to-[#193956] group">
                <Image
                  alt="certified"
                  className="drop-shadow-xl"
                  src={Images.IndexPage.secure}
                ></Image>
                <h2 className="px-3 font-semibold text-center text-lg2 group-hover:text-white">
                  Secure, nationwide medical record retrieval
                </h2>
                <p className="text-base text-center group-hover:text-white">
                  We securely collect your complete medical history from
                  providers across the country, fully HIPAA-compliant.
                </p>
              </div>
            </div>

            <div className="col-span-4">
              <div className="p-6 gap-4 rounded-3xl hover:bg-gradient-to-b flex flex-col justify-center items-center from-[#1E4E79] to-[#193956] group">
                <Image
                  alt="certified"
                  className="drop-shadow-xl"
                  src={Images.IndexPage.history}
                ></Image>
                <h2 className="px-3 font-semibold text-center text-lg2 group-hover:text-white">
                  Personalized care plans based on your full health history
                </h2>
                <p className="text-base text-center group-hover:text-white">
                  Every treatment plan is tailored to your unique medical
                  background for more accurate and effective care.
                </p>
              </div>
            </div>

            <div className="col-span-4">
              <div className="p-6 gap-4 rounded-3xl hover:bg-gradient-to-b flex flex-col justify-center items-center from-[#1E4E79] to-[#193956] group">
                <Image
                  alt="certified"
                  className="drop-shadow-xl"
                  src={Images.IndexPage.treament}
                ></Image>
                <h2 className="px-3 font-semibold text-center text-lg2 group-hover:text-white">
                  Culturally aligned and value-based treatment options
                </h2>
                <p className="text-base text-center group-hover:text-white">
                  Your care reflects your beliefs and values, offering
                  respectful, personalized, and culturally aware treatment.
                </p>
              </div>
            </div>

            <div className="col-span-4">
              <div className="p-6 gap-4 rounded-3xl hover:bg-gradient-to-b flex flex-col justify-center items-center from-[#1E4E79] to-[#193956] group">
                <Image
                  alt="certified"
                  className="drop-shadow-xl"
                  src={Images.IndexPage.therapy}
                ></Image>
                <h2 className="px-3 font-semibold text-center text-lg2 group-hover:text-white">
                  Support for emerging therapies and integrative care
                </h2>
                <p className="text-base text-center group-hover:text-white">
                  We guide you through modern and holistic treatments, combining
                  innovation with trusted medical insight.
                </p>
              </div>
            </div>

            <div className="col-span-4">
              <div className="p-6 gap-4 rounded-3xl hover:bg-gradient-to-b flex flex-col justify-center items-center from-[#1E4E79] to-[#193956] group">
                <Image
                  alt="certified"
                  className="drop-shadow-xl"
                  src={Images.IndexPage.nationwide}
                ></Image>
                <h2 className="px-3 font-semibold text-center text-lg2 group-hover:text-white">
                  Nationwide service from the comfort of your home
                </h2>
                <p className="text-base text-center group-hover:text-white">
                  Receive comprehensive care and consultations virtually—no
                  travel, just expert care at your fingertips.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-4xl bg-gradient-to-r from-[#1E4E79] to-[#193956] py-24 relative overflow-hidden">
        <Image
          src={Images.IndexPage.headercareBanner}
          alt=""
          className="absolute duration-3000 -end-72 animate-spin"
        ></Image>
        <div className="container mx-auto">
          <div className="grid items-center justify-center grid-cols-12 gap-4 ">
            <div className="flex flex-col col-span-6 gap-8">
              <h2 className="mb-5 text-6xl font-semibold text-white">
                Redefining{" "}
                <span className="italic text-secondary font-playfair">
                  Modern
                </span>{" "}
                Healthcare
              </h2>
              <p className="text-lg text-secondary">
                We’re closing the gaps in today’s healthcare system—fragmented
                records, rushed visits, and one-size-fits-all treatment plans—by
                combining clinical expertise with a deep understanding of who
                you are.
              </p>
              <p className="mb-4 text-lg text-secondary">
                At ConnectMD, our mission is to help you live a healthier, more
                fulfilling life by delivering clarity, confidence, and care you
                can trust.
              </p>

              <ThemeButton type={ButtonType.WHITE}>
                Start Your Journey Today
              </ThemeButton>
            </div>
            <div className="col-span-6">
              <Image
                src={Images.IndexPage.healthcare}
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
