"use client";
import Image from "next/image";
import { useState } from "react";
import Carousel from "@/components/Carousel";
import { Header, Body } from "@/app/design/components/Typography";
import { Article } from "../components/Article";
import { ProjectLanding, Project } from "../components/ProjectLanding";
import { PageNav } from "../components/PageNav";

const ProjectPage = () => {
  const [project] = useState<Project>({
    client: "Yale ART 132",
    title: "Once Upon a Wet and Orange Day",
    description:
      "Final project for my class Introduction to Graphic Design. Zine made from a collection of photos I took over 3 month's time.",
    design: true,
    image: "/design/book_cover.jpg",
    type: "Book Design",
    date: "3 Month",
    tools: (
      <ul>
        <li>InDesign</li>
      </ul>
    ),
    next: "/design/janice",
  });

  return (
    <div className="min-h-screen">
      {/* Landing Page Section */}
      <ProjectLanding project={project} />

      {/* Article Section */}
      <Article>
        <Header title="Ideation" />

        <div className="col-span-full">
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
            className="mt-4"
          />
        </div>
        <Header title="Layout Planning" />
        <div className="col-start-1 col-span-1">
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
            className=""
          />
        </div>

        <Image
          src="/design/book_dummies.jpg"
          layout="responsive"
          width={0}
          height={0}
          alt="Book dummies"
          className="mt-4 col-span-full"
        />

        {/* image of dummies */}

        <Header title="Execution" />

        <div className="col-span-full">
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
            className="mt-8"
          />
        </div>

        <div className="col-start-1 col-span-1 my-8">
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
            className="mt-8"
          />
        </div>

        <Header title="Final Product: Selected Pages" />
        <div className="col-span-full">
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
              "/design/book_end.jpg",
            ]}
          />
        </div>
      </Article>

      <PageNav prev="/design/njordic-supermarket" next="/design/janice" />

    </div>
  );
};

export default ProjectPage;
