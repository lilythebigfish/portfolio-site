"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Body, ProjectLanding, Project } from "@/app/project-components";

const ProjectPage = () => {
    const [project] = useState<Project>({
        title: "When Flowers Die, Will Love Die Too?",
        description: "Explorations of love, passion and its dissipation through capturing flowers in their various life stages.",
        design: false,
        image: "/art/flowers-1.JPG",
        date: "Feb 2025",
        medium: "Oil on Canvas",
        next: "/art/stretch"
    });

    return (
        <div className="flex flex-col min-h-screen">
            {/* Landing Page Section */}
            <ProjectLanding project={project} />

            {/* Article Section */}
            <article className="flex-grow mx-52 pt-36 snap-start">
                <div className="flex justify-center items-center">
                    <Image
                        src="/art/flowers-1.JPG"
                        alt="Example Image"
                        layout="intrinsic"
                        width={600}
                        height={0}
                        className="my-4"
                    />
                </div>

                <Body content="" />

                <div className="flex justify-center items-center">
                    <Image
                        src="/art/flowers-2.jpg"
                        alt="Example Image"
                        layout="intrinsic"
                        width={600}
                        height={0}
                        className="my-4"
                    />
                </div>

                <Body content="" />

                <div className="flex justify-center items-center">
                    <Image
                        src="/art/flowers-3.jpg"
                        alt="Example Image"
                        layout="intrinsic"
                        width={600}
                        height={0}
                        className="my-4"
                    />
                </div>

                <Body content="" />

                <div className="flex justify-center items-center">
                    <Image
                        src="/art/flowers-4.jpg"
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
