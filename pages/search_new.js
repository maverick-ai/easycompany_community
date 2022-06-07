import styles from "../styles/Search.module.css";
import { useState, useEffect } from "react";
import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
import { Container, Row, Col } from "react-bootstrap";
import Styles from "../styles/utils.module.css";
import MobileCard from "/components/mobileSearchCard";
import style from "../styles/Search_new.module.scss";
import SearchQuestion from "../components/searchQuestion";
import SearchQuestion2 from "../components/searchQuestion2";

function search_1() {

    const [data, setData] = useState({ search: "" });
    const [winWidth, setWinWidth] = useState();

    const datanew = {
        pk: "fa63ddb2-a291-46fe-9d2a-dab875338086",
        title: "goa 4",
        votes: 0,
    };

    useEffect(() => {
        if (window.innerWidth <= 576) {
            setWinWidth(window.innerWidth);
        } else {
            setWinWidth(window.innerWidth);
        }
        window.addEventListener("resize", () => {
            if (window.innerWidth <= 576) {
                setWinWidth(window.innerWidth);
            } else {
                setWinWidth(window.innerWidth);
            }
        });
    }, []);

    return (
        <div>
            {(winWidth <= 576) && (
                <Container>
                    <Row>
                        <Col>
                            <Row style={{ marginTop: "100px", marginBottom: "10px" }}>
                                <Col>
                                    <div style={{ textAlign: "center" }}>
                                        <span>Find answers to your questions</span>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h1 style={{ fontSize: "64px", fontWeight: "700", marginBottom: "0px", lineHeight: "60px", textAlign: "center" }}>Search</h1>
                                    <div style={{ textAlign: "center" }}>
                                        <Image
                                            src={"/searchUnderline.png"}
                                            height={17}
                                            width={220}
                                            quality={100}
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={{ span: 6, offset: 1 }}>
                            <div
                                className={`${styles.inputoutert} ${styles.mobileInput} ${styles.searchinput}`}
                                style={{ display: "flex", flexDirection: "row", marginLeft: "auto", marginRight: "auto", marginTop: "35px" }}
                            >
                                <div style={{ marginTop: "12px", marginRight: "5px" }}>
                                    <Image
                                        src="/Vector.png"
                                        height={18.76}
                                        width={18.76}
                                        quality={100}
                                    />
                                </div>
                                <input
                                    className={`${styles.Input}`}
                                    id="query"
                                    type="text"
                                    autoComplete="query"
                                    value={data.search}
                                    onChange={(event) =>
                                        setData({ search: event.target.value })}
                                    required
                                    placeholder="Enter Search Term"
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Link href={{
                                pathname: "/search_detail",
                                query: data
                            }}>
                                <button className={Styles.btn} style={{ fontSize: "20px", width: "40%" }}>
                                    Submit
                                </button>
                            </Link>
                        </Col>
                    </Row>
                    <div style={{ position: "absolute", top: "48%", left: "36%" }}>
                        <Image
                            src="/Par_s.png"
                            height={40}
                            width={110}
                            quality={100}
                        />
                    </div>
                    <div style={{ position: "absolute", top: "46%", left: "52%" }}>
                        <Image
                            src="/tower.png"
                            height={60}
                            width={27}
                            quality={100}
                        />
                    </div>
                    <div style={{ position: "absolute", top: "49%", left: "6%" }}>
                        <Image
                            src="/London.png"
                            height={130}
                            width={100}
                            quality={100}
                        />
                    </div>
                    <div style={{ position: "absolute", top: "85%", left: "7%" }}>
                        <Image
                            src="/left_fly_arrow.png"
                            height={43}
                            width={88}
                            quality={100}
                        />
                    </div>
                    <div style={{ position: "absolute", top: "47%", left: "15%" }}>
                        <Image
                            src="/Crown.png"
                            height={50}
                            width={37}
                            quality={100}
                        />
                    </div>
                    <div style={{ position: "absolute", top: "51%", left: "72%" }}>
                        <Image
                            src="/Rome.png"
                            height={100}
                            width={100}
                            quality={100}
                        />
                    </div>
                    <div style={{ position: "absolute", top: "72%", left: "74%" }}>
                        <Image
                            src="/right_fly_arrow.png"
                            height={43}
                            width={88}
                            quality={100}
                        />
                    </div>
                    <div style={{ position: "absolute", top: "52%", left: "82%" }}>
                        <Image
                            src="/rome_build.png"
                            height={60}
                            width={45}
                            quality={100}
                        />
                    </div>
                    <footer style={{ position: "fixed", bottom: "70px", left: "-40px" }}>
                        <MobileCard />
                    </footer>
                </Container>
            )
            }
            {
                (winWidth > 576) && (
                    <div style={{ marginTop: "120px" }}>
                        <Row>
                            <Col lg="5">
                                <div style={{ marginLeft: "80px" }}>
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
                                <div style={{ marginTop: "18px", marginLeft: "80px", marginRight: "60px" }}>
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
                                <div style={{transform:"rotate(90deg)", width:"450px", marginTop:"-90px"}}>
                                <MobileCard />
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
                                        <div className={style.questionBox} style={{ marginLeft: "0" }}>
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
                                    <Col lg={{ span: 2 }}>
                                        <div className={style.img1_bor1}>
                                            <div className={style.img1_bor2}>
                                                <div className={style.img1}>
                                                    <Image
                                                        src="/apollo-photography-axL38h7YDdk-unsplash.png"
                                                        height={128}
                                                        width={80}
                                                        quality={100}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={{ span: 4, offset: 1 }}>
                                        <div className={style.questionBox} style={{ marginLeft: "0" }}>
                                            <SearchQuestion2
                                                data={datanew}
                                                upVoteNumber={22}
                                                downVoteNumber={10}
                                                viewsbytheuser={20}
                                                postByUser="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                                            />
                                        </div>
                                        <div className={style.pinkpole}>
                                        <img src="/pole.svg"/>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className={style.questionBox}>
                                            <SearchQuestion2
                                                data={datanew}
                                                upVoteNumber={22}
                                                downVoteNumber={10}
                                                viewsbytheuser={20}
                                                postByUser="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                                            />
                                        </div>
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: "50px" }}>
                                    <Col lg={{ span: 3 }}>
                                        <div className={style.questionBox}>
                                            <SearchQuestion
                                                data={datanew}
                                                upVoteNumber={22}
                                                downVoteNumber={10}
                                                viewsbytheuser={20}
                                                postByUser="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                                            />{" "}
                                        </div>
                                    </Col>
                                    <Col lg={{ offset: 5 }}>
                                        <div className={style.img2_bor1}>
                                            <div className={style.img2_bor2}>
                                                <div className={style.img2}>
                                                    <Image
                                                        src="/kilarov.png"
                                                        height={176}
                                                        width={128}
                                                        quality={100}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                )
            }
        </div>

    );
}
export default search_1;