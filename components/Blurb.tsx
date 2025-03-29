import Image from "next/image";

export default function Blurb() {
  const handleDesignClick = () => {
    // Get gallery element
    const galleryElement = document.querySelector(".snap-start.snap-always");

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

    const galleryElement = document.querySelector(".snap-start.snap-always");
    if (galleryElement) {
      galleryElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col justify-between h-screen pt-30 pb-10">
      <div className="flex-grow flex flex-col items-center justify-center mt-14">
        <Image
          src={"/art/Homepage.gif"}
          width={400}
          height={400}
          alt="Homepage"
          className="mx-auto w-6xl h-6xl"
        />
        <p
          className="text-sm animate-bounce
 text-center mt-10 text-primary"
        >
          Scroll for my work!
        </p>
      </div>

      <div className="-tracking-tighter">
        <p className="text-justify text-4xl ">
          <strong>
            VISUAL DESIGNER AND ARTIST BASED IN NEW HAVEN AND BEIJING.
          </strong>{" "}
          I
          <span onClick={handleDesignClick}>
            <Image
              src="/svgs/design.svg"
              width={130}
              height={0}
              alt=""
              className="inline-block align-middle mx-3 -mt-[3px]"
            />
          </span>
          TO SOLVE OTHER PEOPLE&apos;S PROBLEMS AND MAKE
          <span onClick={handleArtClick}>
            <Image
              src="/svgs/art.svg"
              width={70}
              height={0}
              alt=""
              className="inline-block align-middle mx-3 -mt-[3px]"
            />
          </span>
          TO SOLVE MY OWN PROBLEM. WHAT I CAN&apos;T SOLVE I PUT INTO
          <Image
            src="/svgs/words.svg"
            width={130}
            height={0}
            alt=""
            className="inline-block align-middle mx-3 -mt-[3px]"
          />
          .{" "}
        </p>
      </div>
    </div>
  );
}
