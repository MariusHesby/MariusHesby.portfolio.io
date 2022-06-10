import Image from 'next/image';
import Link from 'next/link';

function ProfileImg() {
  return (
    <Link href="/" passHref>
      <a className='flex items-center gap-4 sm:gap-6 absolute top-10 w-full'>
        <div className="ml-5 h-16 w-16 sm:h-20 sm:w-20 border-2 border-black rounded-full overflow-hidden">
          <Image src="/assets/images/profile-img-small.jpg" width="2500px" height="2501px" alt="back home" priority />
        </div>
        <span className="font-bold sm:text-lg text-webGray">Marius Rostøl Hesby</span>
      </a>
    </Link>
  );
}

export default ProfileImg;

{/* <Link href="/" passHref>
  <a className={router.pathname == "/" ? "button my-work active" : "button my-work"}>
    <BriefcaseIcon className="h-7 w-7 absolute top-3 left-3" />
    <span className="text-right font-gobold">My<br />work</span>
  </a>
</Link>; */}