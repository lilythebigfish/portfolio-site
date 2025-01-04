"use client";
import Image from "next/image";
import { useState } from "react";
import { Header, Body } from "@/app/project-components";
import { ProjectLanding, Project } from "@/app/project-components";

const ProjectPage = () => {
    const [project] = useState<Project>({
        client: "DIS Summer Program 2024",
        title: "Njordic Supermarket",
        description: "I designed a brand identity centered on quality selection and minimalism for my hypothetical Danish supermarket, Njordic, as part of DIS's Graphic Design Foundation Studio in Copenhagen.",
        design: true,
        image: "/design/njordic-cover.jpg",
        role: "Graphic designer",
        date: "Jun - Jul 2024",
        tools: (
            <ul>
                <li>Indesign</li>
                <li>Photoshop</li>
                <li>Figma</li>
            </ul>
        ),
    });

    return (
        <div className="flex flex-col min-h-screen">
            {/* Landing Page Section */}
            <ProjectLanding project={project} />

            {/* Article Section */}
            <article className="flex-grow mx-72 pt-24">
                <Header title="Context" />
                <Body content="In January 2023, Irma, the staple supermarket in Denmark, announced that it would close all its stores. 
                            For centuries, the Danes treasured the Irma girl and the supermarket's design initiatives, but its sales was eventually was outcompeted by new discount markets.
                            In order to fill in the gap Irma left, we were to design a new brand that solves a modern Danish supermarket problem." />
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

                <Header title="The Problem" />
                <Body content={<> After conducting research and brainstorming, I identified the key problem in supermarket shopping that I wanted to solve:
                    <strong> How should we reduce shopper&apos;s decision paralysis caused by overstimulation? </strong></>} />

                <Image
                src="/design/njordic-sketches.png"
                layout="responsive"
                width={0}
                height={0}
                objectFit="cover"
                objectPosition="center"
                alt="sketches"
                />
                
                <Header title="Personna Study" />  

                <Image
                src="/design/njordic-personna.jpg"
                layout="responsive"
                width={0}
                height={0}
                objectFit="cover"
                objectPosition="center"
                alt="sketches"
                />

                <Header title="Logo" />

                <Body content="The
                                name “Njordic” comes from Njord, the nordic god of the sea and
                                navigation, embodying Njordic’s dedication to navigating customers
                                through a sea of grocery choices. This is achieved by providing only
                                the highest quality products in store and employing minimalistic
                                design principles." />

                <Image
                    src="/design/njordic-logo.png"
                    layout="responsive"
                    width={0}
                    height={0}
                    objectFit="cover"
                    objectPosition="center"
                    alt="Book Cover"
                />

                <Header title="Identity Statement" /> 
        
                <Image
                    src="/design/njordic-message.png"
                    layout="responsive"
                    width={800}
                    height={500}
                    alt="Article Image"
                    className="my-8"
                />

                <Header title="Style" />
                <Image
                    src="/design/njordic-style.png"
                    layout="responsive"
                    width={800}
                    height={500}
                    alt="Article Image"
                    className="my-8"
                />

                <Header title="Deliverables" />
                <Image
                    src="/design/njordic-products.png"
                    layout="responsive"
                    width={800}
                    height={500}
                    alt="Posters"
                    className="my-8"
                />

                <Image
                    src="/design/njordic-posters.png"
                    layout="responsive"
                    width={800}
                    height={500}
                    alt="Products"
                    className="my-8"
                />

                <Image
                    src="/design/njordic-website.jpg"
                    layout="responsive"
                    width={800}
                    height={500}
                    alt="Website"
                    className="my-8"
                />

                <Image
                    src="/design/njordic-bag.jpg"
                    layout="responsive"
                    width={800}
                    height={500}
                    alt="Shopping bag"
                    className="my-8"
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
