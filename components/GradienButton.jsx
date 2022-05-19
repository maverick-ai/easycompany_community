// import styles from "../../styles/Utils.module.css";
import styles from "../styles/utils.module.css";

export default function GradientBtn({ children }) {
  return (
    <div className={styles.btn}>
      <span>{children} </span>
    </div>
  );
}
