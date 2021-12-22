import styles from "./LogInForm.module.css";
import EmailField from "./Email";
import PasswordField from "./Password";

function LogInForm(props) {
  return (
    <div className={styles.containerForm}>
      <form className="form" style={{ textAlign: "center" }}>
        <EmailField EmailRef={props.EmailRef} />
        <div style={{ paddingTop: "30px" }}>
          <PasswordField
            LogInCorrect={props.LogInCorrect}
            PasswordRef={props.PasswordRef}
          />
        </div>
        <div style={{ paddingTop: "10px" }}>
          <button
            onClick={(event) => {
              event.preventDefault();
              props.performLogin();
            }}
            className={styles.buttonForm}
          >
            LOGIN
          </button>
          </div>
          <div style={{ paddingTop: "10px" }}>
          <h4 onClick={(event)=>{
            props.ClickOnRegisterLink();
          }} className={styles.RegisterLink}><u>Not Registered? Sign up</u></h4>
        </div>
      </form>
    </div>
  );
}

export default LogInForm;