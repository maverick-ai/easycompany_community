import classes from "./bookmark_box.module.css";

export default function Bookmark_box(props) {
  return (
    <div className={classes.box}>
        <div className={classes.questions}>{props.bookmark}</div>
        <img src="../images/Bookmark/Bookmark.png" alt="" className={classes.tag} />
    </div>
  )
}
