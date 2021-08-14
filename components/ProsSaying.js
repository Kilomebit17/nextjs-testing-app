import { useMemo } from "react";
import s from "../styles/ProsSaying.module.scss";
import Pro from "./Pro";

const ProsSaying = () => {
  const pros = useMemo(
    () =>
      [
        {
          img: { src: "/media/Nia.png", alt: "Picture of the author" },
          nickname: "Nia",
          description: "“This task can be perfect for students from FIT”",
        },
        {
          img: { src: "/media/Abigale.png", alt: "Picture of the author" },
          nickname: "Abigale",
          description:
            "“I am so sexy, that men are doing  test tasks for me for free.”",
        },
        {
          img: { src: "/media/Fedya.png", alt: "Picture of the author" },
          nickname: "Fedya",
          description: "“some clever text”",
        },
      ].map((v) => <Pro {...v} />),
    []
  );
  return (
    <div className={s.main}>
      <h1 className={s.main__title}>What Pros Are Saying...</h1>
      <div className={s.main__users}>{pros}</div>
    </div>
  );
};

export default ProsSaying;
