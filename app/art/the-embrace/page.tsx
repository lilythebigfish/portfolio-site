"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Body, ProjectLanding, Project } from "@/app/project-components";

const ProjectPage = () => {
    const [project] = useState<Project>({
        title: "The Embrace",
        description: "The transformation process of a new version of me replacing the last as I continue to absorb new experiences and knowledge to grow in my adolescence.",
        design: false,
        image: "/art/embrace-1.png",
        date: "Jun 2022",
        medium: "Airdry Clay and Reflective Mosaic Tiles",
        next: "/art/boats"
    });

    return (
        <div className="flex flex-col min-h-screen">
            {/* Landing Page Section */}
            <ProjectLanding project={project} />

            {/* Article Section */}
            <article className="flex-grow mx-52 pt-36 snap-start">

                <div className="flex justify-center items-center">
                    <Image
                        src="/art/embrace-1.png"
                        alt="Example Image"
                        layout="intrinsic"
                        width={600}
                        height={0}
                        className="mb-8"
                    />
                </div>

                <Body content="The mirror-tiles emphasize the reflective nature of this piece, and the gentle embrace depicts me giving gratitude to the ways my younger-self enriched my present-self. 
                The hole in the middle of the torso shows how the new me is not a closed form and will continue to morph as I undergo the transformative journey of adolescence." />

                <div className="flex justify-center items-center">
                    <Image
                        src="/art/embrace-2.png"
                        alt="Example Image"
                        layout="intrinsic"
                        width={600}
                        height={0}
                        className="my-4"
                    />
                </div>

                <div className="flex justify-center items-center">
                    <Image
                        src="/art/embrace-3.png"
                        alt="Example Image"
                        layout="intrinsic"
                        width={600}
                        height={0}
                        className="my-4"
                    />
                </div>

            </article>

            {/* Navigation Section */}
            <div className="flex flex-row justify-center space-x-24 mx-20 my-8 pb-8">
                <Link href="/art/food-dipped-in-milk">
                    <Image
                        src="/svgs/back.svg"
                        width={75}
                        height={60}
                        alt="Back Icon"
                        className="bottom-0"
                    />
                </Link>
                <Link href="/art/boats">
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
