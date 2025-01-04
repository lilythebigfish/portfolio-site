"use client";
import Image from "next/image";
import { useState } from "react";
import { Header, Body } from "@/app/project-components";
import { ProjectLanding, Project } from "@/app/project-components";

const ProjectPage = () => {
    const [project] = useState<Project>({
        client: "Social Future",
        title: "Janice, Fashion Shopping Chatbot",
        description: "Proposed and designed the full UX for a chatbot app that advises users on style options and facilitates their fashion shopping.",
        design: true,
        image: "/design/janice.png",
        role: "UX Designer",
        date: "Jan - Apr 2024",
        tools: (
            <ul>
                <li>Figma</li>
            </ul>
        ),
        team: (
            <ul>
                <li>Aaron Y</li>
                <li>Lily L</li>
                <li>Shina Y</li>
            </ul>
        ),
    });

    return (
        <div className="flex flex-col min-h-screen">
            {/* Landing Page Section */}
            <ProjectLanding project={project} />

            {/* Article Section */}
            <article className="flex-grow mx-72 pt-36">
                <Header title="Context" />

                <Body content="Our client, Social Future, is a Chinese AI-focused app development company. 
                They have a lot developed chatbot-related functionalities, but they want to make an entertaining and lucrative app for the US market.
                Our team took on the task to come up with a suitable app for Social Future and design the full UX for it."
                />
                
                <Header title="Research" />

                <Body content="We researched the current usages for AI chatbots, and categorized the market opportunities for new chatbots into: 
                creative (e.g. role-playing for character development and art/writing inspiration), learning (e.g. text-analysis and language learning), and niche (e.g. banking bot and law knowledge). 
                After looking at the pros and cons for these categories, we decided that the niche category was the best direction to go into."
                />

                {/* image of pro and con */}

                <Header title="Brainstorm" />

                <Body content="My teammate and I each brainstormed some app ideas, and we settled on making a fashion shopping chatbot because it caters to a specific audience (female and young) and the technology is easy to implement from Social Future's existing functionalities."
                />
                
                <div className="flex flex-row justify-between">
                    <Image
                        src="/design/idea1"
                        alt="Example Image"
                        layout="intrinsic"
                        width={100}
                        height={0}
                        className="my-4"
                    />
                    <Image
                        src="/design/idea2"
                        alt="Example Image"
                        layout="intrinsic"
                        width={100}
                        height={0}
                        className="my-4"
                    />
                    <Image
                        src="/design/idea3"
                        alt="Example Image"
                        layout="intrinsic"
                        width={100}
                        height={0}
                        className="my-4"
                    />
                    <Image
                        src="/design/idea4"
                        alt="Example Image"
                        layout="intrinsic"
                        width={100}
                        height={0}
                        className="my-4"
                    />
                    <Image
                        src="/design/idea5"
                        alt="Example Image"
                        layout="intrinsic"
                        width={100}
                        height={0}
                        className="my-4"
                    />
                </div>

                <Header title="User Flow" />

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
                
                <Header title="Colors" />
                
                <Image
                    src="/design/njordic-logo.png"
                    layout="responsive"
                    width={0}
                    height={0}
                    objectFit="cover" 
                    objectPosition="center"
                    alt="Book Cover"
                />

                <Header title="Final Design" />

                <div className="flex flex-row justify-between">
                    <Image
                        src="/design/janice.png"
                        alt="Example Image"
                        layout="intrinsic"
                        width={100}
                        height={0}
                        className="my-4"
                    />
                    <Image
                        src="/design/Intro.gif"
                        alt="Example Image"
                        layout="intrinsic"
                        width={100}
                        height={0}
                        className="my-4"
                    />
                </div>

                <Body content="Style Recommendation"/>

                <div className="flex justify-center items-center">
                    <Image
                        src="/design/chat.gif"
                        alt="Example Image"
                        layout="intrinsic"
                        width={100}
                        height={0}
                        className="my-4"
                    />
                </div>

                <Body content="Profile and Wishlist"/>

                <div className="flex justify-center items-center">
                    <Image
                        src="/design/Profile.jpg"
                        alt="Example Image"
                        layout="intrinsic"
                        width={100}
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
