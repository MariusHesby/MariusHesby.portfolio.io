import ProfileImg from '../global/ProfileImg';
import Nav from '../global/Nav';

export default function AboutMeHeading() {
  return (
    // <div className="px-5 sm:px-10 grid content-center">
    <div className="h-screen px-5 sm:px-10 grid content-center relative">
      <ProfileImg />
      <div className="h-screen flex flex-col justify-center">
        <h1>My name is<br /><span>Marius</span><br />Rostøl Hesby</h1>
        <Nav />
      </div>
    </div >
  );
}





