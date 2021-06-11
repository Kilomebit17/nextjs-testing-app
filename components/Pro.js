import s from "../styles/ProsSaying.module.scss";
import Image from "next/image";

const Pro = ({ img, nickname, description }) => {
  return (
    <div className={s.user}>
      <Image {...img} width={76} height={76} />
      <span className={s.nickname}>{nickname}</span>
      <div className={s.description}>{description}</div>
    </div>
  );
};

export default Pro;
