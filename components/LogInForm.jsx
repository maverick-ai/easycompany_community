import styles from "./LogInForm.module.css";
import EmailField from "./Email";
import PasswordField from "./Password";


function LogInForm(props) {
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
        </div>
        <div style={{ paddingTop: "25px" }}>
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