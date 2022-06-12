import type { NextPage } from 'next'
import AboutMeHeading from './../components/content/about-me/AboutMeHeading'
import AboutMeContactform from './../components/content/about-me/AboutMeContactform';
import AboutMeImageSection from './../components/content/about-me/AboutMeImageSection';
import AboutMeAboutMe from './../components/content/about-me/AboutMeAboutMe';

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
