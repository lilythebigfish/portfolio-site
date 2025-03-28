import Image from "next/image";

export default function Display() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Image
        src="/images/peter.png"
        width={300}
        height={200}
        alt="sme and peter"
      />
    </div>
  );
}
