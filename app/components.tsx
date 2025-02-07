"use client";
import Image from "next/image"
import { useState } from "react";
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
      <p className="text-justify text-4xl"><strong>VISUAL DESIGNER AND ARTIST BASED IN NEW HAVEN AND BEIJING.</strong> I
        <Image src="/svgs/design.svg" width={125} height={0} alt="" className="inline-block align-middle mx-3 -mt-[3px]" />
        TO SOLVE OTHER PEOPLE&apos;S PROBLEMS AND MAKE 
        <Image src="/svgs/art.svg" width={70} height={0} alt="" className="inline-block align-middle mx-3 -mt-[3px]" />
         ART TO SOLVE MY OWN PROBLEM. WHAT I CAN&apos;T SOLVE I PUT INTO
        <Image src="/svgs/words.svg" width={125} height={0} alt="" className="inline-block align-middle mx-3 -mt-[3px]" />. </p>
    </div>
  )
}

export function Gallery() {
  const [activeGallery, setActiveGallery] = useState("art");
  return (
    <div className="h-screen flex snap-start snap-always mx-20">

      {/* art gallery */}
      <div
        className={`w-3/4 pb-10 overflow-y-auto ${activeGallery === "art" ? "block" : "hidden"
          }`}
        style={{
          scrollbarWidth: "none", // For Firefox
          msOverflowStyle: "none", // For IE
        }}
      >
        {/* Two-column Pinterest-style layout */}
        <div className="columns-2 gap-8 space-y-4 pt-24">
          {/* Individual Items */}
          <div className="break-inside-avoid">
            <Link href="/art/stretch">
              <Image
                src="/art/stretch-pastel.JPG"
                width={500}
                height={400}
                layout="responsive"
                alt="Stretch"
                className="object-cover rounded-sm"
              />
              <div>
                <p className="font-semibold pt-2">Stretch</p>
                <p className="text-sm">Drawing</p>
              </div>
            </Link>
          </div>
          <div className="break-inside-avoid">
            <Link href="/art/home">
              <Image
                src="/art/home.jpg"
                width={400}
                height={300}
                layout="responsive"
                alt="Home"
                className="object-cover rounded-sm"
              />
              <div>
                <p className="font-semibold pt-2">Home</p>
                <p className="text-sm">Drawing</p>
              </div>
            </Link>
          </div>
          <div className="break-inside-avoid">
            <Link href="/art/woman">
              <Image
                src="/art/woman.jpg"
                width={300}
                height={400}
                layout="responsive"
                alt="What It Means to Be a Woman"
                className="object-cover rounded-sm"
              />
              <div>
                <p className="font-semibold pt-2">What It Means to Be a Woman</p>
                <p className="text-sm">Painting</p>
              </div>
            </Link>
          </div>
          <div className="break-inside-avoid">
            <Link href="/art/contemporary-still-lif">
              <Image
                src="/art/still-life.jpg"
                width={300}
                height={400}
                layout="responsive"
                alt="What It Means to Be a Woman"
                className="object-cover rounded-sm"
              />
              <div>
                <p className="font-semibold pt-2">Still-Life of Contemporary Objects</p>
                <p className="text-sm">Painting</p>
              </div>
            </Link>
          </div>
          <div className="break-inside-avoid">
            <Link href="/art/food-dipped-in-milk">
              <Image
                src="/art/milk.jpg"
                width={300}
                height={400}
                layout="responsive"
                alt="Food Dipped In Milk"
                className="object-cover rounded-sm"
              />
              <div>
                <p className="font-semibold pt-2">Food Dipped In Milk</p>
                <p className="text-sm">Woodcut</p>
              </div>
            </Link>
          </div>
          <div className="break-inside-avoid">
            <Link href="/art/the-embrace">
              <Image
                src="/art/embrace-1.png"
                width={300}
                height={400}
                layout="responsive"
                alt="Food Dipped In Milk"
                className="object-cover rounded-sm"
              />
              <div>
                <p className="font-semibold pt-2">The Embrace</p>
                <p className="text-sm">Sculpture</p>
              </div>
            </Link>
          </div>
          <div className="break-inside-avoid">
            <Link href="/art/boats">
              <Image
                src="/art/day.jpg"
                width={300}
                height={400}
                layout="responsive"
                alt="Food Dipped In Milk"
                className="object-cover rounded-sm"
              />
              <div>
                <p className="font-semibold pt-2">Boats</p>
                <p className="text-sm">Drawing</p>
              </div>
            </Link>
          </div>
          {/* Add more items */}
        </div>
      </div>



      {/* design gallery */}
      <div
        className={`w-3/4 pb-10 overflow-y-auto ${activeGallery === "design" ? "block" : "hidden"
          }`}
        style={{
          scrollbarWidth: "none", // For Firefox
          msOverflowStyle: "none", // For IE
        }}
      >
        {/* Two-column Pinterest-style layout */}
        <div className="columns-2 gap-8 space-y-4 pt-24">
          {/* Individual Items */}
          <div className="break-inside-avoid">
            <Link href="/design/njordic-supermarket">
              <Image
                src="/design/njordic-cover.jpg"
                width={500}
                height={400}
                layout="responsive"
                alt="Njordic Supermarket"
                className="object-cover rounded-sm"
              />
              <div>
                <p className="font-semibold pt-2">Njordic Supermarket</p>
                <p className="text-sm">Brand Design</p>
              </div>
            </Link>
          </div>
          <div className="break-inside-avoid">
            <Link href="/design/wet-and-orange">
              <Image
                src="/design/book.jpg"
                width={400}
                height={300}
                layout="responsive"
                alt="Once Upon a Wet and Orange Day"
                className="object-cover rounded-sm"
              />
              <div>
                <p className="font-semibold pt-2">Once Upon a Wet and Orange Day</p>
                <p className="text-sm">Book Design</p>
              </div>
            </Link>
          </div>
          <div className="break-inside-avoid">
            <Link href="/design/janice">
              <Image
                src="/design/janice-cover.png"
                width={300}
                height={400}
                layout="responsive"
                alt="Janice, Fashion Chatbot"
                className="object-cover rounded-sm"
              />
              <div>
                <p className="font-semibold pt-2">Janice, Fashion Shopping Chatbot</p>
                <p className="text-sm">UX Design</p>
              </div>
            </Link>
          </div>
          {/* Add more items */}
        </div>
      </div>

      {/* navigation */}
      <div className="w-1/4 flex flex-col justify-end items-end space-y-5 pb-10">
        <button onClick={() => setActiveGallery("art")}> <Image src="/svgs/art.svg" width={50} height={0} alt="" className={`${activeGallery === "design" ? "opacity-30" : "opacity-100"
          }`} /> </button>
        <button onClick={() => setActiveGallery("design")}> <Image src="/svgs/design.svg" width={100} height={0} alt="" className={`${activeGallery === "design" ? "opacity-100" : "opacity-30"
          }`} /> </button>
      </div>
    </div>
  )
}
