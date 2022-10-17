import 'bootstrap/dist/css/bootstrap.min.css';
import { sendReq } from "../components/requests";
import classes from "../styles/index.module.css";
import { useState, useEffect } from "react";
import Mobile_Main from '../components/Profile_new/Mobile_View/Main/Main';
import Tag_main from '../components/Profile_new/Tab_View/Main/Tag_main';
import Desktop_Main from '../components/Profile_new/Desktop_View/Main/Desktop_Main';
function Homepage(props) {
    console.log("main props");
    console.log(props);
    const [winWidth, setWinWidth] = useState("a");
    useEffect(() => {
        if (window.innerWidth <= 1320) {
            setWinWidth("a");
        }
        else if (window.innerWidth <= 768) {
            setWinWidth("b");
        }
        else {
            setWinWidth("c");
        }
        window.addEventListener("resize", () => {
            if (window.innerWidth <= 768) {
                setWinWidth("b");
            }
            else if (window.innerWidth <= 1320) {
                setWinWidth("a");
            }
            else {
                setWinWidth("c");
            }
        });
    }, []);
    // console.log({ data });
    // console.log(data.first_name + " " + data.last_name);
    switch (winWidth) {
        case "c": return (
            <div className={classes.container}>
                <Desktop_Main data={props} />
            </div>
        )
        case "b": return (
            <div className={classes.container}>
                <Mobile_Main data={props}/>
            </div>
        )
        case "a": return (
            <div className={classes.container}>
                <Tag_main data={props}/>
            </div>
        )
    }
}

export default Homepage

export async function getServerSideProps({query, req}) {
    let userData = {};
    console.log("querry here");
    console.log(query);

    console.log("req here");
    console.log(req.headers.cookie);
    console.log("aaaaaaa");
    userData = await sendReq(`https://backend.easycompany.space/api/user_stats/`, req.headers.cookie);

    console.log(userData);
    // return {
    //     props: null, 
    // }
    // var myHeaders = new Headers();
    // myHeaders.append("Authorization", "token bd916cd9c5f51983d5b7f7498dcf7e6e8bb8eeac");
//     myHeaders.append("Cookie", "csrftoken=ZlT33b5ZeTlgrL4zuTaCoN4HI0uePGxcK92UN58TjeEgKK6wN4eB23xEX8FUgXYK; sessionid=do1rz3pz9nmu6q73dr2h6qpzcty7306u");

//     var requestOptions = {
//         method: 'GET',
//         headers: myHeaders,
//         redirect: 'follow'
//     };

//     var userData={};
    
//     fetch("https://backend.easycompany.space/api/user_stats/", requestOptions)
//         .then(response => response.json())
//         .then((data) => {
//             userData=data;
//             console.log(userData)
//         })
//         .catch(error => console.log('error', error));
// var data = JSON.parse(JSON.stringify(userData));
    // console.log(userData);
    const data = {
        posts: [
          {
            pk: 'c8cf17f5-3c54-4ed2-a2ce-ef4d659af937',
            title: 'upvote',
            created_date: '2022-08-23T16:10:32.514413Z'
          },
          {
            pk: '78d85c81-e37c-4477-baca-cf652812c660',
            title: 'upvote',
            created_date: '2022-08-23T16:14:47.479895Z'
          },
          {
            pk: 'a794f6a2-a3f8-449c-bd43-1523afe320ff',
            title: 'upvote',
            created_date: '2022-08-23T16:12:40.279715Z'
          },
          {
            pk: '3a89ca00-e5dc-4d56-9f2d-5d50c885b283',
            title: 'testing upvote',
            created_date: '2022-08-23T16:10:17.439401Z'
          },
          {
            pk: '32bea599-586a-46f7-a2c1-0196da9a2e77',
            title: 'new upvote',
            created_date: '2022-08-23T16:20:06.605961Z'
          },
          {
            pk: '4fa69048-b1ae-477b-841f-9463caeea292',
            title: 'time test',
            created_date: '2022-08-18T09:48:49.972094Z'
          },
          {
            pk: '20f81c9d-14f8-4a9d-a020-df2435f5c443',
            title: 'whadiuahwiduahiwudhaiuwdhaiwud?da',
            created_date: '2022-09-22T16:17:20.015603Z'
          }
        ],
        solutions: [
          {
            pk: 34,
            post: null,
            created_date: '2022-08-23T16:20:26.037855Z'
          },
          {
            pk: 35,
            post: null,
            created_date: '2022-09-22T16:08:30.447203Z'
          },
          {
            pk: 36,
            post: null,
            created_date: '2022-09-22T16:14:38.049290Z'
          }
        ],
        stats: {
          badges: [],
          total_score: 20,
          scores: [ 1, 2 ],
          bookmarks: [],
          details: {
            up_votes_ques: 3,
            down_votes_ques: 0,
            up_votes_ans: 2,
            down_votes_ans: 0,
            total_posts: 7,
            total_solutions: 3
          }
        },
        image: null,
        first_name: 'testing',
        last_name: 'testing',
        date_joined: '2022-08-13T12:47:44.141253Z',
        trust_score: '4.00',
        rating: 0,
        email: 'test@test.com',
        date_of_birth: '2003-08-14',
        gender: 'M',
        work: 'Fighting criminals at night and running Wayne Enterprise in the day',
        university: 'League of shadows',
        groups: []
      }
        return{
            props: userData
        }
}
