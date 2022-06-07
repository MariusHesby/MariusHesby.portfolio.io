import ProfileImg from './../global/ProfileImg';
import Link from "next/link";
import { HomeIcon, BellIcon } from '@heroicons/react/outline';

export default function IndexHeading() {
  return (
    <div className="bg-red-100 px-5 sm:px-10 grid content-center">
      <ProfileImg />
      <div className="">
        <h1>I create <span>simple</span><br />and <span>solid </span><span>websites</span><br />-that work!</h1>
        <nav className="flex justify-center md:justify-end gap-5 md:gap-10">
          <Link href="#mywork">
            <button className="my-work">
              <HomeIcon className="h-7 w-7" />
              <span className="text-right font-gobold">My<br />work</span>
            </button>
          </Link>
          <Link href="/about-me">
            <button className="about-me">
              <BellIcon className="h-7 w-7" />
              <span className="text-right font-gobold">About me</span>
            </button>
          </Link>
        </nav>
      </div>
    </div>
  );
} 