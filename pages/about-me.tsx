import type { NextPage } from 'next'
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
