import styles from "../styles/Search.module.scss";
import React, { useState, useEffect, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { SearchURL } from "../components/constants";

import { sendReq } from "../components/requests";

import { Container, Row, Col } from "react-bootstrap";
import Image from "next/dist/client/image";
import Masonry from "react-masonry-component";
import SearchBox from "../components/searchbox";
import { useRouter } from "next/router";
import Link from "next/dist/client/link";

// var page = 1;

const Content = () => {
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [searched, setSearched] = useState(false);
  const router = useRouter();
  const [query, setQuery] = useState(router.query.search);

  const [page, setPage] = useState(1);

  const enterExitStyles = [
    "Simple",
    "Skew",
    "Newspaper",
    "Fold Up",
    "From Center",
    "From Left to Right",
    "From Top",
    "From Bottom",
  ];
  const gridEnterExitStyle = enterExitStyles[7];

  const getMorePost = async () => {
    const newPosts = await sendReq(
      SearchURL + `?search_query=${query}&page=${page}`
    );

    // console.log(newPosts);
    setPosts((post) => [...post, ...newPosts.results]);
    if (newPosts.next !== null) {
      setPage((page = page + 1));
      setHasMore(true);
    } else {
      setHasMore(false);
    }
    // console.log("getMorePost");
    // console.log(page);
  };

  const newSearch = () => {
    setPage((page = 1));
    // console.log("newSearch");
    // console.log(page);
    setHasMore(true);
    setPosts([]);
    setSearched(true);
    getMorePost();
  };
  // console.log(posts.length);

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
              <Col lg={{ span: 6, offset: 3 }}>
                <div className={styles.searchbox}>
                  <Row>
                    <Col lg={9} md={9} sm={9} xs={9}>
                      <input
                        className={styles.searchInput}
                        id="query"
                        type="text"
                        autoComplete="query"
                        value={query}
                        onChange={onChangeHandler}
                        required
                      />
                    </Col>
                    <Col lg={3} md={3} sm={3} xs={3}>
                      <div className={styles.ImgQues}>
                        <Image
                          src={"/Vector.png"}
                          height={18.76}
                          width={18.76}
                          quality={100}
                          onClick={newSearch}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </div>
          </Row>
        </Container>
        {/* // end_searchbox */}
        <Container>
          <Row>
            <Col>
              <h1>Trending Questions</h1>
            </Col>
          </Row>
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
                      <span class="sr-only">Loading...</span>
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
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Content;

// export async function getServerSideProps({ query }) {
//   if (!query.page) query.page = 1;
//   try {
//     const searchResult = await sendReq(
//       SearchURL + `?search_query=${query}&page=${1}`
//     );
//   } catch (err) {
//     return {
//       redirect: {
//         destination: "/404",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       question: searchResult.results,
//       query,
//     },
//   };
// }
