import classes from "./guide.module.css";

export default function Guide(props) {
    return (
        <>
            <div className={classes.container}>
                <img src="../images/Mobile_View/Guide/Dots.png" alt="" className={classes.dots_group} />
                <div className={classes.header}>Guide Level</div>
                <div className={classes.info}>
                    <div className={classes.dp}>
                        <img src="../images/Mobile_View/Guide/Profile_Icon.png" alt="" className={classes.profile_icon} />
                        <img src="../images/Mobile_View/Guide/Yellow_circle.png" alt="" className={classes.circle} />
                        <img src="../images/Mobile_View/Guide/Embedded_star.png" alt="" className={classes.star} />
                    </div>
                    <div className={classes.guide_level}>Local Guide Level {props.level}</div>
                </div>
            {/* <img src="../images/Mobile_View/Designs/Line2.png" alt="" className={classes.line1} />
            <img src="../images/Mobile_View/Designs/Line1.png" alt="" className={classes.line2} /> */}
            </div>
        </>
    )
}
