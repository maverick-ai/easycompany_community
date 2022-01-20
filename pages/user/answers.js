import { PublicUserSolutionsURL, PageSize,UserSolutionsURL } from "../../components/constants"
import Link from 'next/link'
import Pagination from '../../components/Pagination';
import Router from 'next/router'
import {sendReq} from "../../components/requests";
import { useState } from "react";

const Answers = ({userAnswers, query,login}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(login);

    return (
        <div className="user-answers-list">
            
            <div className="answers-list">

            {userAnswers.count &&
                userAnswers.results.map((data) => (
                <div key={data.pk}>
                    <Link href={`/posts/?postid=${data.post}&page=1`}><a><strong>{data.solutionByUser}</strong></a></Link>
                    <p>Upvotes:{data.upVoteNumber}</p>
                    <p>Downvotes: {data.downVoteNumber}</p>
                    
                </div>
            ))
            }
            </div>
            {userAnswers.count > PageSize && 
            <Pagination 
            
                currentPage={query.page}
                count={Math.ceil(userAnswers.count/PageSize)}
                baseURL={query.user ?`/user/answers?user=${query.user}`:`/user/answers?`}
                
            />}
            {!isLoggedIn && <LoginPopUp setLogin={setIsLoggedIn}/>}
        </div>
    )
}

export default Answers;

export async function getServerSideProps({ query,req}) {
    let userAnswers = {};
    let login = true;
    if (!query.page) 
        query.page=1;
    try{
        if (query.user){
            userAnswers = await sendReq(`${PublicUserSolutionsURL}${query.user}/?page=${query.page}`);
            console.log("HELLLO",userAnswers);
        }
        else if (req.headers.cookie) {
            console.log("HELLLOOO2",userAnswers);
            userAnswers = await sendReq(`${UserSolutionsURL}?page=${query.page}`,req.headers.cookie);   
        }
        else {
            console.log("HELLLOOO3");
            login = false
        }
        console.log(userAnswers);
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
            userAnswers,
            query,
            login
        }
    }
   
}