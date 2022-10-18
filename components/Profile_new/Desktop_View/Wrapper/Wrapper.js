import classes from "./wrapper.module.css";
import Answer from '../Answer/Answer';
import Questions from "../Questions/Questions";
import Tags from "../Tags/Tags";
import Bookmark from "../Bookmarks/Bookmark";
import Votes from "../Votes_Cast/Votes";
import Reputation from "../Reputation/Reputation";

export default function Wrapper(props) {
  const data= props.data;
  let currentdate= new Date();
  let previousdate = data.data.date_joined;
  let prevdate = new Date(`${previousdate.slice(5,7)}/${previousdate.slice(8,10)}/${previousdate.slice(0,4)}`);
  let timeDiff = Math.abs(currentdate.getTime() - prevdate.getTime());
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return (
    <div className={classes.wrapper}>
        <Answer answers={data.data.solutions}/>
        <Questions questions={data.data.posts}/>
        <Tags/>
        <Reputation scores={data.data.stats.scores} months={Math.floor(diffDays/30)}/>
        <Bookmark bookmark={data.data.stats.bookmarks}/>
        <Votes up={data.data.stats.details.up_votes_ques+data.data.stats.details.up_votes_ans} down={data.data.stats.details.down_votes_ques+data.data.stats.details.down_votes_ans} questionsup={data.data.stats.details.up_votes_ques} answersup={data.data.stats.details.up_votes_ans} answersdown={data.data.stats.details.down_votes_ans} questionsdown={data.data.stats.details.down_votes_ques}days={diffDays} months={Math.floor(diffDays/30)}/>
        <img src="../images/Wrapper/globe.png" alt="" className={classes.globe} />
        <img src="../images/Wrapper/bar.png" alt="" className={classes.bar1} />
        <img src="../images/Wrapper/bar.png" alt="" className={classes.bar2} />
        <img src="../images/Wrapper/inverted_1.png" alt="" className={classes.slanted_bar1} />
        <img src="../images/Wrapper/inverted_2.png" alt="" className={classes.slanted_bar2} />
        <img src="../images/Points_Badges/Star.png" alt="" className={classes.star1} />
        <img src="../images/Points_Badges/Star.png" alt="" className={classes.star2} />
        <img src="../images/Points_Badges/Star.png" alt="" className={classes.star3} />
    </div>
  )
}
