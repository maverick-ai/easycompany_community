import classes from "./points_badges.module.css";

export default function Points_Badges(props) {
    return (
        <div className={classes.container}>
            <img src="../images/Points_Badges/Star.png" alt="" className={classes.star} />
            <img src="../images/Points_Badges/Bar2.png" alt="" className={classes.bar2} />
            <img src="../images/Points_Badges/Bar1.png" alt="" className={classes.bar1} />
            <img src="../images/Points_Badges/Dots.png" alt="" className={classes.dots} />
            <div className={classes.wrapper}>
                <div className={classes.points}>
                    <div className={classes.points_box}>
                        <span className={classes.points_count}>
                            {props.points}
                        </span>
                        <span className={classes.points_word}>Points</span>
                    </div>
                </div>
                <hr className={classes.divider} />
                <div className={classes.badges}>
                    <div className={classes.badges_box}>
                        <span className={classes.badges_count}>
                        {props.badges}
                        </span>
                        <span className={classes.badges_word}>Badges</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
