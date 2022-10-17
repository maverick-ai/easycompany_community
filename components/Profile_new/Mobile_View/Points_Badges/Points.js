import classes from "./points.module.css";

export default function Points(props) {
    return (
        <div className={classes.container}>
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
            <img src="../images/Mobile_view/Points_Badges/Star.png" alt="" className={classes.star} />
        </div>
    )
}
