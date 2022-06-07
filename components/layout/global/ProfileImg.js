import Image from 'next/image';

function ProfileImg() {
  return (
    <div className='flex items-center gap-4 sm:gap-6 absolute top-10 left-10'>
      <div className="h-16 w-16 sm:h-20 sm:w-20 border-2 border-black rounded-full overflow-hidden">
        <Image src="/assets/images/profile-img-small.jpg" width="2500px" height="2501px" alt="" />
      </div>
      <span className="font-bold sm:text-lg text-webGray">Marius Rostøl Hesby</span>
    </div>
  );
}

export default ProfileImg;