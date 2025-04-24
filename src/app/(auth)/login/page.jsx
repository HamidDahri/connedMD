"use client";
import React, { useState } from "react";
import { Images } from "../../ui/images";
import Image from "next/image";
import ThemeButton, { ButtonType } from "../../components/ThemeButton";
import ThemeInput, { InputType } from "../../components/ThemeInput";
import CheckBoxWithLabel from "../../components/CheckBoxWIthLabel";
import { useRouter } from "next/navigation";
import Link from "next/link";
const page = () => {
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();
  return (
    <section className="w-full ">
      <div>
        <div className="grid xs:grid-cols-1 md:grid-cols-2 ">
          <div className="items-center justify-center hidden h-screen grid-cols-12 md:grid bg-gradient-to-b from-primaryExtraDark to-primary">
            <div className="flex flex-col col-span-8 col-start-3 gap-6">
              <h2 className="text-5xl font-bold text-center text-white leading-14">
                Expert Medical Insight,{" "}
                <span className=" font-playfair text-secondary">
                  Personalized
                </span>{" "}
                to You
              </h2>
              <Image alt="" src={Images.Login.loginMockup}></Image>
              <p className="text-lg text-center text-white">
                ConnectMD connects you with a nationwide network of
                <strong className="px-2">2,000+</strong>
                board-certified physicians who provide in-depth evaluations and
                tailored care recommendations—based on your complete medical
                history.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col items-center justify-center h-screen ">
            <Link href="/">
              <Image
                alt=""
                as="image"
                className="mb-8"
                src={Images.Login.logo}
              ></Image>
            </Link>
            <h1 className="mb-1 text-xl font-bold text-center text-gray-900 md:text-3xl md:mb-3">
              👋 Welcome Back!
            </h1>
            <p className="mb-3 text-sm font-normal text-center text-slate-600 md:mb-4">
              Expert Medical Insight, Personalized to You
            </p>

            <div className="md:w-96 w-80">
              <ThemeInput
                id="Email"
                label="Email"
                name="email"
                type={InputType.TEXT}
                placeholder="abc@example.com"
                // value={formData.username}
                // onChange={handleChange}
                error={false}
                errorMessage="Please enter a valid email address."
              ></ThemeInput>
              <ThemeInput
                id="Password"
                label="Password"
                name="password"
                type={InputType.PASSWORD}
                placeholder="****************"
                // value={formData.username}
                // onChange={handleChange}
                error={false}
                errorMessage="Please enter correct password"
              ></ThemeInput>
              <div className="flex items-center justify-between mb-3">
                <CheckBoxWithLabel
                  label="Remember me"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(!isChecked)}
                />
                <a className="mb-4 text-xs font-semibold text-decoration-none text-primary md:text-sm">
                  Forget Password?
                </a>
              </div>

              <ThemeButton
                onClick={() => router.push("/")}
                type={ButtonType.PRIMARY}
                fullWidth
              >
                Login
              </ThemeButton>
            </div>
            <div className="text-carbon-gray">
              <span className="text-sm font-normal ">
                Need help with your account?
              </span>
              <a className="text-sm underline underline-offset-4 ">
                 Contact Us
              </a>
            </div>

            <span className="absolute bottom-0 block mb-3 text-xs text-center text-slate-600 md:text-sm ">
              © ConnectMD 2025
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
