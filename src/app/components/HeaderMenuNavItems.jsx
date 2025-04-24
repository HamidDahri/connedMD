"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export const menuItems = [
  { label: "Home", href: "/home" },
  { label: "About", href: "/about" },
  { label: "Meet Our Providers", href: "/meet" },
  { label: "ConnectMD Difference", href: "/connectmd-difference" },
  { label: "Benefits", href: "/benefits" },
];
function HeaderMenuNavItems() {
  const pathname = usePathname();

  return (
    <ul className="flex-row items-center justify-center flex-grow hidden gap-4 rtl:flex-row-reverse md:flex ">
      {menuItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <li
            key={item.href}
            className={`text-base font-normal py-1.5 px-3 duration-300 hover:bg-white/10 ${
              isActive && "bg-white/10"
            } rounded-lg text-white`}
          >
            <Link
              href={item.href}
              className="nav-link rtl:leading-10 whitespace-nowrap"
              style={{ cursor: "pointer" }}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default HeaderMenuNavItems;
