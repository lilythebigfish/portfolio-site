import Image from "next/image";

export default function Blurb() {
  const handleDesignClick = () => {
    // Get gallery element
    const galleryElement = document.querySelector("#gallery-section");

    // Set active gallery to design before scrolling
    if (window.__nextGalleryComponent?.setActiveGallery) {
      window.__nextGalleryComponent.setActiveGallery("design");
    }

    // Scroll to gallery
    if (galleryElement) {
      galleryElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleArtClick = () => {
    // Get gallery element
    if (window.__nextGalleryComponent?.setActiveGallery) {
      window.__nextGalleryComponent.setActiveGallery("art");
    }

    const galleryElement = document.querySelector("#gallery-section");
    if (galleryElement) {
      galleryElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col justify-between h-screen mt-30 pb-10">
      <div className="flex-grow flex flex-col items-center justify-center mt-20">
        <Image
          src={"/art/Homepage.gif"}
          width={350}
          height={300}
          alt="Homepage"
          className="mx-auto"
        />
      </div>

      <div className="-tracking-tighter">
        <p className="text-2xl md:text-2xl ">
          <strong>
            VISUAL DESIGNER AND ARTIST BASED IN NEW HAVEN AND BEIJING.
          </strong>{" "}
          I
          <span onClick={handleDesignClick} className="cursor-pointer">
            <Image
              src="/svgs/design.svg"
              width={90}
              height={0}
              alt=""
              className="inline-block align-middle mx-2 md:mx-3 -mt-[3px] md:w-24 sm:w-20 animate-bounce"
            />
          </span>
          to solve other people&apos;s problems and make
          <span onClick={handleArtClick} className="cursor-pointer">
            <Image
              src="/svgs/art.svg"
              width={50}
              height={0}
              alt=""
              className="inline-block align-middle mx-2 md:mx-3 -mt-[3px] md:w-14 sm:w-10 animate-bounce"
            />
          </span>
          to solve my own problems.
        </p>
      </div>
    </div>
  );
}
