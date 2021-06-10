import style from "../../styles/CryptoSection.module.scss";
import Image from "next/image";
import CryptoItem from "./CryptoItem";

const CryptoSection = ({ data }) => {
  const cryptoItemNodeList = data.map(
    ({ id, name, price, description, percent }) => {
      return (
        <CryptoItem
          key={id}
          name={name}
          price={price}
          description={description}
          percent={percent}
        />
      );
    }
  );
  return (
    <div className={style.main}>
      <div className={style.main__andyInfo}>
        <div className={style.andyLogo}>
          <Image
            src="/media/Andy.png"
            alt="Picture of the author"
            width={115}
            height={115}
          />

          <div className={style.andyLogo__title}>
            <h1>Andy</h1>
            <span>Head Pf UX Design</span>
          </div>
        </div>

        <div className={style.description}>
          “The Style Of This Test Task Matches The Style That You Will Be Making
          Real Job In.”
        </div>
      </div>

      <div className={style.main__cryptoInfo}>
        <h1>Be Persistent & Attentive To Details</h1>
        <div className={style.cryptoblock}>
          <div className={style.cryptoBlockLeft}>
            <h2 className={style.fonts}>Fonts & Colors</h2>
            <span className={style.metter}>Metter</span>
            <div className={style.ethereum}>{cryptoItemNodeList[1]}</div>
          </div>
          <div className={style.cryptoBlockRight}>
            <div className={style.bitcoin}>{cryptoItemNodeList[0]}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CryptoSection;
