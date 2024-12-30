import Image from "next/image";
import { Header, Body } from "@/app/components";

export default function Design1() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Landing Page Section */}
            <div className="h-screen mx-20 pt-36 pb-10 flex flex-row justify-between items-start">
                {/* Info Section */}
                <div className="w-2/3 h-full flex flex-col justify-between items-start">
                    <div className="flex flex-col justify-start items-start space-y-4 w-2/3">
                        <h2 className="text-lg">Client Here</h2> {/* FILL */}
                        <h1 className="text-5xl font-bold">Default Blog Title</h1> {/* FILL */}
                        <p className="pt-8"> {/* FILL */}
                            This is a description that describes this project. This is a
                            description that describes this project.
                        </p>
                    </div>

                    {/* Details Section */}
                    <div className="w-2/3 flex flex-row justify-between">
                        <div className="flex flex-col space-y-3">
                            <p className="font-semibold">Role</p>
                            <p>Role Here</p> {/* FILL */}
                        </div>
                        <div className="flex flex-col space-y-3">
                            <p className="font-semibold">Duration</p>
                            <p>Sep - Dec 2024</p> {/* FILL */}
                        </div>
                        <div className="flex flex-col space-y-3">
                            <p className="font-semibold">Tools</p>
                            <ul> {/* FILL */}
                                <li>Photoshop</li>
                                <li>Figma</li>
                            </ul>
                        </div>
                        <div className="flex flex-col space-y-3">
                            <p className="font-semibold">Team</p>
                            <ul> {/* FILL */}
                                <li>Jonny</li>
                                <li>Freddy</li>
                            </ul>
                        </div>
                    </div>

                    {/* Next Image */}
                    <Image src="/svgs/next.svg" width={80} height={60} alt="Next Page" />
                </div>

                {/* Image Section */}
                <div className="w-1/2 h-full relative bg-slate-100 overflow-hidden">
                    <Image
                        src="/images/book.jpg"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        alt="Book Cover"
                    />
                </div>
            </div>

            {/* Article Section */}
            <article className="flex-grow mx-52 pt-36">
                <Header title="Context" />
                <Body content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                <Image
                    src="/images/book.jpg"
                    layout="responsive"
                    width={800}
                    height={500}
                    alt="Article Image"
                    className="my-8"
                />
            </article>
            {/* Navigation */}
            <div className="flex flex-row justify-center space-x-24 mx-20 my-8 pb-8">
                <Image src="/svgs/back.svg" width={75} height={60} alt="back Icon" className="bottom-0" />
                <Image src="/svgs/next.svg" width={80} height={60} alt="Next Icon" />
            </div>
        </div>
    );
}
