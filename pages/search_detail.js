import styles from "../styles/Search.module.scss";
import React, { useState, useEffect, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { SearchURL } from "../components/constants";

import { sendReq } from "../components/requests";

import { Container, Row, Col } from "react-bootstrap";
import Image from "next/dist/client/image";

import SearchBox from "../components/searchbox";
import { useRouter } from "next/router";
import FooterToolbar from "../components/FooterToolbar";

// var page = 1;

const Content = () => {
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [searched, setSearched] = useState(false);
  const router = useRouter();
  const [query, setQuery] = useState(router.query.search);

  const [page, setPage] = useState(1);

  const getMorePost = async () => {
    const newPosts = await sendReq(
      SearchURL + `?search_query=${query}&page=${page}`
    );

    setPosts((post) => [...post, ...newPosts.results]);
    if (newPosts.next !== null) {
      setPage((page = page + 1));
      setHasMore(true);
    } else {
      setHasMore(false);
    }

  };

  const newSearch = () => {
    setPage((page = 1));

    setHasMore(true);
    setPosts([]);
    setSearched(true);
    getMorePost();
  };

  function onChangeHandler(props) {
    setQuery(props.target.value);
  }

  useEffect(newSearch, []);

  // const newSearchCall = useCallback(() => newSearch, [query]);
  return (
    // search-bar
    <React.Fragment>
      <div
        id="scrollableDiv"
        style={{
          height: "100vh",
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Container>
          <Row>
          <div className={styles.questionsList}>
              <div className={styles.searchbox}>
                <div style={{ position: "relative" }}>
                <div className={styles.outerDiv}>
                <img
                    src="/Vector.png"
                    style={{
                      height: "18.76px",
                      position: "absolute",
                      right: "10px",
                      top: "8px",
                    }}
                    onClick={newSearch}
                  />
                  <input
                    className={styles.searchInput}
                    id="query"
                    type="text"
                    autoComplete="query"
                    value={query}
                    onChange={onChangeHandler}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          </Row>
        </Container>
        <Container>
          <Row>
            {searched && (
              <InfiniteScroll
                dataLength={posts.length}
                next={getMorePost}
                hasMore={hasMore}
                loader={
                  <div class="d-flex justify-content-center">
                    <div
                      className={`spinner-grow text-success ${styles.load}`}
                      role="status"
                    >
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                }
                endMessage={<h4 className={styles.nopost}>......</h4>}
                scrollableTarget="scrollableDiv"
              >
                <div className={styles.flexboxgrid}>
                  <div className={styles.gridnewbox}>
                    {" "}
                    {posts.map(
                      (
                        {
                          upVoteNumber,
                          downVoteNumber,
                          postByUser,
                          creator_by,
                          viewedByTheUsers,
                          categoryOfThePost,
                          ...data
                        },
                        index
                      ) => (
                        <div
                          style={{
                            padding: "0 5px",
                            marginLeft: "auto",
                            marginRight: "auto",
                          }}
                        >
                          <SearchBox
                            data={data}
                            categoryOfThePost={categoryOfThePost}
                            upVoteNumber={upVoteNumber}
                            downVoteNumber={downVoteNumber}
                            postByUser={postByUser}
                            viewedByTheUsers={viewedByTheUsers}
                          />
                        </div>
                      )
                    )}
                  </div>
                </div>
              </InfiniteScroll>
            )}
          </Row>
          <FooterToolbar />
        </Container>
        
      </div>
    </React.Fragment>
  );
};

export default Content;

export async function getServerSideProps({ query }) {
  if (!query.page) query.page = 1;
  try {
    const searchResult = await sendReq(
      SearchURL + `?search_query=${query}&page=${1}`
    );
    return{
      props: {
        question: searchResult.results,
        query,
      },
    }
  } catch (err) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
}
