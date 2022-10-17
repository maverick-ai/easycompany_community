import classes from "./reputation_box.module.css";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto';
import { useState } from "react";
export default function Reputation_box(props) {
    const data = props.scores;
    const month = props.months;
    const n = data.length;
    console.log("inside reputation")
    console.log(data);
    var count = data[0].score_value;
    var temp_count = data[0].score_value;
    var word = data[0].score_time.slice(0,10);
    var temp = data[0].score_time.slice(0,10);
    var f=0;
    // const newData = data.map((data) => {
    //     console.log(word);
    //     count = count + data.score_value;
    //     if (word !== temp) {
    //         temp = word;
    //         f=1;
    //         word = data.score_time.slice(0, 10);
    //         return count;
    //     }
    //     else{
    //         temp = word;
    //         f=0;
    //         word = data.score_time.slice(0, 10);
    //         return 0;
    //     }
    // })
    // if(f===0)
    // newData.push(count);
    // console.log(newData);
    var newData = [];
    var indx=0;
    for(let i=1;i<data.length;i++){
         word=data[i].score_time.slice(0,10);
         count=count+data[i].score_value;
         if(word!==temp){
            temp=word;
            if(f===1){
                newData[indx]=temp_count;
            }
            else{
                newData[indx]=temp_count;
                temp_count=count;
            }
            f=1;
            indx=indx+1;
         }
         else{
            f=0;
            temp_count=count;
         }
    }
    if(f==1){
        newData[indx]=count;
    }
    else{
        newData[indx]=temp_count;
    }
    console.log(newData);
    let labelfinal = [];
    let i=0;

    const [newUser, setNewUser] = useState({
        labels: ["Aug", "Sep", "Oct", "Nov"],
        datasets: [
            {
                label: "",
                data: newData,
                borderColor: "#B50EAE",
                fill: "false",
                backgroundColor: "#5E5E5E",
                color: "#B50EAE",
                pointBackgroundColor: "#B50EAE",
                pointRadius: "0"
            },

        ],
    });
    return (
        <div className={classes.box}>
            <div className={classes.chart}>
                <Line data={newUser} options={{
                    plugins: {
                        legend: {
                            display: false,
                        },
                    },
                    scales: {
                        y: {
                            ticks: {
                                color: "#B50EAE",
                                min: 0,
                                max: { count },
                                stepSize: ({ count } / 4),
                                stacked: true,
                            }
                        }
                    }
                }} />
            </div>
            <div className={classes.box2}>
                <div className={classes.tag}>
                    <div className={classes.cumulative}>{count}</div>
                    <div className={classes.addon}>+{data[n-1].score_value}</div>
                </div>
                <div className={classes.top_tags}>
                    <div className={classes.word}>Top Tag</div>
                    <div className={classes.places}>Tourist Spots</div>
                </div>
            </div>
        </div>
    )
}
