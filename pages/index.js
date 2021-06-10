import style from "../styles/Index.module.scss";
import Header from "./components/Header";
import CryptoSection from "./components/CryptoSection";
import ProsSaying from "./components/ProsSaying";
import OtherSaying from "./components/OtherSaying";
import Footer from "./components/Footer";
import Head from "next/head";

export default function Index(data) {
  return (
      <div>
        <Head>
          <title>Crypto</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header />
        <div className='container forfooter'>
          <div className={style.under__header}>
            <span>Do The Task</span>
            <span>And Have Fun</span>
          </div>

          <CryptoSection data={data}/>
          <div className={'content'}>
            <ProsSaying/>
            <OtherSaying />
          </div>
        </div>
        <Footer />
      </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(
    `https://nextjs-oldv2a5z5-kilomebit17.vercel.app/api/crypto`
  );
  const crypto = await res.json();
    console.log(crypto)
  return {
    props: { crypto }, // will be passed to the page component as props
  };
}
