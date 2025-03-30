"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Header, Body } from "@/app/project-components";
import { ProjectLanding, Project } from "@/app/project-components";
import Carousel from "@/components/Carousel";

const ProjectPage = () => {
  const [project] = useState<Project>({
    client: "Yale ART 132",
    title: "Once Upon a Wet and Orange Day",
    description:
      "Final project for my class Introduction to Graphic Design. Zine made from a collection of photos I took over 3 month's time.",
    design: true,
    image: "/design/book_holding.jpg",
    type: "Book Design",
    date: "Apr 2024",
    tools: (
      <ul>
        <li>InDesign</li>
      </ul>
    ),
    next: "/design/janice",
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Landing Page Section */}
      <ProjectLanding project={project} />

      {/* Article Section */}
      <article className="flex-grow mx-72 pt-36">
        <Header title="Ideation" />

        <Body
          content="After 3 months of collecting photos of things that caught my eye, I spread all the photos out and tried to find a common thread amongst them. 
                As it turns out, most of these photos were either orange, or wet, or orange and wet. So that became my theme: wet and/or orange."
        />

        {/* large image */}
        <Image
          src="/design/Book1.JPG"
          layout="responsive"
          width={0}
          height={0}
          alt="book"
          className="mt-4 mb-8"
        />

        <div className="grid grid-cols-3 gap-32">
          <div className="col-start-1 col-span-1">
            <Header title="Layout Planning" />
            <Body
              content="I decided to structure my photo book by matching pairs of photos with visual similarities, ordering them from most apparent connection to most discreet.
                I also inserted full-spread images if a photos had an interesting texture I wanted to highlight. To experiment with book and image size in real form, I created 5 different dummies before settling on my final product."
            />
          </div>
          <div className="col-start-2 col-span-2">
            <Image
              src="/design/book_plan.JPG"
              layout="responsive"
              width={0}
              height={0}
              alt="book"
              className="mt-12"
            />
          </div>
        </div>

        <Image
          src="/design/book_dummies.jpg"
          layout="responsive"
          width={0}
          height={0}
          alt="Book dummies"
          className="mt-16 mb-8"
        />

        {/* image of dummies */}

        <Header title="Execution" />

        <Body
          content="Concerning the material of my book, I bound a thin PVC sheet over an orange cardstock to add shine and reflection to give the illusion of wetness. 
                I printed the book pages on shiny paper for the same effect. For the title font, I chose Highway Gothic, the font used on roadsigns to allude to orange warning signs on a rainy day."
        />

        {/* large image */}
        <Image
          src="/design/book_innercover.jpg"
          layout="responsive"
          width={0}
          height={0}
          alt="Book Inner Cover"
          className="my-8"
        />

        <div className="grid grid-cols-3 gap-32">
          <div className="col-start-1 col-span-1">
            <Body
              content="I saddle-stitched the zine with orange thread, separating the zine into 5 8-page signatures. 
                This way, I was able to maximize the amount of spreads that can be opened flat since there are many full-bleed images in my zine."
            />
          </div>
          <div className="col-start-2 col-span-2">
            <Image
              src="/design/book_side.jpg"
              layout="responsive"
              width={0}
              height={0}
              alt="Book Cover"
              className="mb-8"
            />
          </div>
        </div>

        <Header title="Final Product: Selected Pages" />

        <Image
          src="/design/book_cover.jpg"
          layout="responsive"
          width={0}
          height={0}
          objectFit="cover"
          objectPosition="center"
          alt="Book Cover"
        />

        <Body content="" />

        <Image
          src="/design/book_p1.jpg"
          layout="responsive"
          width={0}
          height={0}
          objectFit="cover"
          objectPosition="center"
          alt="Book Cover"
        />
        <Body content="" />
        <Image
          src="/design/book_p2.jpg"
          layout="responsive"
          width={0}
          height={0}
          objectFit="cover"
          objectPosition="center"
          alt="Book Cover"
        />
        <Body content="" />

        <Image
          src="/design/book_p3.jpg"
          layout="responsive"
          width={0}
          height={0}
          objectFit="cover"
          objectPosition="center"
          alt="Book Cover"
        />
        <Body content="" />

        <Image
          src="/design/book_p4.jpg"
          layout="responsive"
          width={0}
          height={0}
          objectFit="cover"
          objectPosition="center"
          alt="Book Cover"
        />
        <Body content="" />

        <Image
          src="/design/book_end.jpg"
          layout="responsive"
          width={0}
          height={0}
          objectFit="cover"
          objectPosition="center"
          alt="Book Cover"
        />
        <Body content="" />

        <Carousel
          images={[
            "/design/wet-orange-1.jpg",
            "/design/wet-orange-2.jpg",
            "/design/wet-orange-3.jpg",
            "/design/wet-orange-4.jpg",
            "/design/wet-orange-5.jpg",
            "/design/wet-orange-6.jpg",
            "/design/wet-orange-7.jpg",
            "/design/wet-orange-8.jpg",
          ]}
        />
      </article>

      {/* Navigation Section */}
      <div className="flex flex-row justify-center space-x-24 mx-20 mt-36 mb-16">
        <Link href="/design/njordic-supermarket">
          <Image
            src="/svgs/back.svg"
            width={75}
            height={60}
            alt="Back Icon"
            className="bottom-0"
          />
        </Link>
        <Link href="/design/janice">
          <Image src="/svgs/next.svg" width={80} height={60} alt="Next Icon" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectPage;
