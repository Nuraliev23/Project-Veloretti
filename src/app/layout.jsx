"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import logo from "../../public/Frame.png";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex justify-between max-w-[1200px] mx-auto md:items-center items-start my-[30px]">
          <Image width={0} height={0} src={logo} alt="logo" />
          <ul className="flex gap-[24px] md:flex-row flex-col">
            <Link href={"/"}>
              <li>Home</li>
            </Link>
            <Link href={"/about"}>
              <li>About</li>
            </Link>
            <Link href={"/products"}>
              <li>Products</li>
            </Link>
            <Link href={"/cities"}>
              <li>Cities</li>
            </Link>
            <Link href={"/productId"}>
              <li>Single Product Page</li>
            </Link>
          </ul>
          <div className="flex gap-[16px]">
            <h1>EN</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 
                1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 
                1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 
                7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 
                10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 
                0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </div>
        </div>
        {children}
        <footer>
          <section className="bg-[#3d3c3c] text-[white] py-[32px]">
            <div className="flex max-w-[1200px] mx-auto justify-between items-center">
              <p className="md:w-[60%] w-[90%]">
                Ready to take the Electric Ivy or Ace for a spin? Electric test
                rides are now available in Amsterdam, Amstelveen, Abcoude,
                Bussum, Den Haag, Nijmegen, Weesp, Wormerveer, Berlin, Hamburg
                and Munich. Schedule your test ride now and we'll see you there.
              </p>
              <p className="bg-[white] rounded-2xl text-black p-[10px_25px]">
                BOOK NOW
              </p>
            </div>
          </section>
          <section className="bg-[black] text-[white] py-[32px]">
            <div className="max-w-[1200px] mx-auto flex justify-between">
              <div>
                <h2 className="text-[25px] pb-[10px]">Explorer</h2>
                <p className="text-[#b3b2b2]">Electric bikes</p>
                <p className="text-[#b3b2b2]">City bikes</p>
                <p className="text-[#b3b2b2]">Kids' bikes</p>
                <p className="text-[#b3b2b2]">Accessories</p>
                <p className="text-[#b3b2b2]">Outlet</p>
                <p className="text-[#b3b2b2]">Business</p>
                <p className="text-[#b3b2b2]">Insurance Electric</p>
                <p className="text-[#b3b2b2]">Size guide</p>
              </div>
              <div>
                <h2 className="text-[25px] pb-[10px]">About</h2>
                <p className="text-[#b3b2b2]">About us</p>
                <p className="text-[#b3b2b2]">Journal</p>
                <p className="text-[#b3b2b2]">Reviews</p>
                <p className="text-[#b3b2b2]">Press</p>
                <p className="text-[#b3b2b2]">Jobs</p>
              </div>
              <div>
                <h2 className="text-[25px] pb-[10px]">Help</h2>
                <p className="text-[#b3b2b2]">Contact</p>
                <p className="text-[#b3b2b2]">FAQ</p>
                <p className="text-[#b3b2b2]">Delivery</p>
                <p className="text-[#b3b2b2]">Assembly & manuals</p>
                <p className="text-[#b3b2b2]">Payment options</p>
                <p className="text-[#b3b2b2]">Privacy policy</p>
                <p className="text-[#b3b2b2]">Terms & conditions</p>
              </div>
              <div>
                <h2 className="text-[25px] pb-[10px]">Join the ride.</h2>
                <p className="text-[#b3b2b2]">Sign up for our newsletter.</p>
              </div>
            </div>
          </section>
        </footer>
      </body>
    </html>
  );
}
