import classes from "./badges.module.css";

export default function Badges(props) {
  return (
    <div className={classes.badges}>
        <div className={classes.header}>
            Badges
        </div>
        <div className={classes.medals}>
            <div className={classes.box}>
                <img src="../images/Badges/Bronze.png" alt="" />
                <span className={classes.bronze}>Bronze</span>
            </div>
            <div className={classes.box}>
                <img src="../images/Badges/Silver.png" alt="" />
                <span className={classes.silver}>Silver</span>
            </div>
            <div className={classes.box}>
                <img src="../images/Badges/Gold.png" alt="" />
                <span className={classes.gold}>Gold</span>
            </div>
        </div>
        <div className={classes.contribution}>
            <div className={classes.box}>
                <div className={classes.count}>{props.bronze}</div>
                <div className={classes.contributions}>contributions</div>
            </div>
            <div className={classes.box}>
                <div className={classes.count}>{props.silver}</div>
                <div className={classes.contributions}>contributions</div>
            </div>
            <div className={classes.box}>
                <div className={classes.count}>{props.gold}</div>
                <div className={classes.contributions}>contributions</div>
            </div>
        </div>
        
    </div>
  )
}
