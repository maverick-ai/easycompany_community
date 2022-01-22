import styles from "../styles/Search.module.css";
import React, { useState, useEffect, useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { SearchURL } from "../components/constants";
import Link from 'next/link'
import {sendReq} from "../components/requests";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {faArrowAltCircleUp,faArrowAltCircleDown} from "@fortawesome/free-solid-svg-icons";

var page = 1;
var str = "";

const Content = () => {
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [searched, setSearched] = useState(false);
  const query = useRef();
  
  const newSearch = () => {
        page = 1;
        setHasMore(true);
        str = query.current.value;
        setPosts([]);
        setSearched(true);
        getMorePost();
  }

  const getMorePost = async () => {
    console.log(`?search_query=${str}&page=${page}`);
      const newPosts = await sendReq(SearchURL + `?search_query=${str}&page=${page}`)
      if (newPosts.next)
          page += 1;
      else
          setHasMore(false);
      console.log(newPosts);
      setPosts((post) => [...post, ...newPosts.results]);
  };

  return (
    <div className={styles.questionsList}>

      <label className={styles.searchtext} htmlFor="query">Enter search term</label>
      <input className={styles.searchbox} id="query" type="text" autoComplete="query" ref={query} required />
      <button className={styles.searchbutton} type="button" onClick={newSearch}>submit</button>

       {searched && <InfiniteScroll
        dataLength={posts.length}
        next={getMorePost}
        hasMore={hasMore}
      loader={<div class="d-flex justify-content-center"><div className= {`spinner-grow text-success ${styles.load}`} role="status">
  <span class="sr-only">Loading...</span>
</div></div>}
        endMessage={<h4 className={styles.nopost}>......</h4>}
      >
        {posts.map((data) => (
          <Link href={`/posts/?postid=${data.pk}&page=1`}><div className={`row ${styles.qcard}`} key={data.pk}>
            <div className={`col-3 col-md-2 ${styles.voteCol}`}>
              <FontAwesomeIcon className={styles.upVoteIcon} icon={faArrowAltCircleUp} />
              <p className={`${styles.voteText} ${styles.upVoteNum}`}>{data.upVoteNumber}</p>
              <p className={styles.voteText}>{data.downVoteNumber}</p>
              <FontAwesomeIcon className={styles.downVoteIcon} icon={faArrowAltCircleDown}/>
            </div>

            <div className={`col-9 col-md-10 ${styles.qbox}`}>
              <p className={styles.title}><strong> {data.title}</strong></p>
              <div className={`category-list ${styles.catlist}`}>
                {data.categoryOfThePost.map((category)=> (
                    <p className={styles.category}>{category.categoryForPost}</p>
                ))}
              </div>
            </div>
          </div></Link>
        ))}
      </InfiniteScroll>}
      </div>
  );
};

export default Content;