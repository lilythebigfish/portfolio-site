import Link from "next/link"
import Image from "next/image"

type PageNavProps = {
    prev?: string;
    next?: string;
};

export function PageNav({ prev, next }: PageNavProps) {
    return (
        <div className="flex flex-row justify-center space-x-24 mx-20 pt-16 md:pt-32 pb-8 md:pb-16">
            {prev && (
                <Link href={prev}>
                    <Image
                        src="/svgs/back.svg"
                        width={75}
                        height={60}
                        alt="Back Icon"
                        className="bottom-0"
                    />
                </Link>
            )}
            {next && (
                <Link href={next}>
                    <Image src="/svgs/next.svg"
                        width={80}
                        height={60}
                        alt="Next Icon" />
                </Link>
            )}

        </div>
    )

}
