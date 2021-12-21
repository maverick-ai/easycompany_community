import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "font-awesome/css/font-awesome.css";
import MainNavbar from "../components/navbar";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
      <meta charSet="UTF-8"></meta>
      </Head>
      <MainNavbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;