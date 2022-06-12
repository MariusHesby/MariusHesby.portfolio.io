import type { NextPage } from 'next'
import IndexHeading from '../components/content/index/IndexHeading';
import IndexGif from '../components/content/index/IndexGif';
import IndexProjects from '../components/content/index/IndexProjects';


const Home: NextPage = () => {
  return (
    <>
      <IndexHeading />
      <IndexGif />
      <IndexProjects />
    </>
  )
}

export default Home
