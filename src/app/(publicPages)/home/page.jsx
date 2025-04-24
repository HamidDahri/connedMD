import React from "react";
import ThemeButton, { ButtonType } from "../../components/ThemeButton";
import { Images } from "../../ui/images";
import Image from "next/image";
import MedicalDashboardSwiper from "../../components/MedicalDashboardSwiper";
import AnimatedImage from "../../components/AnimateImage";
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
      imagePath: "/images/slide2.png",
      thumbnailPath: "/images/thumbSlide2.png",
    },
    {
      id: "medication-history",
      title: "Medication History",
      imagePath: "/images/slide3.png",
      thumbnailPath: "/images/thumbSlide3.png",
    },
    {
      id: "appointment-history",
      title: "Appointment History",
      imagePath: "/images/slide4.png",
      thumbnailPath: "/images/thumbSlide4.png",
    },
  ];
  return (
    <>
      <section
        id="container"
        className="bg-[url(/images/heroBgPattern.svg)] bg-vista-white min-h-screen w-full bg-no-repeat bg-cover"
      >
        <div className="container flex flex-col items-center justify-center md:pt-40 pt-28 pb-0 mx-auto max-w-[1320px]">
          <div className="grid grid-cols-12 gap-4 px-4 md:px-auto md:gap-12">
            <div className="col-span-12 md:col-span-8 md:col-start-3">
              <h1 className="text-3xl md:text-6xl font-bold text-center text-gray-800 md:leading-[72px]">
                Expert Medical Insight,
                <span className="px-3 font-extrabold text-secondary font-playfair">
                  personalized
                </span>
                to You
              </h1>
            </div>
            <div className="col-span-12 md:col-span-8 md:col-start-3">
              <p className="text-base text-center text-gray-800 md:text-lg">
                ConnectMD connects you with a nationwide network of
                <strong className="px-2">2,000+</strong>
                board-certified physicians who provide in-depth evaluations and
                tailored care recommendations—based on your complete medical
                history.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center col-span-12 gap-4 md:flex-row">
              <ThemeButton
                type={ButtonType.WHITE}
                paddings="px-10 py-2.5 md:w-auto w-full"
              >
                Get Started
              </ThemeButton>
              <ThemeButton
                paddings="px-10 py-2.5 md:w-auto w-full"
                type={ButtonType.SECONDARY}
              >
                Learn How It Works
              </ThemeButton>
            </div>
          </div>

          <div className="w-full px-4 mt-8 md:mt-16 md:px-auto">
            <Image
              alt=""
              className="w-full"
              src={Images.IndexPage.heroImage}
            ></Image>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-white">
        <Image
          className="absolute z-10 hidden w-40 bounce bg-blend-multiply top-1/3 -rotate-12 md:block"
          src="images/HeartAnimate.svg"
          width={200}
          height={200}
          alt=""
        ></Image>

        <Image
          className="absolute z-10 hidden w-40 wobble bg-blend-multiply bottom-1/5 -rotate-12 md:block"
          src="images/Animate2.svg"
          width={200}
          height={200}
          alt=""
        ></Image>

        <Image
          className="absolute z-10 hidden w-40 rotate-45 hithere bg-blend-multiply end-0 top-1/3 md:block"
          src="images/Animate3.svg"
          width={200}
          height={200}
          alt=""
        ></Image>

        <Image
          className="absolute z-10 hidden w-40 hithere bg-blend-multiply bottom-1/5 end-10 md:block"
          src="images/Animate4.svg"
          width={200}
          height={200}
          alt=""
        ></Image>
        <div className="container flex flex-col items-center justify-center pt-8 md:pt-40 pb-0 mx-auto max-w-[1320px]">
          <div className="grid grid-cols-12 gap-4 px-4 md:px-auto md:gap-12">
            <div className="col-span-12 md:col-span-10 md:col-start-2">
              <h2 className="text-base font-semibold text-center text-rosePink">
                How It Works
              </h2>
              <h1 className="text-3xl md:text-5xl  font-bold text-center text-gray-800 md:leading-[72px]">
                We Make Your
                <span className="px-2 font-extrabold text-rosePink font-playfair">
                  health
                </span>
                Story Whole Again
              </h1>
            </div>
            <div className="col-span-12 md:col-span-10 md:col-start-2">
              <p className="mb-4 text-base text-center text-gray-800 md:text-lg">
                Patients don’t always remember every detail of their medical
                history. That’s where we come in. Our proprietary technology
                securely retrieves and organizes your full medical records,
                giving physicians a clear, complete view of your health.
              </p>
              <p className="text-base text-center text-gray-800 md:text-lg">
                With the full picture in hand, doctors can better identify
                clinical patterns, uncover key insights, and make truly informed
                care decisions.
              </p>
            </div>
            <div className="col-span-12 mb-8 md:mb-20">
              <MedicalDashboardSwiper dashboardViews={dashboardViews} />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b to-[#A8EDEA09] from-[#9BCFE570] rounded-t-4xl py-8 md:py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-4 px-4 md:px-auto">
            <div className="col-span-12 mb-4 md:mb-12">
              <h2 className="text-xl font-semibold text-center md:text-2xl text-primary">
                Why ConnectMD
              </h2>
              <h3 className="my-3 text-3xl font-bold text-center text-gray-800 md:text-6xl">
                Go
                <span className="px-2 font-extrabold text-primary font-playfair">
                  beyond
                </span>
                Generic Healthcare
              </h3>
              <h4 className="text-base font-normal text-center text-gray-800 md:text-lg">
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
            <div className="col-span-12 mt-4 md:col-span-10 md:col-start-2 md:mt-12">
              <p className="mb-4 text-base text-center text-gray-800 md:text-lg">
                ConnectMD offers personalized medical reviews and treatment
                strategies tailored to your history, preferences, and
                values—whether you prefer conventional medicine, holistic
                therapies, or cutting-edge treatments like peptides.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center col-span-12 gap-4 md:flex-row">
              <ThemeButton
                type={ButtonType.WHITE}
                paddings="px-10 py-2.5 md:w-auto w-full"
              >
                Get Started
              </ThemeButton>
              <ThemeButton
                paddings="md:w-auto w-full py-2.5 px-10"
                type={ButtonType.SECONDARY}
              >
                Learn How It Works
              </ThemeButton>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="container pb-8 mx-auto md:pb-24">
          <div className="grid grid-cols-12 gap-4 px-4 md:px-auto">
            <div className="flex justify-center col-span-12 ">
              <div className="md:w-[85%] w-full ">
                <h3 className="my-3 text-3xl font-bold text-center text-gray-800 md:text-6xl">
                  The <span className=" text-secondary">ConnectMD</span>{" "}
                  Advantage
                </h3>
                <p className="mb-4 text-base text-center text-gray-800 md:text-lg">
                  Discover what sets ConnectMD apart—comprehensive medical
                  record access, a nationwide network of specialists, and truly
                  personalized treatment plans tailored to your history, values,
                  and lifestyle.
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="flex flex-col items-center justify-center gap-4 p-6 transition-all duration-500 ease-in-out bg-white cursor-pointer rounded-3xl hover:bg-primary group">
                <Image
                  alt="certified"
                  className="w-16 md:w-24 drop-shadow-xl"
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
            <div className="col-span-12 md:col-span-4">
              <div className="flex flex-col items-center justify-center gap-4 p-6 transition-all duration-500 ease-in-out bg-white cursor-pointer rounded-3xl hover:bg-primary group">
                <Image
                  alt="certified"
                  className="w-16 md:w-24 drop-shadow-xl"
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

            <div className="col-span-12 md:col-span-4">
              <div className="flex flex-col items-center justify-center gap-4 p-6 transition-all duration-500 ease-in-out bg-white cursor-pointer rounded-3xl hover:bg-primary group">
                <Image
                  alt="certified"
                  className="w-16 md:w-24 drop-shadow-xl"
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

            <div className="col-span-12 md:col-span-4">
              <div className="flex flex-col items-center justify-center gap-4 p-6 transition-all duration-500 ease-in-out bg-white cursor-pointer rounded-3xl hover:bg-primary group">
                <Image
                  alt="certified"
                  className="w-16 md:w-24 drop-shadow-xl"
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

            <div className="col-span-12 md:col-span-4">
              <div className="flex flex-col items-center justify-center gap-4 p-6 transition-all duration-500 ease-in-out bg-white cursor-pointer rounded-3xl hover:bg-primary group">
                <Image
                  alt="certified"
                  className="w-16 md:w-24 drop-shadow-xl"
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

            <div className="col-span-12 md:col-span-4">
              <div className="flex flex-col items-center justify-center gap-4 p-6 transition-all duration-500 ease-in-out bg-white cursor-pointer rounded-3xl hover:bg-primary group">
                <Image
                  alt="certified"
                  className="w-16 md:w-24 drop-shadow-xl"
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
      <section className="relative py-8 overflow-hidden rounded-3xl md:rounded-4xl bg-gradient-to-r from-primary to-cyanBlue md:py-24">
        <Image
          src={Images.IndexPage.headercareBanner}
          alt=""
          className="absolute duration-3000 -end-24 md:-end-72 animate-spin"
        ></Image>
        <div className="container mx-auto">
          <div className="grid items-center justify-center grid-cols-12 gap-4 px-4 md:gap-16 md:px-auto ">
            <div className="flex flex-col col-span-12 gap-4 md:col-span-6 md:gap-8">
              <h2 className="mb-3 text-3xl font-bold text-center text-white md:mb-5 md:text-start md:text-6xl">
                Redefining{" "}
                <span className="font-extrabold text-secondary font-playfair">
                  modern
                </span>{" "}
                Healthcare
              </h2>
              <p className="text-base text-center md:text-start md:text-lg text-secondary">
                We’re closing the gaps in today’s healthcare system—fragmented
                records, rushed visits, and one-size-fits-all treatment plans—by
                combining clinical expertise with a deep understanding of who
                you are.
              </p>
              <p className="text-base text-center md:text-start md:text-lg text-secondary">
                At ConnectMD, our mission is to help you live a healthier, more
                fulfilling life by delivering clarity, confidence, and care you
                can trust.
              </p>

              <div>
                <ThemeButton
                  paddings="px-10 py-2.5 w-full md:w-fit "
                  type={ButtonType.WHITE}
                >
                  Start Your Journey Today
                </ThemeButton>
              </div>
            </div>
            <div className="hidden col-span-6 md:block ">
              <figure>
                <AnimatedImage
                  src={Images.IndexPage.healthcare}
                  alt=""
                  className="img-fluid mbm-darken d-lg-block d-none img-move"
                ></AnimatedImage>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
