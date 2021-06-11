import Image from "next/image";
import s from "../styles/OtherSaying.module.scss";

const Comments = ({
  imgAvatar,
  commentTxt,
  commentNickName,
  time,
  imgStats,
}) => {
  return (
    <div className={s.comments}>
      <div className={s.comment_u}>
        <Image {...imgAvatar} width={50} height={50} />
        <div className={s.comment}>
          <div className={s.comment__txt}>{commentTxt}</div>
          <div className={s.comment__nickname}>{commentNickName}</div>
        </div>
      </div>
      <div className={s.assessment}>
        <div className={s.time}>{time}</div>
        <Image {...imgStats} width={80} height={16} />
      </div>
    </div>
  );
};

export default Comments;
