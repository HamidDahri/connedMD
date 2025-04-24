"use client";
import React, { useEffect, useState } from "react";
import HeaderMenuNavItems, { menuItems } from "./components/HeaderMenuNavItems";
import Link from "next/link";
import Image from "next/image";
import { Images } from "./ui/images";
import ThemeButton, { ButtonType } from "./components/ThemeButton";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const router = useRouter();
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);
  const pathname = usePathname();
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
        <nav className="container flex items-center justify-between p-4 mx-auto bg-white shadow-xl md:bg-cyanBlue backdrop-blur-xl md:rounded-full lg:px-5">
          <div className="flex items-center">
            <Link href="/" className="">
              <span className="sr-only">Your Company</span>
              <Image
                alt=""
                className="hidden h-12 md:block"
                src={Images.Header.logo}
                priority={true}
              />

              <Image
                alt=""
                className="h-8 w-52 md:hidden"
                src={Images.Login.logo}
                priority={true}
              />
            </Link>
          </div>
          <HeaderMenuNavItems />
          <div className="items-center hidden gap-4 md:flex">
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
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 14.125C11.5 13.5156 11.9688 13 12.625 13H31.375C31.9844 13 32.5 13.5156 32.5 14.125C32.5 14.7812 31.9844 15.25 31.375 15.25H12.625C11.9688 15.25 11.5 14.7812 11.5 14.125ZM11.5 21.625C11.5 21.0156 11.9688 20.5 12.625 20.5H25.375C25.9844 20.5 26.5 21.0156 26.5 21.625C26.5 22.2812 25.9844 22.75 25.375 22.75H12.625C11.9688 22.75 11.5 22.2812 11.5 21.625ZM20.5 29.125C20.5 29.7812 19.9844 30.25 19.375 30.25H12.625C11.9688 30.25 11.5 29.7812 11.5 29.125C11.5 28.5156 11.9688 28 12.625 28H19.375C19.9844 28 20.5 28.5156 20.5 29.125Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </nav>

        <div
          className={`lg:hidden  ${isMenuOpen ? "block" : "hidden"}`}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={`fixed inset-0 z-10 bg-black opacity-50 ${
              isMenuOpen ? "block" : "hidden"
            }`}
            onClick={closeMenu}
          ></div>
          <div className="fixed inset-y-0 right-0 z-20 w-full p-4 px-4 overflow-y-auto bg-white md:px-6 md:py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between pt-1.5 ">
              <a href="#">
                <span className="sr-only">Your Company</span>
                <Image alt="" className="h-8 w-52" src={Images.Login.logo} />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={closeMenu}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="w-8 h-8"
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
                <div className="px-4 py-6 border-b-0 ">
                  {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        onClick={closeMenu}
                        key={item.href}
                        href={item.href}
                        className="flex items-center justify-between px-3 py-3 -mx-3 text-base font-normal leading-7 text-cinder border-b-[1px] border-slate-200 hover:bg-gray-100"
                      >
                        {item.label}
                        <span>
                          <svg
                            width="9"
                            height="14"
                            viewBox="0 0 9 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.86454 6.46875C8.14579 6.78125 8.14579 7.25 7.86454 7.53125L1.86454 13.5312C1.55204 13.8438 1.08329 13.8438 0.802042 13.5312C0.489542 13.25 0.489542 12.7812 0.802042 12.5L6.27079 7.03125L0.802042 1.53125C0.489542 1.25 0.489542 0.78125 0.802042 0.5C1.08329 0.1875 1.55204 0.1875 1.83329 0.5L7.86454 6.46875Z"
                              fill="black"
                            />
                          </svg>
                        </span>
                      </Link>
                    );
                  })}
                </div>
                <ThemeButton
                  onClick={() => router.push("/login")}
                  type={ButtonType.SECONDARY}
                  fullWidth
                  className="mb-4 text-white"
                >
                  Log in
                </ThemeButton>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
