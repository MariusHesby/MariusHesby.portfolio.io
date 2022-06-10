import { BriefcaseIcon } from '@heroicons/react/outline';

function ButtonMyWork() {
  return (
    <a className="button my-work">
      <BriefcaseIcon className="h-7 w-7 absolute top-3 left-3" />
      <span className="text-right font-gobold">My<br />work</span>
    </a>
  );
}

export default ButtonMyWork;