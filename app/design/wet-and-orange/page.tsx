"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Header, Body } from "@/app/project-components";
import { ProjectLanding, Project } from "@/app/project-components";

const ProjectPage = () => {
    const [project] = useState<Project>({
        client: "Yale ART 132",
        title: "Once Upon a Wet and Orange Day",
        description: "Final project for my class Introduction to Graphic Design. Zine made from a collection of photos I took over 3 month's time.",
        design: true,
        image: "/design/book_holding.jpg",
        role: "Graphic Designer",
        date: "Apr 2024",
        tools: (
            <ul>
                <li>InDesign</li>
            </ul>
        ),
        next: "/design/janice"
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
                I also inserted full-spread images if a photos had an interesting texture I wanted to highlight. To experiment with book and image size in real form, I created 5 different dummies before settling on my final product." />

                <div className="flex justify-center items-center">
                    <Image
                        src="/design/book_plan.JPG"
                        alt="Book Plan"
                        layout="intrinsic"
                        width={600}
                        height={0}
                        className="my-4"
                    />
                </div>

                <Image
                    src="/design/book_dummies.jpg"
                    layout="responsive"
                    width={0}
                    height={0}
                    alt="Book dummies"
                    className="my-8"
                />

                {/* image of dummies */}

                <Header title="Execution" />

                <Body content="Concerning the material of my book, I bound a thin PVC sheet over an orange cardstock to add shine and reflection to give the illusion of wetness. 
                I printed the book pages on shiny paper for the same effect. For the title font, I chose Highway Gothic, the font used on roadsigns to allude to orange warning signs on a rainy day." />

                {/* large image */}
                <Image
                    src="/design/book_innercover.jpg"
                    layout="responsive"
                    width={0}
                    height={0}
                    alt="Book Inner Cover"
                    className="my-8"
                />

                <Body content="I saddle-stitched the zine with orange thread, separating the zine into 5 8-page signatures. 
                This way, I was able to maximize the amount of spreads that can be opened flat since there are many full-bleed images in my zine."/>

                <Image
                    src="/design/book_side.jpg"
                    layout="responsive"
                    width={0}
                    height={0}
                    alt="Book Cover"
                    className="my-8"
                />

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


            </article>

            {/* Navigation Section */}
            <div className="flex flex-row justify-center space-x-24 mx-20 my-8 pb-8">
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
                    <Image
                        src="/svgs/next.svg"
                        width={80}
                        height={60}
                        alt="Next Icon"
                    />
                </Link>
            </div>
        </div>
    );
};

export default ProjectPage;
