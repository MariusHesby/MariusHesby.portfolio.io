import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "./../components/layout/global/Head"
import Container from "../components/layout/global/Container"
import Footer from "../components/layout/global/Footer"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <Container>
        <Component {...pageProps} />
      </Container>
      <Footer />
    </>
  );
}

export default MyApp
