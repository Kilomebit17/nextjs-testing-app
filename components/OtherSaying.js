import Comments from "./Comments";
import { useMemo } from "react";
import s from "../styles/OtherSaying.module.scss";
const OtherSaying = () => {
  const comments = useMemo(
    () =>
      [
        {
          imgAvatar: {
            src: "/media/Avatar2.png",
            alt: "Picture of the author",
          },
          commentTxt:
            "Holy cow, developers rock, but I missed the 5 stars button.",
          commentNickName: "Vasiliy Igorsky",
          time: "14:30",
          imgStats: {
            src: "/media/Rating4stars.png",
            alt: "Picture of the author",
          },
        },
        {
          imgAvatar: {
            src: "/media/Avatar1.png",
            alt: "Picture of the author",
          },
          commentTxt:
            "Holy cow, developers rock, but I missed the 5 stars button.",
          commentNickName: "John Kennedy",
          time: "05:20",
          imgStats: {
            src: "/media/Rating5stars.png",
            alt: "Picture of the author",
          },
        },
      ].map((v) => <Comments {...v} />),
    []
  );
  return (
    <div className={s.main}>
      <h1 className={s.title}>What Other Coders Are Saying...</h1>
      {comments}
    </div>
  );
};

export default OtherSaying;
