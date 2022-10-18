import classes from "./your_account.module.css";

export default function Your_Account() {
  return (
    <div className={classes.container}>
        <div className={classes.edit}>
            <img src="../images/Edits/Pen.png" alt="" className={classes.pen} />
            <span className={classes.edit_word}>Edit Profile</span>
        </div>
        <div className={classes.account}>
            <img src="../images/Edits/People.png" alt="" className={classes.people} />
            <span className={classes.your_account}>Your Account</span>
        </div>
    </div>
  )
}
