import React, { useEffect, useState } from "react";
import style from "../styles/Index.module.scss";
import Header from "../components/Header";
import CryptoSection from "../components/CryptoSection";
import ProsSaying from "../components/ProsSaying";
import OtherSaying from "../components/OtherSaying";
import Footer from "../components/Footer";
import { apiGetCurrency } from "../actions/currency";

export default function Index({ data: _data }) {
  const [data, setData] = useState(_data);
  const [isRefreshed, setIsRefreshed] = useState(true);
  useEffect(() => {
    if (isRefreshed) {
      return;
    }

    (async () => {
      const currentData = await apiGetCurrency();
      setIsRefreshed(true);
      if (currentData) {
        setData(currentData);
      }
    })();
  }, [isRefreshed]);

  const refreshData = (isRefreshed) => setIsRefreshed(!isRefreshed);
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div className={style.under__header}>
          <span>Do The Task</span>
          <span>And Have Fun</span>
        </div>

        <CryptoSection data={data} refreshData={refreshData} />
        <div className="content">
          <ProsSaying />
          <OtherSaying />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
export async function getStaticProps() {
  const data = await apiGetCurrency();
  return {
    props: { data },
  };
}
