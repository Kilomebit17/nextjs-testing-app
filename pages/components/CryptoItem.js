import style from "../../styles/CryptoItem.module.scss";

const CryptoItem = ({name, price, description, percent}) => {
    return (
        <div className={style.crypto}>
            <span className={style.crypto__title}>{!name ? 'name is not found' : name}</span>
            <div className={style.crypto__price}>
                <h1>${!price ? 'data is not found' : price}</h1>
                <span>{!percent ? 'percent is not found': percent}</span>
            </div>
            <div className={style.description}>{!description ? 'description is not found' : description}</div>
        </div>
    );
}
export default CryptoItem;
