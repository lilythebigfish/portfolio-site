"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ProjectLanding, Project } from "@/app/project-components";

const ProjectPage = () => {
    const [project] = useState<Project>({
        title: "Boats",
        description: "Views from my hotel balcony in Sanya Bay, day and night.",
        design: false,
        image: "/art/day.jpg",
        date: "Jun 2021",
        medium: "Oil Pastel on Paper",
        next: "/art/stretch"
    });

    return (
        <div className="flex flex-col min-h-screen">
            {/* Landing Page Section */}
            <ProjectLanding project={project} />

            {/* Article Section */}
            <article className="flex-grow mx-52 pt-36 snap-start">

                <Image
                    src="/art/day.jpg"
                    layout="responsive"
                    width={800}
                    height={500}
                    alt="Article Image"
                    className="my-8"
                />

                <Image
                    src="/art/night.jpg"
                    layout="responsive"
                    width={800}
                    height={500}
                    alt="Article Image"
                    className="my-8"
                />

            </article>

            {/* Navigation Section */}
            <div className="flex flex-row justify-center space-x-24 mx-20 my-8 pb-8">
                <Link href="/art/the-embrace">
                    <Image
                        src="/svgs/back.svg"
                        width={75}
                        height={60}
                        alt="Back Icon"
                        className="bottom-0"
                    />
                </Link>
                <Link href="/art/stretch">
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
