import styles from "./LogInForm.module.scss";
import EmailField from "./Email";
import PasswordField from "./Password";
import { useRouter } from "next/router";

function LogInForm(props) {
  const router = useRouter();
  return (
    <div className={styles.containerForm}>
      <form className="form">
        <p className={styles.emailLabel}>Email Address</p>
        <EmailField EmailRef={props.EmailRef} />
        <div style={{ paddingTop: "25px" }}>
          <p className={styles.emailLabel}>Password</p>
          <PasswordField
            LogInCorrect={props.LogInCorrect}
            PasswordRef={props.PasswordRef}
          />
          <button
            onClick={() => {
              router.push("/forgotpassword");
            }}
            className={styles.forgot}
          >
            Forgot Password ?
          </button>
        </div>
        <div style={{ paddingTop: "25px", paddingBottom:"10px", textAlign: 'center' }}>
          <button
            onClick={(event) => {
              event.preventDefault();
              props.performLogin();
            }}
            className={styles.buttonForm}
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  );
}

export default LogInForm;
