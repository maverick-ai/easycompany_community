import Card from "../Card/Card";
import classes from "./reputation.module.css";
import Reputation_box from "./Reputation_box";

export default function Reputation(props) {
    return (
        <>
        <div className={classes.reputation}>
            <div className={classes.header}>Reputation</div>
            <Card>
                <Reputation_box scores={props.scores} months={props.months}/>
            </Card>
        </div>
        </>
    )
}