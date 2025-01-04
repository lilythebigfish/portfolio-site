"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ProjectLanding, Project } from "@/app/project-components";

const ProjectPage = () => {
    const [project] = useState<Project>({
        title: "Food Dipped In Milk",
        description: "This 12-panel piece is a homage of my dedication to dipping (selected) foods into milk to enhance flavor.",
        design: false,
        image: "/art/milk.jpg",
        date: "Jul 2022",
        medium: "Acrylic and Woodcut on Panel",
        next: "/art/the-embrace"
    });

    return (
        <div className="flex flex-col min-h-screen">
            {/* Landing Page Section */}
            <ProjectLanding project={project} />

            {/* Article Section */}
            <article className="flex-grow mx-52 pt-36 snap-start">

            <Image
                src="/art/milk.jpg"
                layout="responsive"
                width={800}
                height={500}
                alt="Article Image"
                className="my-8"
            />
            
            </article>

            {/* Navigation Section */}
            <div className="flex flex-row justify-center space-x-24 mx-20 my-8 pb-8">
                <Link href= "/art/food-dipped-in-milk">
                    <Image
                        src="/svgs/back.svg"
                        width={75}
                        height={60}
                        alt="Back Icon"
                        className="bottom-0"
                        />
                </Link>
                <Link href="/art/the-embrace">
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
