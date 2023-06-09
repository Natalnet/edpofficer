import { Inter } from "next/font/google";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";
import Script from "next/script";

import Navbar_teste from "./Navbar_teste";
import Footer_teste from "./Footer_teste";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="favicon" href="../images/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
        <title>EdpOffice</title>
      </Head>
      {/* <Navbar/> */}
      <Navbar_teste/>
      <main className="main-container">{children}</main>
      {/* <Footer/> */}
      <Footer_teste />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
    </>
  );
}
