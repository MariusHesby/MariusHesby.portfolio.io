import ProfileImg from './../global/ProfileImg';
import Nav from '../global/Nav';

export default function IndexHeading() {
  return (
    <div className="h-screen px-5 sm:px-10 grid content-center relative">
      <ProfileImg />
      <h1>I create<br /><span>fast, </span><span>simple </span>and<span><br />solid </span>websites<br />- that work!</h1>
      <p className="mx-auto">Don't forget to check out my <a className="text-blue-700 hover:scale-125" href="https://github.com/MariusHesby">GitHub page</a></p>
      <Nav />
    </div>
  );
} 