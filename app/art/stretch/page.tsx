"use client";
import Image from "next/image";
import { useState } from "react";
import { ProjectLanding, Project } from "@/app/project-components";

const ProjectPage = () => {
    const [project] = useState<Project>({
        title: "Stretch",
        description: "A study of my body in tension and motion. Two iterations made for ART 114, Basic Drawing: graphite iteration focuses on anatomical accuracy and pastel iteration enhances dynamism.",
        design: false,
        image: "/art/stretch-pastel.JPG", // Adjusted path
        date: "Oct 2023",
        medium: "Graphite, Charcol and Oil Pastel on Paper",
    });

    return (
        <div className="flex flex-col min-h-screen">
            {/* Landing Page Section */}
            <ProjectLanding project={project} />

            {/* Article Section */}
            <article className="flex-grow mx-52 pt-36 snap-start">
            <Image
                src="/images/stretch-graphite.jpg"
                layout="responsive"
                width={800}
                height={500}
                alt="Article Image"
                className="my-8"
            />
            <Image
                src="/images/stretch-pastel.jpg"
                layout="responsive"
                width={800}
                height={500}
                alt="Article Image"
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
