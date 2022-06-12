import ProfileImg from '../../layout/global/ProfileImg';
import Nav from '../../layout/global/Nav';

export default function IndexHeading() {
  return (
    <div className="h-screen px-5 sm:px-10 grid content-center relative">
      <ProfileImg />
      <h1>I create<br /><span>fast, </span><span>simple </span>and<span><br />solid </span>websites<br />- that work!</h1>
      <Nav />
    </div>
  );
} 