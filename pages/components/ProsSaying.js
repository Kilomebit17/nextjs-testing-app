import s from '../../styles/ProsSaying.module.scss'
import Image from "next/image";

const ProsSaying = () => {
    return (
        <div className={s.main}>
            <h1 className={s.main__title}>
                What Pros Are Saying...
            </h1>
            <div className={s.main__users}>
                <div className={s.user}>

                    <Image src="/media/Nia.png" alt="Picture of the author" width={76} height={76}/>
                    <span className={s.nickname}>Nia</span>

                    <div className={s.description}>
                        “This task can be perfect for students from FIT”
                    </div>
                </div>
                <div className={s.user}>

                    <Image src="/media/Abigale.png" alt="Picture of the author" width={76} height={76}/>
                    <span className={s.nickname}>Abigale</span>

                    <div className={s.description}>
                        “I am so sexy, that men are doing test tasks for me for free.”
                    </div>
                </div>
                <div className={s.user}>

                    <Image src="/media/Fedya.png" alt="Picture of the author" width={76} height={76}/>
                    <span className={s.nickname}>Fedya</span>

                    <div className={s.description}>
                        “Kuku Epta. EZ Task.”
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProsSaying;
