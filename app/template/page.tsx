"use client";
import Image from "next/image";
import { useState } from "react";
import { Header, Body } from "@/app/project-components";
import { ProjectLanding, Project } from "@/app/project-components";

const ProjectPage = () => {
    const [project] = useState<Project>({
        client: "John Doe",
        title: "Project Title",
        description: "Developer",
        design: true,
        image: "/images/stretch-graphite.JPG", // Adjusted path
        role: "Artist",
        date: "Date here",
        tools: (
            <ul>
                <li>Tool 1</li>
                <li>Tool 2</li>
            </ul>
        ),
        team: (
            <ul>
                <li>Team Member 1</li>
                <li>Team Member 2</li>
            </ul>
        ),
        medium: "Acrylic on Canvas",
    });

    return (
        <div className="flex flex-col min-h-screen">
            {/* Landing Page Section */}
            <ProjectLanding project={project} />

            {/* Article Section */}
            <article className="flex-grow mx-72 pt-36">
                <Header title="Context" />

                <Body content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                
                {/* small image */}
                <div className="flex justify-center items-center">
                    <Image
                        src="/design/irma.jpg"
                        alt="Example Image"
                        layout="intrinsic"
                        width={600}
                        height={0}
                        className="my-4"
                    />
                </div>
                
                {/* large image */}
                <Image
                    src="/design/njordic-logo.png"
                    layout="responsive"
                    width={0}
                    height={0}
                    objectFit="cover" 
                    objectPosition="center"
                    alt="Book Cover"
                />
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
