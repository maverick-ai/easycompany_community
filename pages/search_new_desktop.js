import styles from "../styles/Search.module.css";
import { useState } from "react";
import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
import { Container, Row, Col } from "react-bootstrap";
import style from "../styles/Search_new.module.css";
import ImageHalo from "../components/imageHalo";
import QuestionBox from "./questions/questionBox";
import SearchQuestion from "../components/searchQuestion";
import SearchQuestion2 from "../components/searchQuestion2";

function search_1() {
  const [data, setData] = useState({ search: "" });

  const datanew = {
    pk: "fa63ddb2-a291-46fe-9d2a-dab875338086",
    title: "goa 4",
    votes: 0,
  };

  return (
    <Container style={{ marginTop: "80px" }}>
      <Row>
        <Col lg="5">
          <div>
            <div style={{ marginTop: "160px", fontSize: "18px" }}>
              <p>Find Answers To Your Questions</p>
            </div>

            <h1
              style={{
                marginTop: "0",
                fontSize: "70px",
                fontWeight: "700",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Search
            </h1>
          </div>
          <div style={{ marginTop: "18px" }}>
            <div className={styles.newSearchBox}>
              <div className={styles.ImgQues1}>
                <Image
                  src={"/Vector.png"}
                  height={18.76}
                  width={18.76}
                  quality={100}
                />
              </div>

              <input
                className={styles.searchInput1}
                style={{
                  backgroundColor: "black",
                  width: "80%",
                  height: "60px",
                }}
                id="query"
                type="text"
                autoComplete="query"
                value={data.search}
                onChange={(event) => setData({ search: event.target.value })}
                required
              />
            </div>
            <Link
              href={{
                pathname: "/search_detail",
                query: data,
              }}
            >
              <button className={styles.submitButton}>Submit</button>
            </Link>
          </div>
        </Col>
        <Col>
          <Row>
            <Col>
              <div className={style.questionBox}>
                <div className={style.border1}>
                  <div className={style.border2}>
                    <div className={style.inner}>
                      <SearchQuestion
                        data={datanew}
                        upVoteNumber={22}
                        downVoteNumber={10}
                        viewsbytheuser={20}
                        postByUser="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className={style.questionBox}>
                <div className={style.border1}>
                  <div className={style.border2}>
                    <div className={style.inner}>
                      <SearchQuestion
                        data={datanew}
                        upVoteNumber={22}
                        downVoteNumber={10}
                        viewsbytheuser={20}
                        postByUser="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row style={{ marginTop: "50px" }}>
            <Col lg={{ offset: 4 }}>
              <div className={style.questionBox}>
                <SearchQuestion2
                  data={datanew}
                  upVoteNumber={22}
                  downVoteNumber={10}
                  viewsbytheuser={20}
                  postByUser="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
              </div>
              <div className={style.pinkpole}>
                <Image
                  src="/pinkpole.svg"
                  height={230}
                  width={195}
                  quality={100}
                ></Image>
              </div>
            </Col>
          </Row>
          <Row style={{ marginTop: "50px" }}>
            {/* <div className={style.smalldiv1}></div>
            <div className={style.questionBox}></div> */}
          </Row>

          {/* <div className={style.smalldiv2}></div> */}
        </Col>
      </Row>
    </Container>
  );
}
export default search_1;
