import ProfileImg from './../global/ProfileImg';
import Nav from '../global/Nav';

export default function IndexHeading() {
  return (
    <div className="h-screen px-5 sm:px-10 grid content-center relative">
      <ProfileImg />
      <h1>I create<br /><span>simple </span>and <span>solid</span><br /><span>websites</span><br />that work!</h1>
      <Nav />
    </div>
  );
} 