import "../styles/page.module.css";
import Head from "next/head";
import Script from "next/script";

import Layout from "../components/Layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}