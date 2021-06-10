import s from "../styles/OtherSaying.module.scss";
import Image from "next/image";

const OtherSaying = () => {
  return (
    <div className={s.main}>
      <h1 className={s.title}>What Other Coders Are Saying...</h1>

      <div className={s.comments}>
        <div className={s.comment_u}>
          <Image
            src="/media/Avatar1.png"
            alt="Picture of the author"
            width={50}
            height={50}
          />
          <div className={s.comment}>
            <div className={s.comment__txt}>
              Wow, this test task is absolutely amazing! Loved it!
            </div>
            <div className={s.comment__nickname}>John Kennedy</div>
          </div>
        </div>
        <div className={s.assessment}>
          <div className={s.time}>05:20</div>
          <Image
            src="/media/Rating5stars.png"
            alt="Picture of the author"
            width={80}
            height={16}
          />
        </div>
      </div>
      <div className={s.comments}>
        <div className={s.comment_u}>
          <Image
            src="/media/Avatar2.png"
            alt="Picture of the author"
            width={50}
            height={50}
          />
          <div className={s.comment}>
            <div className={s.comment__txt}>
              Holy cow, developers rock, but I missed the 5 stars button.
            </div>
            <div className={s.comment__nickname}>Vasiliy Igorsky</div>
          </div>
        </div>
        <div className={s.assessment}>
          <div className={s.time}>14:30</div>
          <Image
            src="/media/Rating4stars.png"
            alt="Picture of the author"
            width={80}
            height={16}
          />
        </div>
      </div>
    </div>
  );
};

export default OtherSaying;
