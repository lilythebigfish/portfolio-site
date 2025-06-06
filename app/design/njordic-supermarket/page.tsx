"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Header, Body, Subheader } from "@/app/design/components/Typography";
import { Article } from "../components/Article";
import { ProjectLanding, Project } from "../components/ProjectLanding";
import { PageNav } from "../components/PageNav";

const ProjectPage = () => {
    const [project] = useState<Project>({
        client: "DIS Summer Program 2024",
        title: "Njordic Supermarket",
        description: "I spent the summer of 2024 studying brand design in Copenhagen. For my coursework, I designed a Danish supermarket identity that aimed to reduce elite shoppers' decision paralysis by providing high-quality product selection. ",
        design: true,
        image: "/design/njordic-mockup.jpg",
        type: "Brand Design",
        date: "6 weeks",
        tools: (
            <ul>
                <li>Indesign</li>
                <li>Photoshop</li>
                <li>Figma</li>
            </ul>
        ),
        next: "/design/wet-and-orange"
    });

    return (
        <div className="min-h-screen">
            {/* Landing Page Section */}
            <ProjectLanding project={project} />

            {/* Article Section */}
            <Article>
                <Header title="Context" />
                <div className="col-start-1 col-span-2">
                    <Body
                        content="In January 2023, Irma, the staple supermarket in Denmark, announced that it would close all its stores. For centuries, the Danes treasured the Irma girl and the supermarket's design initiatives, but its sales was eventually was outcompeted by new discount markets. In order to fill in the gap Irma left, we were to design a new brand that solves a modern Danish supermarket problem."
                    />
                </div>
                <div className="col-start-3 col-span-1">
                    <Image
                        src="/design/njordic-irma.jpeg"
                        layout="responsive"
                        width={0}
                        height={0}
                        alt="irma"
                        className=""
                    />
                </div>

                <Header title="Identifying the Problem + Solution" />
                <div className="col-start-1 col-span-1">
                    <Body
                        content="After conducting research to understand grocery shoppers' pain points, I realized the complaints fell into three main baskets: visual overstimulation, decision paralysis, and supermarket anxiety. After distilling the causation relationship among them, I identified the precise design problem and the key ideas for a solution."
                    />
                </div>
                <div className="col-start-2 col-span-2">
                    <Image
                        src="/design/njordic-problem.png"
                        layout="responsive"
                        width={0}
                        height={0}
                        alt="irma"
                        className=""
                    />
                </div>

                <Header title="Identity Statement" />

                <Image
                    src="/design/njordic-message.png"
                    layout="responsive"
                    width={800}
                    height={500}
                    alt="Article Image"
                    className="md:px-32 col-span-full"
                />

                <Header title="Final Brand Design" />

                <Image
                    src="/design/njordic-logo.png"
                    layout="responsive"
                    width={800}
                    height={500}
                    alt="Article Image"
                    className="my-8 md:px-32 col-span-full"
                />

                <Image
                    src="/design/njordic-style.png"
                    layout="responsive"
                    width={800}
                    height={500}
                    alt="Article Image"
                    className="my-8 md:px-32 col-span-full"
                />

                <Header title="Deliverables" />
                <Image
                    src="/design/njordic-products.png"
                    layout="responsive"
                    width={800}
                    height={500}
                    alt="Posters"
                    className="md:px-32 my-8 col-span-full"
                />

                <Image
                    src="/design/njordic-posters.png"
                    layout="responsive"
                    width={800}
                    height={500}
                    alt="Products"
                    className="my-8 col-span-full"
                />

                <Image
                    src="/design/njordic-website.jpg"
                    layout="responsive"
                    width={800}
                    height={500}
                    alt="Website"
                    className="my-8 col-span-full"
                />

                <Image
                    src="/design/njordic-bag.jpg"
                    layout="responsive"
                    width={800}
                    height={500}
                    alt="Shopping bag"
                    className="my-8 col-span-full"
                />

            </Article>

            {/* Navigation Section */}
            <PageNav next = "/design/wet-and-orange" />
        </div>
    );
};

export default ProjectPage;
