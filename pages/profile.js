import {sendReq} from "../components/requests"
import cookie from "cookie";
import { UserProfileURL,UserPostsURL,UserSolutionsURL,PublicUserProfileURL,PublicUserSolutionsURL,PublicUserPostsURL } from "../components/constants";
import LoginPopUp from "../components/LogInPopUp";
import Link from 'next/link'
import styles from "../styles/Profile.module.css"
import { useState,useEffect } from "react";
const Profile = ({ userData, query, login })=>{
    const [avatarURL, setAvatarURL] = useState("");

    useEffect(()=>{
        if (!userData.gender || userData.gender == "M") {
            userData.gender = "male";
        }
        else {
            userData.gender = "female";
        }
        setAvatarURL(`https://avatars.dicebear.com/api/${userData.gender}/${userData.first_name+userData.last_name}.svg`);
    }, [])

    return(
        <div className={styles.profileContainer}>
            <div>
                <div className="user-stats">
                    <div className="row">
                        <div className={`col-6 ${styles.profileCol} ${styles.statsContainer}`}>
                            <div>
                                <h2 className={styles.username}>{userData.first_name + " " + userData.last_name}</h2>
                                <p className={styles.repText}>Reputation: {userData.stats.total_score? userData.stats.total_score: 0}</p>
                            </div>
                        </div>
                        <div className={`col-6 ${styles.profileCol}`}>
                            <img src={avatarURL} alt="user-avatar" className={styles.avatar}></img>
                        </div>
                    </div>
                    <div className={styles.colCard}>
                        <h2>Badges</h2>
                        {userData.stats.badges && userData.stats.badges.map((badge)=>{
                            <div className="user-badges">
                                <p>Title: {badge.badge_name}</p>
                                <p>Description: {badge.badge_description}</p>
                                <img href={badge.badge_image} alt="badge-image"/>
                            </div>
                        })}
                    </div>
                </div>
                <div className="row">
                <div className={`col-md-6 ${styles.profileCol}`}>
                    <div className={styles.colCard}>
                        <Link href={query.user? `user/posts?user=${query.user}&page=1`:`user/posts?page=1`}><a><h2>Posts</h2></a></Link>
                            {userData.posts.map((post)=>(
                                <div className="user-post" key={post.pk}>
                                    <Link href={`/posts/?postid=${post.pk}&page=1`}><a><strong> {post.title.length > 30? post.title.substring(0,20) + " ...": post.title}</strong></a></Link>
                                    <p className={styles.date}>{post.created_date}</p>
                                </div>
                            ))}
                            {userData.posts.length == 5 && <Link href={query.user? `user/posts?user=${query.user}&page=1`:`user/posts?page=1`}><p className={styles.button}>view more</p></Link>}
                    </div>
                </div>
                <div className={`col-md-6 ${styles.profileCol}`}>
                    <div className={styles.colCard}>
                        <Link href={query.user ?`/user/answers?user=${query.user}&page=1`:`/user/answers?page=1` }><a><h2>Answers</h2></a></Link>
                            {userData.solutions.map((solution)=>(
                                <div className="user-solution" key={solution.pk}>
                                    <Link href={`/posts/?postid=${solution.post.pk}&page=1`}><a><strong> {solution.post.title.length > 30? solution.post.title.substring(0,20) + "...": solution.post.title}</strong></a></Link>
                                    <p className={styles.date}>{solution.created_date}</p>
                                </div>
                            ))}
                            {userData.solutions.length == 5 && <Link href={query.user ?`/user/answers?user=${query.user}&page=1`:`/user/answers?page=1` }><p className={styles.button}>view more</p></Link>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;

export async function getServerSideProps({query, req}){
    let userData = {};
    console.log("aaaaaaaaaaaaaaaaaaa");
  
    console.log(req.connection.remoteAddress,req.headers);
    try{
        if (query.user){
            userData = await sendReq(`${PublicUserProfileURL}${query.user}/`);
        }
        else if (req.headers.cookie) {
            userData = await sendReq(`${UserProfileURL}`,req.headers.cookie);   
        }
        else {
            throw("redirect to login")
        }
        console.log(userData);
    }
    catch(err){
        console.log(err);
        if (err=="redirect to login") {
            return {
                redirect: {
                destination: "/login",
                permanent: false,
                }
            }
        }
        else {
            return {
                redirect: {
                destination: "/404",
                permanent: false,
                }
            }
        }
    }
    return{
        props: {
            userData,
            query
        }
    }
}