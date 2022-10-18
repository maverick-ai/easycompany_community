import Card from "../Card/Card";
import classes from "./answer.module.css";
import Answer_box from "./Answer_box";

export default function Answer(props) {
    const answers= props.answers;
    return (
        <>
        <div className={classes.answer}>
            <div className={classes.header}>Answers</div>
            <Card>
                {answers.map((data,idx) => {
                    let arrdata= Object.values(data)
                   return ( <Answer_box answer={Object.values(arrdata[1])} date={arrdata[2].slice(0,9)} index={idx+1}/>)})}
            </Card>
        </div>
        </>
    )
}
