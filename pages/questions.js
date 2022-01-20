import { PostListURL, PageSize } from "../components/constants"
import Link from 'next/link'
import Pagination from '../components/Pagination';
import Router from 'next/router'
import {sendReq} from "../components/requests";

const Questions = ({questions, query}) => {
 
    return (
        <>
            <div className="questions-list">
           

            {questions.count &&
                questions.results.map((data) => (
                <div key={data.pk}>
                    <Link href={`/posts/?postid=${data.pk}&page=1`}><a><strong> {data.title}</strong></a></Link>
                    <p>{data.upVoteNumber} Upvotes</p>
                    <p>{data.downVoteNumber} Downvotes</p>
                </div>
            ))
            }
            </div>
            {questions.count > PageSize && 
            <Pagination 
            
                currentPage={query.page}
                count={Math.ceil(questions.count/PageSize)}
                baseURL={`/questions?`}
                
            />}
        </>
    )
}

export default Questions;

export async function getServerSideProps({ query }) {
    if (!query.page) 
        query.page=1;
    let questions=[]
    try{
        questions = await sendReq(`${PostListURL}?page=${query.page}`)
    }

    catch(err){
        return {
            redirect: {
                destination: "/error",
                permanent: false,
            }
        }
    }

    return {
        props: {
            questions,
            query,
        }
    }
    
}