import styles from "./MobilePhoneMockup.module.css";

function MobilPhoneMockup(props) {
  return <div className={`${styles.phoneMockupDiv} ${props.center===true?"mx-auto":""}`}>{props.children}</div>;
}
export default MobilPhoneMockup;