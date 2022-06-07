import Image from "next/image";

export default function AboutMeAboutMe() {
  return (
    <div className="bg-blue-500 px-5 sm:px-10 grid content-center py-14">
      <h2>About me</h2>
      <p>Born and raised in Sandnes, the recently elected "most attractive city in Norway"</p>

      <Image className="object-cover" src="/assets/images/cv-marius-hesby.jpg" width="500px" height="500px" layout="responsive" alt="" />

      <p>Married to Malin, with whom I have two amazing boys, Theodor and Abel.</p>
      {/* <Image className="object-cover" src="/assets/images/cv-marius-hesby.jpg" width="500px" height="500px" alt="" /> */}
    </div>
  );
}