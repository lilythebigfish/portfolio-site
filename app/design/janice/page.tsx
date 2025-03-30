"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Header, Body, Subheader } from "@/app/project-components";
import { ProjectLanding, Project } from "@/app/project-components";


const ProjectPage = () => {
  const [project] = useState<Project>({
    client: "Social Future",
    title: "Janice, Fashion Shopping Chatbot",
    description: "My team proposed a chatbot app idea and create the end-to-end mobile prototype for a Chinese app developer company. Janice is an AI “shopping buddy” who can give you fashion advice, store your wishlists, and entertain you while shopping online.",
    design: true,
    image: "/design/janice-mockup.jpg",
    type: "UX/UI Design",
    date: "6 weeks",
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
    next: "/design/njordic-supermarket",
  });


  return (
    <div className="flex flex-col min-h-screen">
      {/* Landing Page Section */}
      <ProjectLanding project={project} />


      {/* Article Section */}
      <article className="flex-grow mx-60 pt-36">
        <div className="grid grid-cols-3 gap-32">
          <div className="col-start-1 col-span-1">
            <Header title="Context" />
            <Body
              content="Our client, Future, is a Chinese app-development startup company. They have many developed chatbot functionalities and want to make an entertaining and lucrative app for the US market. The design team is tasked to identify a market fit for the product and deliver a end-to-end flow of the AI product design."
            />
            <Body
              content="The image on the right shows our client's demo for their chatbot functionalities."
            />
          </div>
          <div className="col-start-2 col-span-2">
            <Image
              src="/design/janice-demo.png"
              layout="responsive"
              width={0}
              height={0}
              alt="demo"
              className="my-8"
            />
          </div>
        </div>


        <Header title="Research" />

        <Body
          content='We researched the current usages for AI chatbots, and categorized the market opportunities for new chatbots into: creative (e.g. character simulation), learning (e.g. chatbot "teachers"), and niche (e.g. legal consulting). After examining at the pros and cons for these categories, we decided that the creative category was the best direction to go into.'
        />

        <Body
          content='My teammate and I each brainstormed some app ideas, and we decided to proceed with my idea of a fashion shopping chatbot because it caters to a specific audience (female and young) and the technology is easy to implement from Social Future&apos;s existing functionalities.'
        />

        <Header title="User Flow" />

        <Image
          src="/design/janice-flow.png"
          layout="responsive"
          width={0}
          height={0}
          alt="flow"
          className="mb-8 px-16 py-4"
        />


        <div className="grid grid-cols-3 gap-32">
          <div className="col-start-1 col-span-1">
            <Header title="Final Design" />
            <Body
              content="Janice is an AI “shopping buddy” who can give you fashion advice, store your wishlists, and entertain you while shopping online. The chatbot is personalized through two ways, user->AI and AI->user. "
            />
            <Body
              content="The product will operate in an accessible profit model, including a trial period that can offer the full chat experience before making users purchase subscription."
            />
          </div>
          <div className="col-start-2 col-span-2">
            <Image
              src="/design/janice-mockup.jpg"
              layout="responsive"
              width={0}
              height={0}
              alt="mockup"
              className="my-8"
            />
          </div>
        </div>




        <Subheader title="color scheme" />


        <Image
          src="/design/janice-colors.png"
          layout="responsive"
          width={0}
          height={0}
          alt="colors"
          className="my-4"
        />


        <Subheader title="Onboarding" />


        <div className="grid grid-cols-3 gap-32 mb-6">
          <div className="col-start-1 col-span-1">
            <Image
              src="/design/janice-landing.png"
              layout="responsive"
              width={0}
              height={0}
              alt="colors"
              className="my-4 border border-black"
            />
          </div>
          <div className="col-start-2 col-span-1">
            <Image
              src="/design/janice-preview.gif"
              layout="responsive"
              width={0}
              height={0}
              alt="preview"
              className="my-4 border border-black"
            />
          </div>


          <div className="col-start-3 col-span-1">
            <Image
              src="/design/janice-onboard.gif"
              layout="responsive"
              width={0}
              height={0}
              alt="colors"
              className="my-4 border border-black"
            />
          </div>
        </div>


        <Subheader title="Chat Funtionality Highlights" />


        <div className="grid grid-cols-3 gap-32">
          <div className="col-start-1 col-span-1">
            <Image
              src="/design/janice-recommendation.gif"
              layout="responsive"
              width={0}
              height={0}
              alt="colors"
              className="my-4 border border-black"
            />
            <Body
              content="1. Style Recommendation"
            />
            <Body
              content="Janice can offered tailored advice for shoppers"
            />

          </div>
          <div className="col-start-2 col-span-1">
            <Image
              src="/design/janice-sharing.gif"
              layout="responsive"
              width={0}
              height={0}
              alt="preview"
              className="my-4 border border-black"
            />
            <Body
              content="2. User Sharing"
            />
            <Body
              content="Janice learns users’ style based on shared external links or images for advice"
            />
          </div>


          <div className="col-start-3 col-span-1">
            <Image
              src="/design/janice-decison.gif"
              layout="responsive"
              width={0}
              height={0}
              alt="colors"
              className="my-4 border border-black"
            />
            <Body
              content="3. Decision Making"
            />
            <Body
              content="Janice can help users make the best choice based by comparing different factors"
            />
          </div>
        </div>


        <Subheader title="Profile and Wishlist" />

        <Body
          content="Wishlist and media history can be accessed on the profile page. Users can directly add items to their wishlist directly through the chat. Items are filtered by tags and users can send them back to Janice. Media history stores all the media (items, images, links) in the user’s chat with Janice."
        />


        <div className="grid grid-cols-3 gap-32">
          <div className="col-start-1 col-span-1">
            <Image
              src="/design/janice-addwishlist.gif"
              layout="responsive"
              width={0}
              height={0}
              alt="add from chat"
              className="my-4 border border-black"
            />
            <Body
              content="Add to wishlist from chat"
            />

          </div>
          <div className="col-start-2 col-span-1">
            <Image
              src="/design/janice-wishlist.gif"
              layout="responsive"
              width={0}
              height={0}
              alt="wishlist"
              className="my-4 border border-black"
            />
            <Body
              content="Sorting through wishlist"
            />
          </div>


          <div className="col-start-3 col-span-1">
            <Image
              src="/design/janice-media.gif"
              layout="responsive"
              width={0}
              height={0}
              alt="media history"
              className="my-4 border border-black"
            />
            <Body
              content="Accessing media history"
            />
          </div>
        </div>

      </article>


      {/* Navigation Section */}
      <div className="flex flex-row justify-center space-x-24 mx-20 mt-36 mb-16">
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
          <Image src="/svgs/next.svg" width={80} height={60} alt="Next Icon" />
        </Link>
      </div>
    </div>
  );
};


export default ProjectPage;