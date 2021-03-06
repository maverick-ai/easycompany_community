import styles from "./mobileSearch.module.scss";

function MobileCard() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.dream}>
                    <h2 className={styles.dreamh2}>My dream trip</h2>
                </div>
                <i className={styles.fa_arrow_right}></i>
                <div className={styles.pic}></div>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    );
}

export default MobileCard;
