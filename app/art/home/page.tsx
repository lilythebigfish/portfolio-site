"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ProjectLanding, Project } from "@/app/project-components";

const ProjectPage = () => {
    const [project] = useState<Project>({
        title: "Home",
        description: "Suite A21 in Durfee hall: what home meant for meant for me Freshman year of Yale. A collage drawing featuring the inhabitants of the space that made it feel homey.",
        design: false,
        image: "/art/home.jpg",
        date: "Dec 2023",
        medium: "Ink and Charcoal on Paper",
        next: "/art/what-it-means-to-be-a-woman"
    });

    return (
        <div className="flex flex-col min-h-screen">
            {/* Landing Page Section */}
            <ProjectLanding project={project} />

            {/* Article Section */}
            <article className="flex-grow mx-72 pt-36">
                <Image
                src="/art/home.jpg"
                layout="responsive"
                width={800}
                height={500}
                alt="Article Image"
                className="my-8"
                />
                

                {/* small image */}
                <div className="flex justify-center items-center">
                    <Image
                        src="/art/home-2.JPG"
                        alt="Example Image"
                        layout="intrinsic"
                        width={600}
                        height={0}
                        className="my-8"
                    />
                </div>
            
            </article>

            {/* Navigation Section */}
            <div className="flex flex-row justify-center space-x-24 mx-20 my-8 pb-8">
            <Link href= "/art/stretch">
                    <Image
                        src="/svgs/back.svg"
                        width={75}
                        height={60}
                        alt="Back Icon"
                        className="bottom-0"
                        />
                </Link>
                <Link href="/art/what-it-means-to-be-a-woman">
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
