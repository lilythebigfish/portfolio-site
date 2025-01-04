"use client";
import Image from "next/image";
import { useState } from "react";
import { Header, Body } from "@/app/project-components";
import { ProjectLanding, Project } from "@/app/project-components";

const ProjectPage = () => {
    const [project] = useState<Project>({
        client: "Intro to Graphic Design",
        title: "Once Upon a Wet and Orange Day",
        description: "Final project for my Intro to GD class. Made a zine from a collection of photos I took over 3 month's time.",
        design: true,
        image: "/design/book.jpg",
        role: "Graphic Designer",
        date: "Apr 2024",
        tools: (
            <ul>
                <li>Indesign</li>
            </ul>
        ),
    });

    return (
        <div className="flex flex-col min-h-screen">
            {/* Landing Page Section */}
            <ProjectLanding project={project} />

            {/* Article Section */}
            <article className="flex-grow mx-72 pt-36">
                <Header title="Ideation" />

                <Body content="After 3 months of collecting photos of things that caught my eye, I spread all the photos out and tried to find a common thread amongst them. 
                As it turns out, most of these photos were either orange, or wet, or orange and wet. So that became my theme: wet and/or orange." />
                
                {/* large image */}
                <Image
                    src="/design/Book1.JPG"
                    layout="responsive"
                    width={0}
                    height={0}
                    objectFit="cover"
                    objectPosition="center"
                    alt="brainstorm"
                />

                <Header title="Layout Planning" />
                <Body content="I decided to structure my photo book by matching pairs of photos with visual similarities, ordering them from most apparent connection to most discreet.
                I also inserted full-spread images if a photos had an interesting texture I wanted to highlight." />

                {/* image of sketchbook with order */}

                {/* image of dummies */}

                <Header title="Final Product" />
                
                <Body content="For the book material, I decided to bind a thin pvc sheet over the cover to add shine and reflection to give the illusion of wetness. 
                I printed the book pages on shiny paper for the same effect. For the title font, I chose Highway Gothic, the font used on roadsigns to allude to orange warning signs on a rainy day." />

                {/* small image */}
                <div className="flex justify-center items-center">
                    <Image
                        src="/design/book.jpg"
                        alt="Example Image"
                        layout="intrinsic"
                        width={600}
                        height={0}
                        className="my-4"
                    />
                </div>
                
                {/* large image */}
                <Image
                    src="/design/Book2.JPG"
                    layout="responsive"
                    width={0}
                    height={0}
                    objectFit="cover"
                    objectPosition="center"
                    alt="Book Cover"
                />

                <Image
                    src="/design/Book2.JPG"
                    layout="responsive"
                    width={0}
                    height={0}
                    objectFit="cover"
                    objectPosition="center"
                    alt="Book Cover"
                />
                <Image
                    src="/design/Book3.JPG"
                    layout="responsive"
                    width={0}
                    height={0}
                    objectFit="cover"
                    objectPosition="center"
                    alt="Book Cover"
                />
                <Image
                    src="/design/Book4.JPG"
                    layout="responsive"
                    width={0}
                    height={0}
                    objectFit="cover"
                    objectPosition="center"
                    alt="Book Cover"
                />
                <Image
                    src="/design/Book5.JPG"
                    layout="responsive"
                    width={0}
                    height={0}
                    objectFit="cover"
                    objectPosition="center"
                    alt="Book Cover"
                />
                <Body content="I hand-binded the zine by separating it into 5 signatures, each with 4 pages. 
                This way, I was able to maximize the amount of spreads that can be opened flat since there are many full-bleed images in my zine."/>
                
                <div className="flex justify-center items-center">
                    <Image
                        src="/design/Book6.JPG"
                        alt="Book"
                        layout="intrinsic"
                        width={600}
                        height={0}
                        className="my-4"
                    />
                </div>
                
            </article>

            {/* Navigation Section */}
            <div className="flex flex-row justify-center space-x-24 mx-20 my-8 pb-8">
                <Image
                    src="/svgs/back.svg"
                    width={75}
                    height={60}
                    alt="Back Icon"
                    className="bottom-0"
                />
                <Image
                    src="/svgs/next.svg"
                    width={80}
                    height={60}
                    alt="Next Icon"
                />
            </div>
        </div>
    );
};

export default ProjectPage;
