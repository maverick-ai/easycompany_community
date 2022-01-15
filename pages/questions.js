import { PostListURL, PageSize } from "../components/constants"
import Link from 'next/link'
import Pagination from '../components/Pagination';
import Router from 'next/router'



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
    try {
        const res = await fetch(`${PostListURL}?page=${query.page}`);
        const questions = await res.json();
        console.log(questions);
        if (res.status >= 300) {
            throw(res.status);
        }
        return {
            props: {
                questions,
                query,
            }
        }
    }
    catch(err) {
        console.log(err);
        return {
            redirect: {
                destination: '/error',
                permanent: false,
            }
        }
    }
}