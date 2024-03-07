"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const path = usePathname();
  return (
    <div className="flex justify-between px-4 p-4 bg-slate-900">
      <div className="bg-blue-950 max-w-40  block rounded-md">
        <Link href="/">ADDA</Link>
      </div>
      <ul
        className={`${path === "/" ? "block" : "hidden"} flex flex-row `}
      >
        <li className="mx-3">
          <Link href="/setting">Setting</Link>
        </li>

        <li className="mx-3">
          <Link href="/about">About</Link>
        </li>

        <li className="mx-3">
          <Link href="/faqs">FAQs</Link>
        </li>

        <li className="mx-3">
          <Link href="/login">Login</Link>
        </li>

        <li className="mx-3">
          <Link href="/registration">Sign In</Link>
        </li>
      </ul>

      <ul
        className={`${
          path === "/home" ? "block" : "hidden"
        } flex flex-row mx-3 md:w-auto w-40 overflow-x-auto overflow-y-hidden`}
      >
        <li>
          <Link
            className="px-2 py-2 rounded-md mx-3 border-l-2"
            href="/home"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="px-2 py-2 rounded-md mx-3 border-l-2"
            href="/home/post"
          >
            Post
          </Link>
        </li>
        <li>
          <Link
            className="px-2 py-2 rounded-md mx-3 border-l-2"
            href="/home/profile"
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            className="px-2 py-2 rounded-md mx-3 border-l-2"
            href="/home/trending"
          >
            Trending
          </Link>
        </li>
      </ul>
    </div>
  );
}
