import React, { useState, useEffect, useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { SearchURL } from "../components/constants";
import Link from 'next/link'

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
    try {
      const res = await fetch(
        SearchURL + `?search_query=${str}&page=${page}`
      );
      if (res.status >= 300) {
        throw(res.status);
      }
      console.log(res);
      const newPosts = await res.json();
      if (newPosts.next)
          page += 1;
      else
          setHasMore(false);
      console.log(newPosts);
      setPosts((post) => [...post, ...newPosts.results]);
      
    }
    
    catch (err) {
      return {
        redirect: {
            destination: '/error',
            permanent: false,
        }
    }
      
    }
  };

  return (
    <>
    
    <div className="container-fluid" style={{ marginTop: "10rem" }}>

      <label htmlFor="query">Enter search term</label>
      <input id="query" type="text" autoComplete="query" ref={query} required />
      <button type="button" onClick={newSearch}>submit</button>
  

       {searched && <InfiniteScroll
        dataLength={posts.length}
        next={getMorePost}
        hasMore={hasMore}
        loader={<h3> Loading...</h3>}
        endMessage={<h4>Nothing more to show</h4>}
      >
        {posts.map((data) => (
          <div key={data.pk}>
            <div className="back">
              <Link href={`/posts/?postid=${data.pk}&page=1`}><a><strong> {data.title}</strong></a></Link>
              <p>{data.upVoteNumber} Upvotes</p>
              <p>{data.downVoteNumber} Downvotes</p>
            </div>
          </div>
        ))}
      </InfiniteScroll>}
      </div>
      <style jsx>
        {`
          .back {
            padding: 10px;
            background-color: dodgerblue;
            color: white;
            margin: 10px;
            min-height: 20rem;
          }
        `}
      </style>
    </>
  );
};

export default Content;