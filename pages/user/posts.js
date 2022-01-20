import { PublicUserPostsURL,UserPostsURL,PageSize, } from "../../components/constants";
import { sendReq } from "../../components/requests";
import {useState} from "react"
import Link from "next/link"
import Pagination from '../../components/Pagination';


const UserPosts = ({userPosts, query, login}) => {  
    const [isLoggedIn, setIsLoggedIn] = useState(login);

    return(
    <div className="user-posts-list">
        <div className="questions-list">
            {userPosts.count &&
                userPosts.results.map((data) => (
                <div key={data.pk}>
                    <Link href={`/posts/?postid=${data.pk}&page=1`}><a><strong> {data.title}</strong></a></Link>
                    <p>{data.upVoteNumber} Upvotes</p>
                    <p>{data.downVoteNumber} Downvotes</p>
                </div>
            ))
            }
        </div>
        {userPosts.count > PageSize && 
        <Pagination 
        
            currentPage={query.page}
            count={Math.ceil(userPosts.count/PageSize)}
            baseURL={query.user? `/user/posts?user=${query.user}`:`/user/posts?`}
            
        />}
        {!isLoggedIn && <LoginPopUp setLogin={setIsLoggedIn}/>}
    </div>)
}

export default UserPosts;

export async function getServerSideProps({query, req}){
    let userPosts = {};
    let login = true;
    if (!query.page) 
        query.page=1;
    try{
        if (query.user){
        
            userPosts = await sendReq(`${PublicUserPostsURL}${query.user}/?page=${query.page}`);
            console.log("HELLLO",userPosts);

        }
        else if (req.headers.cookie) {
            userPosts = await sendReq(`${UserPostsURL}?page=${query.page}`,req.headers.cookie);  
            console.log("HELLLOOO2",userPosts); 
        }
        else {
            console.log("HELLLOOO3");
            login = false
        }
        console.log(userPosts);
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
            userPosts,
            query,
            login
        }
    }
}