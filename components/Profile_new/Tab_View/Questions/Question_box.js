import classes from "./question_box.module.css";

export default function Question_box(props) {
    return (
        <div className={classes.box}>
            <div className={classes.sub_box}>
                <div className={classes.rectangle}>
                    <div className={classes.pink_box}></div>
                    <span className={classes.num}>{props.index}</span>
                </div>
                <div className={classes.questions}>{props.question}</div>
            </div>
            <div className={classes.date}>{props.date}</div>
        </div>
    )
}
