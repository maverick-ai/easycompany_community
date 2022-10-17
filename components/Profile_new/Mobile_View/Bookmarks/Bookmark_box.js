import classes from "./bookmark_box.module.css";

export default function Bookmark_box(props) {
    return (
        <div className={classes.box}>
            <div className={classes.sub_box}>
                <div className={classes.rectangle}>
                    <div className={classes.pink_box}></div>
                    <span className={classes.num}>{props.index}</span>
                </div>
                <div className={classes.bookmarks}>{props.bookmark}</div>
            </div>
            <img src="../images/Mobile_View/Bookmarks/tags.png" alt="" className={classes.tag} />
            
        </div>
    )
}
