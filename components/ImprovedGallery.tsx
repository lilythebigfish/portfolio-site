import Image from "next/image";
import { useState } from "react";

declare global {
  interface Window {
    __nextGalleryComponent?: {
      setActiveGallery: (gallery: string) => void;
    };
  }
}

const Art = [
  {
    slug: "flowers",
    imageSrc: "/art/flowers-1.JPG",
    title: "When Flowers Die, Will Love Die Too?",
    type: "Painting",
  },
  {
    slug: "stretch",
    imageSrc: "/art/stretch-pastel.JPG",
    title: "Stretch",
    type: "Drawing",
  },
  {
    slug: "home",
    imageSrc: "/art/home.jpg",
    title: "Home",
    type: "Drawing",
  },
  {
    slug: "woman",
    imageSrc: "/art/woman.jpg",
    title: "What It Means to Be a Woman",
    type: "Painting",
  },
  {
    slug: "contemporary-still-life",
    imageSrc: "/art/still-life.jpg",
    title: "Still-Life of Contemporary Objects",
    type: "Painting",
  },
  {
    slug: "food-dipped-in-milk",
    imageSrc: "/art/milk.jpg",
    title: "Food Dipped In Milk",
    type: "Woodcut",
  },
  {
    slug: "the-embrace",
    imageSrc: "/art/embrace-1.png",
    title: "The Embrace",
    type: "Sculpture",
  },
  {
    slug: "boats",
    imageSrc: "/art/day.jpg",
    title: "Boats",
    type: "Drawing",
  },
];

const Design = [
  {
    slug: "njordic-supermarket",
    imageSrc: "/design/njordic-cover.jpg",
    title: "Njordic Supermarket",
    type: "Brand Design",
  },
  {
    slug: "janice",
    imageSrc: "/design/janice-cover.png",
    title: "Janice, Fashion Shopping Chatbot",
    type: "UX Design",
  },
  {
    slug: "wet-and-orange",
    imageSrc: "/design/book_holding.jpg",
    title: "Once Upon a Wet and Orange Day",
    type: "Book Design",
  },
];

function ArtGallery() {
  return (
    <div className="grid grid-cols-3 gap-12">
      {Art.map((art) => {
        return (
          <div key={art.slug} className="flex flex-col h-full">
            <div className="flex-grow flex items-center justify-center">
              <Image
                src={art.imageSrc}
                width={300}
                height={400}
                layout="intrinsic"
                alt={art.title}
                className="object-contain rounded-sm"
              />
            </div>

            <div className="mt-2">
              <p className="font-semibold">{art.title}</p>
              <p className="text-sm text-gray-400">{art.type}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function DesignGallery() {
  return (
    <div className="w-2/3 mx-auto flex flex-col space-y-8">
      {Design.map((design) => {
        return (
          <div key={design.slug} className="flex flex-col space-y-3">
            <div className="relative w-full aspect-video overflow-hidden rounded-sm">
              <Image
                src={design.imageSrc}
                alt={design.title}
                fill
                className="object-cover rounded-sm"
              />
            </div>

            <div>
              <p className="">
                <span className="font-bold uppercase">{design.title}</span>{" "}
                <span className="pl-3 text-gray-400 uppercase">
                  {design.type}
                </span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function ImprovedGallery({
  hideSwitcher,
}: {
  hideSwitcher: boolean;
}) {
  const [activeGallery, setActiveGallery] = useState("art");

  return (
    <div className="pt-28 pb-10 pt-40">
      <div className="flex items-center justify-center">
        <div className="w-2/3">
          {activeGallery === "art" ? <ArtGallery /> : <DesignGallery />}
        </div>
      </div>
      {/* Navigations */}
      <div
        className={`fixed bottom-10 w-full flex justify-between px-20 transition-opacity duration-500 ${
          hideSwitcher ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <button onClick={() => setActiveGallery("art")}>
          <Image
            src="/svgs/art.svg"
            width={50}
            height={0}
            alt=""
            className={`${
              activeGallery === "design" ? "opacity-30" : "opacity-100"
            }`}
          />
        </button>
        <button onClick={() => setActiveGallery("design")}>
          <Image
            src="/svgs/design.svg"
            width={100}
            height={0}
            alt=""
            className={`${
              activeGallery === "design" ? "opacity-100" : "opacity-30"
            }`}
          />
        </button>
      </div>
    </div>
  );
}
