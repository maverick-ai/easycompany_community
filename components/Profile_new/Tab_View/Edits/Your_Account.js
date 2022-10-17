import classes from "./your_account.module.css";

export default function Your_Account() {
  return (
    <div className={classes.container}>
        <div className={classes.edit}>
            <img src="../images/Tag_View/Edits/Pencil.png" alt="" className={classes.pen} />
            <span className={classes.edit_word}>Edit Profile</span>
        </div>
        <div className={classes.account}>
            <img src="../images/Tag_View/Edits/People.png" alt="" className={classes.people} />
            <span className={classes.your_account}>Your Account</span>
        </div>
    </div>
  )
}
