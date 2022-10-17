import classes from "./badges.module.css";

export default function Badges(props) {
  return (
    <div className={classes.badges}>
        <div className={classes.header}>
            Badges
        </div>
        <div className={classes.medals}>
            <div className={classes.box}>
                <img src="../images/Mobile_View/Badges/Bronze.png" alt="" />
                <span className={classes.bronze}>Bronze</span>
                <div className={classes.count}>{props.bronze}</div>
            </div>
            <div className={classes.box}>
                <img src="../images/Mobile_View/Badges/Silver.png" alt="" />
                <span className={classes.silver}>Silver</span>
                <div className={classes.count}>{props.silver}</div>
            </div>
            <div className={classes.box}>
                <img src="../images/Mobile_View/Badges/Gold.png" alt="" />
                <span className={classes.gold}>Gold</span>
                <div className={classes.count}>{props.gold}</div>
            </div>
        </div>
        <div className={classes.contribution}>
           Contributions
        </div>
        
    </div>
  )
}
