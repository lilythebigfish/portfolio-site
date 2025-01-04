"use client";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

// Define the TypeScript interface for the project
export interface Project {
    client?: string;
    title?: string | number;
    description?: string;
    design?: boolean;
    image: string | StaticImageData;
    role?: string;
    date?: string;
    tools?: ReactNode;
    team?: ReactNode;
    medium?: string;
}

export function Header({ title }: { title: ReactNode }) { 
    return (
        <h1 className="text-3xl pt-10 pb-8 font-medium leading-relaxed">{title}</h1>
    )
}

export function Body({ content }: {content: ReactNode}) { 
    return (
        <p className="text-md pb-4"> {content}</p>
    )
}
  
// ProjectLanding Component
export function ProjectLanding({ project }: { project: Project }) {
    return (
        <div className="h-screen mx-20 pt-36 pb-10 flex flex-row justify-between items-start">
            {/* Infomation */}
            <div className="w-2/3 h-full flex flex-col justify-between items-start">
                {/* Title Section */}
                <div className="flex flex-col justify-start items-start space-y-4 w-2/3">
                    <h2 className="text-lg">{project.client || "Unknown Client"}</h2>
                    <h1 className="text-5xl font-bold">{project.title || "Untitled Project"}</h1>
                    <p className="pt-8 text-justify">{project.description || "No description available."}</p>
                </div>

                {/* Details Section */}
                {project.design ? (
                    <DesignDetails project={project} />
                ) : (
                    <ArtDetails project={project} />
                )}

                {/* Next Image */}
                <Image
                    src="/svgs/next.svg"
                    width={80}
                    height={60}
                    alt="Next Page"
                />
            </div>
            {/* Image */}
            <div className="w-1/2 h-full relative bg-slate-100 overflow-hidden">
                <Image
                    src={project.image}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    alt="Book Cover"
                />
            </div>
        </div>
    );
}

{/* DesignDetails Component */}
function DesignDetails({ project }: { project: Project }) {
    return (
        <div className="w-2/3 flex flex-row justify-between">
            <div className="flex flex-col space-y-3">
                <p className="font-semibold">Role</p>
                <p>{project.role || "Not Specified"}</p>
            </div>
            <div className="flex flex-col space-y-3">
                <p className="font-semibold">Duration</p>
                <p>{project.date || "Not Specified"}</p>
            </div>
            <div className="flex flex-col space-y-3">
                <p className="font-semibold">Tools</p>
                {project.tools || <p>No Tools Listed</p>}
            </div>
            {project.team && (
                <div className="flex flex-col space-y-3">
                    <p className="font-semibold">Team</p>
                    {project.team}
                </div>
            )}
        </div>
    );
}

// ArtDetails Component
function ArtDetails({ project }: { project: Project }) {
    return (
        <div className="w-2/3 flex flex-row justify-between">
            <div className="flex flex-col space-y-3">
                <p className="font-semibold">Medium</p>
                <p>{project.medium || "Not Specified"}</p>
            </div>
            <div className="flex flex-col space-y-3">
                <p className="font-semibold">Date</p>
                <p>{project.date || "Not Specified"}</p>
            </div>
        </div>
    );
}
