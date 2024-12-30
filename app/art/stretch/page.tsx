import Image from "next/image";

export default function Design1() {
  return (
    <div className="flex flex-col min-h-screen snap-y snap-mandatory">
      {/* Landing Page Section */}
      <div className="h-screen mx-20 pt-36 pb-10 flex flex-row justify-between items-start snap-start">
        {/* Info Section */}
        <div className="w-2/3 h-full flex flex-col justify-between items-start">
          <div className="flex flex-col justify-start items-start space-y-4 w-2/3">
            <h1 className="text-5xl font-bold">Stretch</h1> {/* FILL */}
            <p className="pt-8"> {/* FILL */}
              A study of my body in tension and motion. Two iterations made for ART 114, Basic Drawing: graphite iteration focuses on anatomical accuracy and pastel iteration enhances dynamism.
            </p>
          </div>

          {/* Details Section */}
          <div className="w-2/3 flex flex-row justify-between">
            <div className="flex flex-col space-y-3">
              <p className="font-semibold">Medium</p>
              <p>Graphite, Charcol and Oil Pastel on Paper </p> {/* FILL */}
            </div>
            <div className="flex flex-col space-y-3">
              <p className="font-semibold">Date</p>
              <p>Oct 2023</p> {/* FILL */}
            </div>
          </div>

          {/* Next Image */}
          <Image src="/svgs/next.svg" width={80} height={60} alt="Next Icon" />
        </div>

        {/* Image Section */}
        <div className="w-1/2 h-full relative bg-slate-100 overflow-hidden"> {/* FILL */}
          <Image
            src="/images/stretch-pastel.jpg" 
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="Book Cover"
          />
        </div>
      </div>

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

      {/* Navigation */}
      <div className="flex flex-row justify-center space-x-24 mx-20 my-8 pb-8">
          <Image src="/svgs/back.svg" width={75} height={60} alt="back Icon" className="bottom-0" />
          <Image src="/svgs/next.svg" width={80} height={60} alt="Next Icon" />
      </div>
    </div>
  );
}
