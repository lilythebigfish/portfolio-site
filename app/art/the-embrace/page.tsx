"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Body, ProjectLanding, Project } from "@/app/project-components";

const ProjectPage = () => {
    const [project] = useState<Project>({
        title: "The Embrace",
        description: "The transformation process of a new version of me replacing the last as I continue to absorb new experiences and knowledge in order to grow.",
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

                <Image
                    src="/art/embrace-1.png"
                    layout="responsive"
                    width={800}
                    height={500}
                    alt="Article Image"
                    className="my-8"
                />

                <Body content="Tiles emphasize the self-reflective nature intended by this piece, and the gentle farewell-embrace depicts me thanking the ways the previous me enriched the present. The hole in the middle shows how the new me is not completely formed yet and will continue to be there as I constantly undergo transformation." />

                <Image
                    src="/art/embrace-2.png"
                    layout="responsive"
                    width={800}
                    height={500}
                    alt="Article Image"
                    className="my-8"
                />

                <Image
                    src="/art/embrace-3.png"
                    layout="responsive"
                    width={800}
                    height={500}
                    alt="Article Image"
                    className="my-8"
                />
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
