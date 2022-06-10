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

    <div className="px-5 py-14 lg:p-16 xl:p-24 grid content-center grid-cols-3 gap-10 md:h-screen">
      {images.map((img, i) => (
        <Image className="object-contain" src={img} width="300px" height="400px" alt="Marius" key={i} />
      ))}
    </div>
  );
}
