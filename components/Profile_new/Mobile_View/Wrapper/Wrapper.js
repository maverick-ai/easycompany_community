import classes from "./wrapper.module.css";
import Answers from '../Answer/Answers';
import Question from "../Question/Question";
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
        <Answers answers={data.data.solutions}/>
        <Question questions={data.data.posts}/>
        <Tags/>
        <Reputation scores={data.data.stats.scores} months={Math.floor(diffDays/30)}/>
        <Bookmark bookmark={data.data.stats.bookmarks}/>
        <Votes up={data.data.stats.details.up_votes_ques+data.data.stats.details.up_votes_ans} down={data.data.stats.details.down_votes_ques+data.data.stats.details.down_votes_ans} questionsup={data.data.stats.details.up_votes_ques} answersup={data.data.stats.details.up_votes_ans} answersdown={data.data.stats.details.down_votes_ans} questionsdown={data.data.stats.details.down_votes_ques}days={diffDays} months={Math.floor(diffDays/30)}/>
        <img src="../images/Mobile_view/Wrapper/bag.png" alt="" className={classes.bag} />
        <img src="../images/Mobile_view/Points_Badges/Star.png" alt="" className={classes.star1} />
        <img src="../images/Mobile_view/Points_Badges/Star.png" alt="" className={classes.star2} />
        <img src="../images/Mobile_view/Points_Badges/Star.png" alt="" className={classes.star3} />
        <img src="../images/Mobile_view/Points_Badges/Star.png" alt="" className={classes.star4} />
        <img src="../images/Mobile_view/Points_Badges/Star.png" alt="" className={classes.star5} />
        <img src="../images/Mobile_view/Wrapper/Dots.png" alt="" className={classes.dots1} />
        <img src="../images/Mobile_view/Wrapper/Dots2.png" alt="" className={classes.dots2} />
        <img src="../images/Mobile_view/Wrapper/Line3.png" alt="" className={classes.line1} />
        <img src="../images/Mobile_view/Wrapper/Line4.png" alt="" className={classes.line2} />
        <img src="../images/Mobile_view/Wrapper/Bar1.png" alt="" className={classes.bar1} />
        <img src="../images/Mobile_view/Wrapper/Bar2.png" alt="" className={classes.bar2} />
        <img src="../images/Mobile_view/Wrapper/Bar1.png" alt="" className={classes.bar3} />
        <img src="../images/Mobile_view/Wrapper/Bar2.png" alt="" className={classes.bar4} />
        <img src="../images/Mobile_view/Wrapper/Bar3.png" alt="" className={classes.bar5} />
        <img src="../images/Mobile_view/Wrapper/Bar4.png" alt="" className={classes.bar6} />
        </div>
  )
}
