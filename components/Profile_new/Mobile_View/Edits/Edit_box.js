import classes from "./edit_box.module.css"

export default function Edit_box() {
  return (
    <div className={classes.container}>
      <div className={classes.clock_box}>
        <img src="../images/Mobile_View/Edits/Clock.png" alt="" className={classes.Clock} />
        <span className={classes.activity_txt}>Activity</span>
      </div>
      <img src="../images/Mobile_View/Edits/Dots.png" alt="" className={classes.Dots} />
    </div>
  )
}
