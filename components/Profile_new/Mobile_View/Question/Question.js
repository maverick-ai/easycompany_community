import Card from "../Card/Card";
import classes from "./question.module.css";
import Question_box from "./Question_box";

export default function Question(props) {
    const questions = props.questions;
    const question = [];
    question.push(questions[0])
    question.push(questions[1])
    question.push(questions[2])
    question.push(questions[3])
    
    return (
        <>
        <div className={classes.question}>
            <div className={classes.header}>Questions</div>
            <Card>
                {question.map((data,idx) =>{
                let arrData = Object.values(data);
                   return ( <Question_box question={arrData[1]} date={arrData[2].slice(0, 9)} index={idx + 1} />)})}
                   <button className={classes.view}>
                        View All
                    </button>
            </Card>
        </div>
        </>
    )
}
