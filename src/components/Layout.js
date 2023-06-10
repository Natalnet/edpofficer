import { Inter } from "next/font/google";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="favicon" href="../images/favicon.ico" />
        <title>EdpOffice</title>
      </Head>
      <Navbar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
}
