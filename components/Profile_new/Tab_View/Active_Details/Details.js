import Edit from "../Edits/Edit";
import Profile_picture from "../Profile_Picture/Profile_picture";
import classes from "./details.module.css";
export default function Details(props) {
    return (
        <>
            <div className={classes.container}>
                <Edit/>
                <img src="../images/Tag_View/Active_details/bag.png" alt="" className={classes.bag} />
                <Profile_picture/>
                <div className={classes.username}>
                    {props.username}
                </div>
                <div className={classes.active_details}>
                    <div className={classes.wrapper}>
                        <div className={classes.details}>
                            <div className={classes.box}>
                                <img src="../images/Tag_View/Active_details/last_seen.png" alt="" className={classes.last_seen} />
                            </div>
                            <span className={classes.last_seen_details}>Last seen this week</span>
                        </div>
                        <div className={classes.details}>
                            <img src="../images/Tag_View/Active_details/Visited.png" alt="" className={classes.visited} />
                            <span className={classes.visited_details}>Visited 5 days,1 consecutive</span>
                        </div>
                        <div className={classes.details}>
                            <img src="../images/Tag_View/Active_details/Membership.png" alt="" className={classes.membership} />
                            <span className={classes.membership_details}>Member since {props.date}</span>
                        </div>
                    </div>
                </div>
                <img src="../images/Tag_View/Active_details/Slanted_bar1.png" alt="" className={classes.slanted_bar1} />
                <img src="../images/Tag_View/Active_details/Slanted_bar2.png" alt="" className={classes.slanted_bar2} />
                <img src="../images/Tag_View/Active_details/Star.png" alt="" className={classes.star} />
            </div>
        </>
    )
}
