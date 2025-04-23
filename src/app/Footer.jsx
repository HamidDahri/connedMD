"use client";
import Link from "next/link";
import React from "react";
import { Images } from "./ui/images";
import Image from "next/image";
import ThemeButton, { ButtonType } from "./components/ThemeButton";

function Footer() {
  return (
    <footer>
      <div className="container relative pt-24 pb-16 mx-auto">
        <div className="grid grid-cols-12">
          <div className="flex flex-col items-center justify-center col-span-12 gap-6">
            <Link className="" href="/home">
              <Image src={Images.Footer.logo} alt="" />
            </Link>

            <div className="flex flex-wrap justify-center gap-4 my-4 text-base font-medium text-neutral-600">
              <Link
                href="/home"
                className="hover:text-neutral-800 hover:underline hover:underline-offset-4"
              >
                Home
              </Link>
              <Link
                href="#farms"
                className="hover:text-neutral-800 hover:underline hover:underline-offset-4"
              >
                About
              </Link>

              <Link
                href="#practices"
                className="hover:text-neutral-800 hover:underline hover:underline-offset-4"
              >
                Meet C.A.R.E.
              </Link>

              <Link
                href="#varieties"
                className="hover:text-neutral-800 hover:underline hover:underline-offset-4"
              >
                ConnectMD Difference
              </Link>

              <Link
                href="#benefits"
                className="hover:text-neutral-800 hover:underline hover:underline-offset-4"
              >
                Benefits
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <input
                placeholder="Enter your email"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary focus:border-secondary  focus:outline-secondary block w-full min-w-[450px] p-3"
              ></input>
              <ThemeButton
                paddings="px-10 py-3"
                onClick={() => console.log("Subscribe")}
                type={ButtonType.PRIMARY}
              >
                Subscribe
              </ThemeButton>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <hr className="text-[#E9EAEB]" />
        <div className="grid flex-col-reverse items-center grid-cols-12 py-7 md:flex-row">
          <div className="col-span-12 md:col-span-6">
            <div className="flex items-center md:mb-4 lg:mb-0">
              <div>
                <span className="block text-center md:text-start text-neutral-600">
                  © 2025 ConnectMd. All rights reserved.
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center col-span-12 gap-3 mb-3 text-neutral-600 md:col-span-6 lg:justify-end md:mb-auto">
            <Link
              href=""
              className="hover:text-neutral-800 hover:underline hover:underline-offset-4"
            >
              Terms
            </Link>
            <Link
              href=""
              className="hover:text-neutral-800 hover:underline hover:underline-offset-4"
            >
              Privacy
            </Link>
            <Link
              href=""
              className="hover:text-neutral-800 hover:underline hover:underline-offset-4"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
