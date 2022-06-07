import Image from "next/image";

export default function AboutMeImageSection() {
  const images = [
    "/assets/images/slider-1.jpg",
    "/assets/images/slider-2.jpg",
    "/assets/images/slider-3.jpg",
    "/assets/images/slider-4.jpg",
    "/assets/images/slider-5.jpg",
    "/assets/images/slider-1.jpg",
    "/assets/images/slider-2.jpg",
    "/assets/images/slider-3.jpg",
    "/assets/images/slider-4.jpg"
  ];
  return (

    <div className="bg-blue-100 p-5 sm:p-10 grid content-center grid-cols-3 gap-10 h-screen">
      {images.map((img, i) => (
        <Image className="object-contain" src={img} width="300px" height="400px" alt="" key={i} />
      ))}
    </div>
  );
}
