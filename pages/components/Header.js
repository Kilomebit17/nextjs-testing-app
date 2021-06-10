import Image from 'next/image'
import style from '../../styles/Header.module.scss'

const Header = () => {
    return (
        <header className={style.header}>
            <div className={'container'}>
                <div className={style.header__inner}>
                    <Image
                        src="/media/Logo.png"
                        alt="Picture of the author"
                        width={30}
                        height={20}
                    />
                    <h1>Test Task</h1>
                </div>
            </div>
        </header>
    );
};

export default Header
