"use client";
import Image from "next/image"
import { ReactNode, useState } from "react";
import Link from "next/link";

export function Display() { 
  return (
    <div className="flex items-center justify-center h-screen">
      <Image src="/images/peter.png" width={300} height={200} alt="sme and peter" /> 
    </div>
  )
}

export function Blurb() {
  return (
    <div className="flex flex-col justify-end h-screen pb-10">
      <p className="text-justify text-4xl"><strong>VISUAL DESIGNER AND ARTIST BASED IN NEW HAVEN AND BEIJING.</strong> I MAKE
      <Image src="/svgs/art.svg" width={70} height={0} alt="" className="inline-block align-middle mx-3 -mt-[3px]" />
      TO SOLVE OTHER PEOPLE&apos;S PROBLEMS AND  
      <Image src="/svgs/design.svg" width={125} height={0} alt="" className="inline-block align-middle mx-3 -mt-[3px]" />
      TO SOLVE MY OWN PROBLEMS. WHAT I CAN&apos;T SOLVE I PUT INTO
      <Image src="/svgs/words.svg" width={125} height={0} alt="" className="inline-block align-middle mx-3 -mt-[3px]" />. </p>
    </div>
  )
}

export function Gallery() { 
  const [activeGallery, setActiveGallery] = useState("design");
  return (
    <div className="h-screen flex snap-start snap-always mx-20">
      {/* design gallery */}
      <div className={`w-3/4 grid grid-cols-2 gap-10 overflow-y-auto scrollbar-hidden ${activeGallery === "design" ? "block" : "hidden"} `} style={{
        overflowY: "auto",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}>
        <div className="pt-36 space-y-3">
          <Link href="/design/design1">
            <Image src="/images/book.jpg" width={1} height={1} layout="responsive" alt="" className="object-cover rounded-sm" />
            <div>
              <p className="font-semibold">Once Upon a Wet & Orange Day</p>
              <p className= "text-sm">Book Design</p>
            </div>
          </Link>
        </div>
        <div className="pt-36 space-y-3">
          <Image src="/images/book.jpg" width={1} height={1} layout="responsive" alt="" className="object-cover rounded-sm" />
          <div>
            <p className="font-semibold">Once Upon a Wet & Orange Day</p>
            <p className= "text-sm">Book Design</p>
          </div>
        </div>
        <div className="space-y-3">
          <Image src="/images/book.jpg" width={1} height={1} layout="responsive" alt="" className="object-cover rounded-sm" />
          <div>
            <p className="font-semibold">Once Upon a Wet & Orange Day</p>
            <p className= "text-sm">Book Design</p>
          </div>
        </div>
        <div className="space-y-3">
          <Image src="/images/book.jpg" width={1} height={1} layout="responsive" alt="" className="object-cover rounded-sm" />
          <div>
            <p className="font-semibold">Once Upon a Wet & Orange Day</p>
            <p className= "text-sm">Book Design</p>
          </div>
        </div>
        <div className="space-y-3 pb-10">
          <Image src="/images/book.jpg" width={1} height={1} layout="responsive" alt="" className="object-cover rounded-sm" />
          <div>
            <p className="font-semibold">Once Upon a Wet & Orange Day</p>
            <p className= "text-sm">Book Design</p>
          </div>
        </div>
      </div>

      {/* art gallery */}
      <div className={`w-3/4 grid grid-cols-2 gap-10 overflow-y-auto scrollbar-hidden ${activeGallery === "art" ? "block" : "hidden"} `} style={{
        overflowY: "auto",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}>
        <div className="pt-36 space-y-3">
          <Link href="/art/art1">
            <Image src="/images/book.jpg" width={1} height={1} layout="responsive" alt="" className="object-cover rounded-sm" />
            <div>
              <p className="font-semibold">My Art Project</p>
              <p className= "text-sm">Book Design</p>
            </div>
          </Link>
        </div>
        <div className="pt-36 space-y-3">
          <Image src="/images/book.jpg" width={1} height={1} layout="responsive" alt="" className="object-cover rounded-sm" />
          <div>
            <p className="font-semibold">Once Upon a Wet & Orange Day</p>
            <p className= "text-sm">Book Design</p>
          </div>
        </div>
        <div className="space-y-3">
          <Image src="/images/book.jpg" width={1} height={1} layout="responsive" alt="" className="object-cover rounded-sm" />
          <div>
            <p className="font-semibold">Once Upon a Wet & Orange Day</p>
            <p className= "text-sm">Book Design</p>
          </div>
        </div>
        <div className="space-y-3">
          <Image src="/images/book.jpg" width={1} height={1} layout="responsive" alt="" className="object-cover rounded-sm" />
          <div>
            <p className="font-semibold">Once Upon a Wet & Orange Day</p>
            <p className= "text-sm">Book Design</p>
          </div>
        </div>
        <div className="space-y-3 pb-10">
          <Image src="/images/book.jpg" width={1} height={1} layout="responsive" alt="" className="object-cover rounded-sm" />
          <div>
            <p className="font-semibold">Once Upon a Wet & Orange Day</p>
            <p className= "text-sm">Book Design</p>
          </div>
        </div>
      </div>

      {/* navigation */}
      <div className="w-1/4 flex flex-col justify-end items-end space-y-5 pb-10">
        <button onClick={() => setActiveGallery("art")}> <Image src="/svgs/art.svg" width={50} height={0} alt="" className={`${
            activeGallery === "design" ? "opacity-30" : "opacity-100"
          }`}/> </button>
        <button onClick={() => setActiveGallery("design")}> <Image src="/svgs/design.svg" width={100} height={0} alt="" className={`${
            activeGallery === "design" ? "opacity-100" : "opacity-30"
          }`}/> </button>
      </div>
    </div>
  )
}

export function Header({ title }: { title: string }) { 
  return (
      <h1 className="text-3xl pb-6 font-medium">{title}</h1>
  )
}

export function Body({ content }: {content: ReactNode}) { 
  return (
      <p className="text-md pb-6"> {content}</p>
  )
}
