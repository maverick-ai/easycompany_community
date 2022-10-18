import classes from "./votes_box.module.css";

export default function Votes_box(props) {
  return (
    <div className={classes.box}>
        <div className={classes.time}>
            <div className={classes.header}>All Time</div>
            <div className={classes.up}>
                <div className={classes.count}>{props.up}</div>
                <div className={classes.word}>Up</div>
            </div>
            <div className={classes.down}>
                <div className={classes.count}>{props.down}</div>
                <div className={classes.word}>Down</div>
            </div>
        </div>
        <div className={classes.type}>
            <div className={classes.header}>
                By Type
            </div>
            <div className={classes.questions}>
                <div className={classes.count}>{props.questionsup}</div>
                <div className={classes.word}>Questions</div>
            </div>
            <div className={classes.answers}>
                <div className={classes.count}>{props.answersup}</div>
                <div className={classes.word}>Answers</div>
            </div>
            <div className={classes.questions}>
                <div className={classes.count}>{props.questionsdown}</div>
                <div className={classes.word}>Questions</div>
            </div>
            <div className={classes.answers}>
                <div className={classes.count}>{props.answersdown}</div>
                <div className={classes.word}>Answers</div>
            </div>
        </div>
        <div className={classes.months}>
            <div className={classes.header}>Month</div>
            <div className={classes.count}>{props.months}</div>
        </div>
        <div className={classes.days}>
            <div className={classes.header}>Days</div>
            <div className={classes.count}>{props.days}</div>
        </div>
        <img src="../images/Mobile_View/Wrapper/Dots2.png" alt="" className={classes.dots} />
        <img src="../images/Mobile_View/Points_badges/Star.png" alt="" className={classes.star} />
    </div>
  )
}
