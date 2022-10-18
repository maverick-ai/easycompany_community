import React from 'react'
import Activity from './Activity';
import classes from "./edit.module.css";
import Your_Account from './Your_Account';
export default function Edit() {
    return (
        <>
            <div className={classes.container}>
                <div className={classes.card}>
                <img src="../images/Tag_View/Edits/Vertical_bar2.png" alt="" className={classes.vertical_bar1} />
                <img src="../images/Tag_View/Edits/Vertical_bar1.png" alt="" className={classes.vertical_bar2} />
                    <div className={classes.notifications}>
                        <div className={classes.bell}>
                            <img src="../images/Tag_View/Edits/bell.png" alt="" className={classes.bell_img} />
                        </div>
                        <div className={classes.comments}>
                            <img src="../images/Tag_View/Edits/message.png" alt="" className={classes.comment_img} />
                        </div>
                        <div className={classes.log}>
                            <button className={classes.log_out}>Log Out</button>
                        </div>
                    </div>
                    <Your_Account />
                    <Activity/>
                    <img src="../images/Tag_View/Edits/airplane.png" alt="" className={classes.airplane} />
                </div>
            </div>
        </>
    )
}
