import Badges from "./Badges";
import classes from "./guide.module.css";

export default function Guide(props) {
    return (
        <div className={classes.container}>
            <img src="../images/Tag_View/Active_details/Star.png" alt="" className={classes.star} />
            <img src="../images/Tag_View/Active_details/Star.png" alt="" className={classes.star2} />
            <img src="../images/Tag_View/Guide/Dots2.png" alt="" className={classes.dots2} />
            <img src="../images/Tag_View/Guide/Slanted_line1.png" alt="" className={classes.slanted_line1} />
            <img src="../images/Tag_View/Guide/Slanted_line2.png" alt="" className={classes.slanted_line2} />
            <Badges badges={props.badges} />
            <div className={classes.guide}>
                <img src="../images/Tag_View/Guide/Dots.png" alt="" className={classes.dots_group} />
                <div className={classes.header}>Guide Level</div>
                <div className={classes.info}>
                    <div className={classes.dp}>
                        <img src="../images/Tag_View/Guide/Profile_picture.png" alt="" className={classes.profile_icon} />
                        <img src="../images/Tag_View/Guide/Yellow_circle.png" alt="" className={classes.circle} />
                        <img src="../images/Tag_View/Guide/Embedded_star.png" alt="" className={classes.embedded} />
                    </div>
                    <div className={classes.guide_level}>Local Guide Level {props.level}</div>
                </div>
            </div>
        </div>
    )
}
