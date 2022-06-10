import Image from "next/image";

export default function AboutMeAboutMe() {
  return (
    <div className="px-5 py-14 sm:px-10 sm:py-28 grid content-center">
      <h2>About me</h2>
      <p>Born and raised in Sandnes, the recently elected "most attractive city in Norway"</p>

      <div className="relative h-80 mb-14">
        <Image src="/assets/images/map.jpg" layout="fill" objectFit="cover" objectPosition="left" alt="" />
      </div>

      <p>Married to Malin, with whom I have two amazing boys, Theodor and Abel.</p>

      <div className="relative h-52">
        <Image src="/assets/images/malin.jpeg" layout="fill" objectFit="cover" alt="" />
      </div>

    </div>
  );
}