import {sendReq} from "../components/requests"
import cookie from "cookie";
import { UserProfileURL,UserPostsURL,UserSolutionsURL,PublicUserProfileURL,PublicUserSolutionsURL,PublicUserPostsURL } from "../components/constants";
import LoginPopUp from "../components/LogInPopUp";
import Link from 'next/link'
import { useState } from "react";

const Profile = ({ userData, query, login })=>{

    const [isLoggedIn, setIsLoggedIn] = useState(login);

    return(
        <div>
            <h1>Profile</h1>
            {isLoggedIn && <div>
                <p>{userData.first_name + userData.last_name}</p>
                <div className="user-stats">
                    <h2>User Stats</h2>
                    {userData.stats.total_score && <p>Total score: {userData.stats.total_score}</p>}
                    <p>Trust Score: {userData.trust_score}</p>
                    <p>Rating: {userData.rating}</p>
                    <p>Badges:</p>
                    {userData.stats.badges && userData.stats.badges.map((badge)=>{
                        <div className="user-badges">
                            <p>Title: {badge.badge_name}</p>
                            <p>Description: {badge.badge_description}</p>
                            <img href={badge.badge_image} alt="badge-image"/>
                        </div>
                    })}
                </div>
                <div className="user-posts-container">
                    <Link href={query.user? `user/posts?user=${query.user}&page=1`:`user/posts?page=1`}><a><h2>Posts</h2></a></Link>
                    {userData.posts.map((post)=>(
                        <div className="user-post" key={post.pk}>
                            <Link href={`/posts/?postid=${post.pk}&page=1`}><a><strong> {post.title.substring(0,20)}....</strong></a></Link>
                            <p>{post.created_date}</p>
                        </div>
                    ))}
                </div>
                <div className="user-solutions-container">
                <Link href={query.user ?`/user/answers?user=${query.user}&page=1`:`/user/answers?page=1` }><a><h2>Answers</h2></a></Link>
                    {userData.solutions.map((solution)=>(
                        <div className="user-solution" key={solution.pk}>
                            <Link href={`/posts/?postid=${solution.post}&page=1`}><a><strong> {solution.solutionByUser.substring(0,20)}....</strong></a></Link>
                            <p>{solution.created_date}</p>
                        </div>
                    ))}
                </div>
            </div>}
            {!isLoggedIn && <LoginPopUp setLogin={setIsLoggedIn}/>}
        </div>
    )
}

export default Profile;

export async function getServerSideProps({query, req}){
    let userData = {};
    let login = true;
    try{
        if (query.user){
        
            userData = await sendReq(`${PublicUserProfileURL}${query.user}/`);
            console.log("HELLLO",userData);

        }
        else if (req.headers.cookie) {
            console.log("HELLLOOO2",userData);
            userData = await sendReq(`${UserProfileURL}`,req.headers.cookie);   
        }
        else {
            console.log("HELLLOOO3");
            login = false
        }
        console.log(userData);
    }
    catch(err){
        console.log(err);
        if (err=="redirect to login") {
            login = false;
        }
        else {
            return {
                redirect: {
                destination: "/error",
                permanent: false,
                }
            }
        }
    }
    return{
        props: {
            userData,
            query,
            login
        }
    }
}