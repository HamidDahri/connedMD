"use client";
import React, { useEffect, useState } from "react";
import HeaderMenuNavItems from "./components/HeaderMenuNavItems";
import Link from "next/link";
import Image from "next/image";
import { Images } from "./ui/images";
import ThemeButton, { ButtonType } from "./components/ThemeButton";
import { useRouter } from "next/navigation";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const router = useRouter();
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleProductMenu = () => setIsProductMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        dir="ltr"
        className={`${
          isSticky ? "sticky top-0" : "absolute"
        } w-full md:pt-4 z-[99]`}
      >
        <nav className="container flex items-center justify-between p-4 mx-auto shadow-xl bg-[#193956] backdrop-blur-xl md:rounded-full lg:px-5">
          <div className="flex">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                alt=""
                className="h-12"
                src={Images.Header.logo}
                priority={true}
              />
            </Link>
          </div>
          <HeaderMenuNavItems />
          <div className="flex items-center gap-4">
            <ThemeButton
              onClick={() => router.push("/login")}
              type={ButtonType.WHITE}
            >
              Log in
            </ThemeButton>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </nav>

        <div
          className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={`fixed inset-0 z-10 bg-black opacity-50 ${
              isMenuOpen ? "block" : "hidden"
            }`}
            onClick={closeMenu}
          ></div>
          <div className="fixed inset-y-0 right-0 z-20 w-full p-4 overflow-y-auto bg-white md:px-6 md:py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#">
                <span className="sr-only">Your Company</span>
                <Image
                  alt=""
                  className="w-auto h-12"
                  src={Images.Header.logo}
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={closeMenu}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flow-root mt-6">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="py-6 space-y-2">
                  <Link
                    onClick={closeMenu}
                    href="/"
                    className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-100"
                  >
                    Home
                  </Link>
                  <div className="-mx-3">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      aria-controls="disclosure-1"
                      aria-expanded={isProductMenuOpen}
                      onClick={toggleProductMenu}
                    >
                      Partners
                      <svg
                        className={`h-5 w-5 flex-none ${
                          isProductMenuOpen ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <div
                      className={`mt-2 space-y-2 ${
                        isProductMenuOpen ? "block" : "hidden"
                      }`}
                      id="disclosure-1"
                    >
                      <Link
                        onClick={closeMenu}
                        href="/countries"
                        className="block py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                      >
                        Countries
                      </Link>
                      <Link
                        onClick={closeMenu}
                        href="/communities"
                        className="block py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                      >
                        Communities
                      </Link>
                      <Link
                        onClick={closeMenu}
                        href="/schools"
                        className="block py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                      >
                        Schools
                      </Link>
                      <Link
                        onClick={closeMenu}
                        href="/organizations"
                        className="block py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                      >
                        Organizations
                      </Link>
                      <Link
                        onClick={closeMenu}
                        href="/nonprofits"
                        className="block py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                      >
                        Nonprofits
                      </Link>
                      <Link
                        onClick={closeMenu}
                        href="/religious"
                        className="block py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                      >
                        Religious Orgs
                      </Link>
                    </div>
                  </div>
                  <Link
                    onClick={closeMenu}
                    href="/#faqs"
                    className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-100"
                  >
                    FAQs
                  </Link>
                  <Link
                    onClick={closeMenu}
                    href="/news"
                    className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-100"
                  >
                    News
                  </Link>
                  <Link
                    onClick={closeMenu}
                    href="/blogs"
                    className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-100"
                  >
                    Blogs
                  </Link>
                  <Link
                    onClick={closeMenu}
                    href="/contact"
                    className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-100"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
