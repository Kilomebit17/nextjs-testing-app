import React from "react";
import style from "../styles/CryptoItem.module.scss";
import Image from "next/image";
const CryptoItem = ({ name, price, description, percent }) => {
  const perc = percent;
  return (
    <React.Fragment>
      <div className={style.crypto}>
        <span className={style.crypto__title}>
          {!name ? "name is not found" : name}
        </span>
        <div className={style.crypto__price}>
          <h1>${!Number.isFinite(price) ? "data is not found" : price}</h1>
          <span>
            {perc < 0 ? (
              <p className={style.under_zero}>{perc.toFixed(2)}</p>
            ) : (
              <p className={style.upper__zero}>+{perc.toFixed(2)}</p>
            )}
          </span>
          <div className={style.upanddown}></div>
          <Image
            src={perc < 0 ? "/media/down.png" : "/media/up.png"}
            alt="Picture of the author"
            width={12}
            height={12}
          />
        </div>
      </div>
      <div className={style.description}>{description || ""}</div>
    </React.Fragment>
  );
};
export default CryptoItem;
