import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "font-awesome/css/font-awesome.css";
import MainNavbar from "../components/navbar";
import Head from 'next/head';
import { CookiesProvider } from "react-cookie";


function MyApp({ Component, pageProps }) {
  return (
    <CookiesProvider>

    <div>
      <Head>
      <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-MXX23MB');`}}>
      </script>
      <meta charSet="UTF-8"></meta>
      </Head>
      <body>
      <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXX"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}>
      </noscript>
      <MainNavbar />
      <Component {...pageProps} />
      </body>
    </div>
    </CookiesProvider>
  );
}

export default MyApp;