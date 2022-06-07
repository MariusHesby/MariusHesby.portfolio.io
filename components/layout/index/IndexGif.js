import Image from "next/image";

export default function IndexGif() {
  return (
    <div className="bg-green-100 px-5 sm:px-10">
      <div className="h-screen">
        <div className="justify-start grid content-center h-full">
          <Image className="object-contain" src="/assets/images/programming.gif" width="500px" height="500px" alt="Gif of a man typing on a computer" />
        </div>
      </div>
    </div>
  );
} 