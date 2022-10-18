import Profile_picture from "../Profile_Picture/Profile_picture";
import classes from "./details.module.css";
export default function Details(props) {
    return (
        <>
            <div className={classes.container}>
                <img src="../images/Active_details/bag.png" alt="" className={classes.bag} />
                <Profile_picture/>
                <div className={classes.username}>
                    {props.username}
                </div>
                <div className={classes.active_details}>
                    <div className={classes.wrapper}>
                        <div className={classes.details}>
                            <img src="../images/Active_details/Membership.png" alt="" className={classes.membership} />
                            <span className={classes.membership_details}>Member since {props.date}</span>
                        </div>
                        <div className={classes.details}>
                            <div className={classes.box}>
                                <img src="../images/Active_details/Last_seen.png" alt="" className={classes.last_seen} />
                                <img src="../images/Active_details/Last_seen_2.png" alt="" className={classes.last_seen_2} />
                            </div>
                            <span className={classes.last_seen_details}>Last seen this week</span>
                        </div>
                        <div className={classes.details}>
                            <img src="../images/Active_details/Visited.png" alt="" className={classes.visited} />
                            <span className={classes.visited_details}>Visited 5 days,1 consecutive</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
