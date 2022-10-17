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
            <img src="../images/Mobile_View/Designs/Star.png" alt="" className={classes.star} />
        </div>
            <img src="../images/Mobile_View/Designs/Bar4.png" alt="" className={classes.bar2} />
            <img src="../images/Mobile_View/Designs/Bar3.png" alt="" className={classes.bar1} />
        </>
    )
}