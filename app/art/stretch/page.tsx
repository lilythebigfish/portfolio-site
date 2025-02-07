"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Body, ProjectLanding, Project } from "@/app/project-components";

const ProjectPage = () => {
    const [project] = useState<Project>({
        title: "Stretch",
        description: "A study of my body in tension; homage to my longterm struggle with neck-pain and scoliosis. Two iterations made for ART 114, Basic Drawing: graphite iteration focuses on anatomical accuracy and pastel iteration enhances dynamism.",
        design: false,
        image: "/art/stretch-pastel.JPG",
        date: "Oct 2023",
        medium: "Graphite, Charcol and Oil Pastel on Paper",
        next: "/art/home"
    });

    return (
        <div className="flex flex-col min-h-screen">
            {/* Landing Page Section */}
            <ProjectLanding project={project} />

            {/* Article Section */}
            <article className="flex-grow mx-52 pt-36 snap-start">
                <Image
                    src="/art/stretch-graphite.JPG"
                    layout="responsive"
                    width={800}
                    height={500}
                    alt="Article Image"
                    className="my-8"
                />

                <Body content="" />

                <Image
                    src="/art/stretch-pastel.JPG"
                    layout="responsive"
                    width={800}
                    height={500}
                    alt="Article Image"
                    className="my-8"
                />
            </article>

            {/* Navigation Section */}
            <div className="flex flex-row justify-center space-x-24 mx-20 my-8 pb-8">
                <Link href="/art/home">
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
