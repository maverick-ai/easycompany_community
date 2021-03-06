import styles from "../styles/Search.module.css";
import React, { useState, useEffect, useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { SearchURL } from "../components/constants";

import { sendReq } from "../components/requests";

import { Container, Row, Col } from "react-bootstrap";
import Image from "next/dist/client/image";
import { CSSGrid, measureItems, makeResponsive } from "react-stonecutter";
import SearchBox from "./searchbox";

var page = 1;
var str = "";

const Content = () => {
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [searched, setSearched] = useState(false);
  const query = useRef();
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
  const Grid = makeResponsive(measureItems(CSSGrid), {
    maxWidth: 1920,
    minPadding: 100,
  });

  const newSearch = () => {
    page = 1;
    setHasMore(true);
    str = query.current.value;
    setPosts([]);
    setSearched(true);
    getMorePost();
  };

  const getMorePost = async () => {
    console.log(`?search_query=${str}&page=${page}`);
    const newPosts = await sendReq(
      SearchURL + `?search_query=${str}&page=${page}`
    );
    if (newPosts.next) page += 1;
    else setHasMore(false);
    console.log(newPosts);
    setPosts((post) => [...post, ...newPosts.results]);
  };

  return (
    // search-bar
    <React.Fragment>
      <Container>
        <Row>
          <div className={styles.questionsList}>
            <Col lg={{ span: 6, offset: 3 }}>
              <div className={styles.searchbox}>
                <Row>
                  <Col lg={10} md={8} sm={8} xs={6}>
                    <input
                      className={styles.searchInput}
                      id="query"
                      type="text"
                      autoComplete="query"
                      ref={query}
                      required
                    />
                  </Col>
                  <Col lg={2} md={4} sm={4} xs={6}>
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
          <div>
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
              >
                {" "}
                <Grid
                  className={styles.gridClass}
                  component="ul"
                  columns={3}
                  columnWidth={420}
                  gutterWidth={20}
                  gutterHeight={20}
                  itemHeight={316}
                  enter={gridEnterExitStyle.enter}
                  entered={gridEnterExitStyle.entered}
                  exit={gridEnterExitStyle.exit}
                  duration={400}
                  springConfig={{ stiffness: 60, damping: 12 }}
                >
                  {console.log(posts)}
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
                      <li key={index}>
                        <SearchBox
                          data={data}
                          categoryOfThePost={categoryOfThePost}
                          upVoteNumber={upVoteNumber}
                          downVoteNumber={downVoteNumber}
                          postByUser={postByUser}
                        />
                      </li>
                    )
                  )}
                </Grid>
              </InfiniteScroll>
            )}
          </div>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Content;
