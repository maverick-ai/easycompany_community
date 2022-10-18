import Card from "../Card/Card";
import classes from "./votes.module.css";
import Votes_box from "./Votes_box";

export default function Votes(props) {
    return (
        <>
        <div className={classes.votes}>
            <div className={classes.header}>Votes Cast</div>
            <Card>
                <Votes_box up={props.up} down={props.down} questionsup={props.questionsup} answersup={props.answersup} questionsdown={props.questionsdown} answersdown={props.answersdown} months={props.months} days={props.days}/>
            </Card>
        </div>
        </>
    )
}