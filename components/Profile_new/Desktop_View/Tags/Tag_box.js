import classes from "./tag_box.module.css";

export default function Tag_box(props) {
    return (
        <div className={classes.box}>
            <div className={classes.place}>{props.place}</div>
            <div className={classes.score}>
                <div className={classes.score_wrd}>SCORE</div>
                <div className={classes.score_value}>{props.score}</div>
            </div>
        </div>
    )
}