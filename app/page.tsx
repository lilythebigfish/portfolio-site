import Image from "next/image";
import Link from "next/link";
import { Blurb, Gallery } from "./components";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
        <Landing />
        <Gallery />
        <Footer />
      </div>
    </>
  );
}

export function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 flex justify-between items-center mx-20 py-10">
      <a href={"/"}>
        <Image src="/svgs/lilylin.svg" width={100} height={0} alt="" />
      </a>
      <div className="flex space-x-10">
        <Link href={"https://medium.com/@lilylinthoughts"} target="_blank">Blog</Link>
        <Link href={"https://docs.google.com/document/d/11T7-AnpF1AxztrH9SLzjaVVp4UHLPhWz/edit?usp=sharing&ouid=108107892836613563663&rtpof=true&sd=true"} target="_blank">CV</Link>
      </div>
    </div>
  );
}

export function Landing() {
  return (
    <div className="h-screen snap-start mx-20">
      {/* <Display /> */}
      <Blurb />
    </div>
  )
}

export function Display() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Image src="/images/peter.png" width={300} height={200} alt="sme and peter" />
    </div>
  )
}

export function Footer() {
  return (
    <footer className="text-gray-600 body-font mx-20 snap-end border-t">
      <div className="flex items-center py-10 sm:flex-row flex-col w-full">
        <p className="text-sm text-gray-500 sm:py-2 sm:mt-0 mt-4">
          © 2024 Lily Lin — Built with Next.js
        </p>
        <span className="inline-flex ml-auto justify-center sm:justify-end text-gray-500">
          {/* Mail */}
          <a className="ml-3 text-gray-500" href="mailto:lily.lin@yale.edu">
            <svg width="24" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z" fill="currentColor" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a className="ml-4 text-gray-500" href="https://www.linkedin.com/in/zhiyu-lily-lin/">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}
