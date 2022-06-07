import type { NextPage } from 'next'
import Image from 'next/image'
// import ProfileImg from '../components/layout/global/ProfileImg';
// import {
//   HomeIcon,
//   BellIcon
// } from '@heroicons/react/outline';

// import Link from 'next/link';
// import Contactform from '../components/content/ContactForm';
import AboutMeHeading from './../components/layout/about-me/AboutMeHeading';
import AboutMeContactform from './../components/layout/about-me/AboutMeContactform';
import AboutMeImageSection from './../components/layout/about-me/AboutMeImageSection';
import AboutMeAboutMe from './../components/layout/about-me/AboutMeAboutMe';




const Home: NextPage = () => {
  return (
    <>
      <AboutMeHeading />
      <AboutMeImageSection />
      <AboutMeContactform />
      <AboutMeAboutMe />


    </>
  )
}

export default Home
