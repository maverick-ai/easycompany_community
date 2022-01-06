import React, { useState, useEffect, useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { SearchURL } from "../components/constants";

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
    const res = await fetch(
      SearchURL + `?search_query=${str}&page=${page}`
    );
    console.log(res);
    const newPosts = await res.json();
    if (newPosts.next)
        page += 1;
    else
        setHasMore(false);
    console.log(newPosts);
    setPosts((post) => [...post, ...newPosts.results]);
  };

  return (
    <>
    
    <div className="container-fluid" style={{ marginTop: "10rem" }}>

      <label htmlFor="query">Enter search term</label>
      <input id="query" type="text" autoComplete="query" ref={query} required />
      <button type="button" onClick={newSearch}>submit</button>
  

       {searched && <InfiniteScroll
       height={120}
        dataLength={posts.length}
        next={getMorePost}
        hasMore={hasMore}
        loader={<h3> Loading...</h3>}
        endMessage={<h4>Nothing more to show</h4>}
      >
        {posts.map((data) => (
          <div key={data.pk}>
            <div className="back">
            <p></p>
              <strong> {data.title1}</strong> 
            </div>
            {data.completed}
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
          }
        `}
      </style>
    </>
  );
};

export default Content;