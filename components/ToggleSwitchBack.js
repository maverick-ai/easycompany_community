import React from "react";
import styles from "./ToggleSwitch.module.scss";
import Link from "next/link";

const ToggleSwitchToSignUp = () => {
  return (
    <div className={styles.container} style={{ transform: "rotate(-90deg)" }}>
      <div className={styles.toggle_switch}>
        <input type="checkbox" className={styles.checkbox} />
        <label className={styles.label}>
          <span className={styles.inner} />
          <Link style={{ textDecoration: "none" }} href={"/login"}>
            <span className={styles.switch}>
              <div style={{ marginTop: "100px", transform: "rotate(90deg)" }}>
                <span className={styles.RegisterLink}>Log In</span>
              </div>
            </span>
          </Link>
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitchToSignUp;
