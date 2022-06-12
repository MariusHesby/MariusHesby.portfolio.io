import Image from "next/image";

export default function IndexGif() {
  return (
    <div className="px-5 py-14 sm:px-10 md:py-0">
      <div className="md:h-screen">
        <div className="md:justify-start grid content-center h-full">
          <Image className="object-contain" src="/assets/images/programming.gif" width="500px" height="500px" alt="Gif of a man typing on a computer" />
        </div>
      </div>
    </div>
  );
} 