"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Body , ProjectLanding, Project } from "@/app/project-components";

const ProjectPage = () => {
    const [project] = useState<Project>({
        title: "What it Means to Be a Woman",
        description: "A fabric-primed quadriptych depicting the bittersweets of womanhood using experimental materials such as hair, wax, pins, porcelain etc.",
        design: false,
        image: "/art/woman.jpg",
        date: "Oct 2021",
        medium: "Mixed Media on Canvas",
        next: "/art/contemporary-still-life"
    });

    return (
        <div className="flex flex-col min-h-screen">
            {/* Landing Page Section */}
            <ProjectLanding project={project} />

            {/* Article Section */}
            <article className="flex-grow mx-52 pt-36 snap-start">

            <Image
                src="/art/woman.jpg"
                layout="responsive"
                width={800}
                height={500}
                alt="Article Image"
                className="my-8"
            />
            

            <Body content="The eyes at the left top emphasize how women have to be constantly alert to the dangers around them, emphasized by the thumb-tacks that protrude from surrounding vines; the right top canvas combats the stereotype of women being “fragile, pretty flower vases” by characterizing the inner essence of even a “broken” woman as grand rivers. At the bottom left is a depiction of the tenderness of motherhood as the baby nests sweetly in its mother’s hair which I braided from a real wig; and at the bottom right, a mother giving birth is juxtaposed with a sunrise made out of colorful metallic strings, glorifying the woman’s capacity to debut new life into the world." />

            
            </article>

            {/* Navigation Section */}
            <div className="flex flex-row justify-center space-x-24 mx-20 my-8 pb-8">
                <Link href= "/art/home">
                    <Image
                        src="/svgs/back.svg"
                        width={75}
                        height={60}
                        alt="Back Icon"
                        className="bottom-0"
                        />
                </Link>
                <Link href="/art/contemporary-still-life">
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
