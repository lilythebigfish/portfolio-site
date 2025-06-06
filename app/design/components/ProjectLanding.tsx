"use client";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface Project {
  client?: string;
  title?: string | number;
  description?: string;
  design?: boolean;
  image: string | StaticImageData;
  type?: string;
  date?: string;
  tools?: ReactNode;
  team?: ReactNode;
  medium?: string;
  next: string;
}

export function ProjectLanding({ project }: { project: Project }) {
  return (
    <div>
      <div className="hidden md:flex h-screen mx-20 pt-36 pb-10 flex-row justify-between items-start ">
        {projectDetails(project)}
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
      <div className="md:hidden h-screen flex flex-col pt-20">
        {/* Image */}
        <div className="w-full bg-slate-100">
          <Image
            src={project.image}
            alt="Book Cover"
            height={500} // only for image optimization
            width={500}
            style={{
              height: '350px',
              width: 'auto',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </div>
        <div>
          {projectDetails(project)}
        </div>
      </div>
    </div>

  );
}

export function projectDetails(project: Project) {
  return (
    <div className="w-full md:w-1/2 h-full pt-4 md:py-0 flex flex-col justify-between items-start px-8 md:px-0 ">
      {/* Title Section: Client, Title, Description */}
      <div className="flex flex-col justify-start items-start space-y-2 md:space-y-4 w-full md:w-2/3">
        {project.client && (
          <h2 className="md:text-lg">{project.client || "Unknown Client"}</h2>
        )}
        <h1 className="text-2xl md:text-5xl font-bold leading-snug">
          {project.title || "Untitled Project"}
        </h1>
        <p className="pt-4 md:pt-8">
          {project.description || "No description available."}
        </p>
      </div>

      {/* Design Details */}
      <div className="w-full md:w-2/3 pb-0 flex flex-row justify-between pt-10 ">
        <div className="flex flex-col space-y-1 md:space-y-3">
          <p className="font-medium uppercase">Type</p>
          <p>{project.type || "Not Specified"}</p>
        </div>
        <div className="flex flex-col space-y-1 md:space-y-3">
          <p className="font-medium uppercase">Duration</p>
          <p>{project.date || "Not Specified"}</p>
        </div>
        <div className="flex flex-col space-y-1 md:space-y-3">
          <p className="font-medium uppercase">Tools</p>
          {project.tools || <p>No Tools Listed</p>}
        </div>
        {project.team && (
          <div className="flex flex-col space-y-1 md:space-y-3">
            <p className="font-medium uppercase">Team</p>
            {project.team}
          </div>
        )}
      </div>

    </div>
  )
}