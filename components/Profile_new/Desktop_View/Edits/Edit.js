import React from 'react'
import Activity from './Activity';
import classes from "./edit.module.css";
import Your_Account from './Your_Account';
export default function Edit() {
    return (
        <>
            <div className={classes.container}>
                <img src="../images/Edits/Vertical_bar1.png" alt="" className={classes.vertical_bar1} />
                <img src="../images/Edits/Vertical_bar2.png" alt="" className={classes.vertical_bar2} />
                <div className={classes.card}>
                    <div className={classes.notifications}>
                        <div className={classes.bell}>
                            <img src="../images/Edits/bell.png" alt="" className={classes.bell_img} />
                            <img src="../images/Edits/online.png" alt="" className={classes.online} />
                        </div>
                        <div className={classes.comments}>
                            <img src="../images/Edits/comment.png" alt="" className={classes.comment_img} />
                            <img src="../images/Edits/online.png" alt="" className={classes.online} />
                        </div>
                        <div className={classes.log}>
                            <button className={classes.log_out}>Log Out</button>
                        </div>
                    </div>
                    <Your_Account />
                    <Activity/>
                    <img src="../images/Edits/Airplane.png" alt="" className={classes.airplane} />
                </div>
            </div>
        </>
    )
}
