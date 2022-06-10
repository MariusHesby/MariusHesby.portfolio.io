import { UserIcon, BriefcaseIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from "next/router";

function Nav() {

  const router = useRouter();

  return (
    <nav className="flex justify-center gap-10 absolute bottom-10 md:bottom-24 left-1/2 -translate-x-1/2 w-full">

      <Link href="/" passHref>
        <a className={router.pathname == "/" ? "button my-work active" : "button my-work"}>
          <BriefcaseIcon className="h-7 w-7 absolute top-3 left-3" />
          <span className="text-right font-gobold">My<br />work</span>
        </a>
      </Link>

      <Link href="/about-me" passHref>
        <a className={router.pathname == "/about-me" ? "button about-me active" : "button about-me"}>
          <UserIcon className="h-7 w-7 absolute bottom-4 right-3" />
          <span className="text-left font-gobold">About<br />me</span>
        </a>
      </Link>

    </nav>
  );
}

export default Nav;
