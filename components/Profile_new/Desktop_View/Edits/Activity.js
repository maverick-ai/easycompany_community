import classes from "./activity.module.css";

export default function Activity() {
  return (
    <div className={classes.container}>
        <img src="../images/Edits/Clock.png" alt="" className={classes.clock} />
        <span className={classes.activity_word}>Activity</span>
    </div>
  )
}
