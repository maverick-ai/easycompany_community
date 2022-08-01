import styles from "./LogInForm.module.scss";
import EmailField from "./Email";
import PasswordField from "./Password";
import { useRouter } from "next/router";

function LogInForm(props) {
  const router = useRouter();
  return (
    <div className={styles.containerForm}>
      <form className="form">
        <p>Email Address</p>
        <EmailField EmailRef={props.EmailRef} />
        <div style={{ paddingTop: "25px" }}>
          <p>Password</p>
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
            forgot password ?
          </button>
        </div>
        <div style={{ paddingTop: "25px", paddingBottom:"20px" }}>
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
