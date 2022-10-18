import Badges from "./Badges";
import classes from "./guide.module.css";

export default function Guide(props) {
    return (
        <div className={classes.container}>
            <img src="../images/Guide/Dots3.png" alt="" className={classes.dots3} />
            <img src="../images/Guide/Dots4.png" alt="" className={classes.dots4} />
            <img src="../images/Points_Badges/Star.png" alt="" className={classes.double_star} />
            <img src="../images/Guide/Slanted_bar1.png" alt="" className={classes.slanted_bar1} />
            <img src="../images/Guide/Slanted_bar2.png" alt="" className={classes.slanted_bar2} />
            <Badges badges={props.badges}/>
            <div className={classes.guide}>
                <img src="../images/Guide/Dots2.png" alt="" className={classes.dots_group} />
                <div className={classes.header}>Guide Level</div>
                <div className={classes.info}>
                    <div className={classes.dp}>
                        <img src="../images/Guide/Profile.png" alt="" className={classes.profile_icon} />
                        <img src="../images/Guide/Yellow_circle.png" alt="" className={classes.circle} />
                        <img src="../images/Guide/Embedded_star.png" alt="" className={classes.star} />
                    </div>
                    <div className={classes.guide_level}>Local Guide Level {props.level}</div>
                </div>
            </div>
        </div>
    )
}
