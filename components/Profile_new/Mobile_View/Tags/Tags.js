import Card from "../Card/Card";
import classes from "./tags.module.css";
import Tags_box from "./Tags_box";

export default function Tags() {
    const Tags=[
        {
         Tags:"Mangalore",
         score:"24"
        },
        {
         Tags:"India",
         score:"24"
        },
        {
         Tags:"Karnataka",
         score:"24"
        },
        {
         Tags:"Kerala",
         score:"24"
        },
]
    return (
        <>
        <div className={classes.tags}>
            <div className={classes.header}>Tags</div>
            <Card>
                {Tags.map((data,idx) =>
                    ( <Tags_box Tags={data.Tags} score={data.score}/>))}
            </Card>
        </div>
        </>
    )
}
