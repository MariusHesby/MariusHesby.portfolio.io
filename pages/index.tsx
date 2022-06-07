import type { NextPage } from 'next'
import IndexHeading from '../components/layout/index/IndexHeading';
import IndexGif from '../components/layout/index/IndexGif';
import IndexProjects from '../components/layout/index/IndexProjects';


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
