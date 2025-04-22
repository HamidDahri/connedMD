"use client";
import Link from "next/link";
import React from "react";

function HeaderMenuNavItems() {
  return (
    <ul className="flex-row items-center justify-center flex-grow hidden gap-4 rtl:flex-row-reverse md:flex ">
      <li className="text-base font-normal py-1.5 px-3 hover:bg-white/10 rounded-lg text-white">
        <Link
          href="/about"
          className="nav-link rtl:leading-10 whitespace-nowrap"
          style={{ cursor: "pointer" }}
        >
          About
        </Link>
      </li>

      <li className="text-base font-normal py-1.5 px-3 hover:bg-white/10 rounded-lg text-white">
        <Link
          href="/meet"
          className="nav-link whitespace-nowrap rtl:leading-10"
          style={{ cursor: "pointer" }}
        >
          Meet C.A.R.E.
        </Link>
      </li>
      <li className="text-base font-normal py-1.5 px-3 hover:bg-white/10 rounded-lg text-white">
        <Link
          href="/connectmd-difference"
          className="nav-link whitespace-nowrap rtl:leading-10"
          style={{ cursor: "pointer" }}
        >
          ConnectMD Difference
        </Link>
      </li>
      <li className="text-base font-normal py-1.5 px-3 hover:bg-white/10 rounded-lg text-white">
        <Link
          href="/benefits"
          className="nav-link whitespace-nowrap rtl:leading-10"
          style={{ cursor: "pointer" }}
        >
          Benefits
        </Link>
      </li>
    </ul>
  );
}

export default HeaderMenuNavItems;
