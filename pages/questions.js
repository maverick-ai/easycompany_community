import styles from "../styles/Questions.module.css";
import { PostListURL, PageSize } from "../components/constants"
import Link from 'next/link'
import Pagination from '../components/Pagination';
import Router from 'next/router'
import {sendReq} from "../components/requests";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {faArrowAltCircleUp,faArrowAltCircleDown} from "@fortawesome/free-solid-svg-icons";


const Questions = ({questions, query}) => {
 
    return (
        <div className={`${styles.questionsList} container`}>
        {questions.count &&
            questions.results.map((data) => (
            <Link href={`/posts/?postid=${data.pk}&page=1`}><div className={`row ${styles.qcard}`} key={data.pk}>
            <div className={`col-3 col-sm-2 ${styles.voteCol}`}>
                <FontAwesomeIcon className={styles.upVoteIcon} icon={faArrowAltCircleUp} />
                <p className={`${styles.voteText}`}>{data.upVoteNumber}</p>
                <div className={styles.hrDiv}></div>
                <p className={styles.voteText}>{data.downVoteNumber}</p>
                <FontAwesomeIcon className={styles.downVoteIcon} icon={faArrowAltCircleDown}/>
            </div>

            <div className={`col-9 col-sm-10 ${styles.qbox}`}>
                <p className={styles.title}><strong> {data.title.length>60?data.title.substring(0,60) + " ...": data.title}</strong></p>
                <div className={`category-list ${styles.catlist}`}>
                    {data.categoryOfThePost.map((category)=> (
                        <p className={styles.category}>{category.categoryForPost}</p>
                    ))}
                </div>
            </div>
                
            </div></Link>
        ))
        }
        {questions.count > PageSize && 
        <Pagination 
        
            currentPage={query.page}
            count={Math.ceil(questions.count/PageSize)}
            baseURL={`/questions?`}
            
        />}
        </div>
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
                destination: "/404",
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