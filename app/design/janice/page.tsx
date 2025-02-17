"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Header, Body } from "@/app/project-components";
import { ProjectLanding, Project } from "@/app/project-components";

const ProjectPage = () => {
    const [project] = useState<Project>({
        client: "Social Future",
        title: "Janice, Fashion Shopping Chatbot",
        description: "Proposed and designed the full UX for a chatbot app that advises users on style options and facilitates their fashion shopping.",
        design: true,
        image: "/design/janice-cover.png",
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
        next: "/design/njordic-supermarket"
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
                creative (e.g. character simulation), learning (e.g. chatbot &quot;teachers&quot;), and niche (e.g. legaal consulting). 
                After looking at the pros and cons for these categories, we decided that the creative category was the best direction to go into."
                />

                <Image
                    src="/design/pro-con.jpg"
                    layout="responsive"
                    width={0}
                    height={0}
                    alt="Book Cover"
                    className="my-8"
                />

                <Header title="Brainstorm" />

                <Body content="My teammate and I each brainstormed some app ideas, and we settled on making a fashion shopping chatbot because it caters to a specific audience (female and young) and the technology is easy to implement from Social Future's existing functionalities."
                />

                <Image
                    src="/design/janice-ideas.png"
                    layout="responsive"
                    width={0}
                    height={0}
                    alt="Book Cover"
                    className="my-8"
                />

                <Header title="User Flow" />

                <Image
                    src="/design/janice-flow.png"
                    layout="responsive"
                    width={0}
                    height={0}
                    alt="Book Cover"
                    className="my-8"
                />

                <Header title="Final Design" />

                <div className="flex flex-row space-x-3 justify-center w-full ">
                    <div className="flex h-[600px] w-auto">
                        <Image
                            src="/design/janice.png"
                            alt="Example Image"
                            width={400}
                            height={600} // Fixed height for consistency
                            className="my-4 object-contain"
                        />
                    </div>
                    <div className="flex h-[600px] w-auto">
                        <Image
                            src="/design/janice_onboarding.gif"
                            alt="Example Image"
                            width={400}
                            height={600} // Same fixed height as the first image
                            className="my-4 object-contain"
                        />
                    </div>
                </div>

                <Header title="Onboarding" />

                <Image
                    src="/design/janice-onboard.png"
                    layout="responsive"
                    width={0}
                    height={0}
                    objectFit="cover"
                    objectPosition="center"
                    alt="Book Cover"
                />

                <Header title="Style Recommendation" />

                <div className="flex justify-center items-center">
                    <Image
                        src="/design/chat.gif"
                        alt="Example Image"
                        layout="intrinsic"
                        width={300}
                        height={0}
                        className="my-4"
                    />
                </div>

                <Header title="Profile and Wishlist" />

                <div className="flex justify-center items-center">
                    <Image
                        src="/design/Profile.gif"
                        alt="Example Image"
                        layout="intrinsic"
                        width={300}
                        height={0}
                        className="my-4"
                    />
                </div>

            </article>

            {/* Navigation Section */}
            <div className="flex flex-row justify-center space-x-24 mx-20 my-12">
                <Link href="/design/wet-and-orange">
                    <Image
                        src="/svgs/back.svg"
                        width={75}
                        height={60}
                        alt="Back Icon"
                        className="bottom-0"
                    />
                </Link>
                <Link href="/design/njordic-supermarket">
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
