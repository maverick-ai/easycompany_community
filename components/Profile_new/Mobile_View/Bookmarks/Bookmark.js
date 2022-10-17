import Card from "../Card/Card";
import classes from "./bookmark.module.css";
import Bookmark_box from "./Bookmark_box";

export default function Bookmark(props) {
    const bookmark = props.bookmark;
    console.log(bookmark);
    return (
        <>
            <div className={classes.bookmark}>
                <div className={classes.header}>Bookmarks</div>
                <Card>
                    {bookmark.map((data) =>
                        (<Bookmark_box bookmark={data} />))}
                </Card>
            </div>
        </>
    )
}