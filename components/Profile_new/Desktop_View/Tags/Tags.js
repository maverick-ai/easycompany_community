import Card from "../Card/Card";
import classes from "./tags.module.css";
import Tag_box from "./Tag_box";

export default function Tags() {
  return (
    <div className={classes.tags}>
        <div className={classes.header}>Tags</div>
        <Card>
            <Tag_box place="Mangalore" score="24"/>
            <Tag_box place="Mangalore" score="24"/>
            <Tag_box place="Mangalore" score="24"/>
            <Tag_box place="Mangalore" score="24"/>
        </Card>
    </div>
  )
}
