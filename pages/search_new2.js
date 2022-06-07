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
        if (window.innerWidth <= 1020) {
            setWinWidth(window.innerWidth);
        } else {
            setWinWidth(window.innerWidth);
        }
        window.addEventListener("resize", () => {
            if (window.innerWidth <= 1020) {
                setWinWidth(window.innerWidth);
            } else {
                setWinWidth(window.innerWidth);
            }
        });
    }, []);

    return (
        <div>
            {(winWidth <= 1020) && (
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
                        <Col>
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
                    <div style={{ width: "300px", height: "300px", marginLeft: "auto", marginRight: "auto" }}>
                        <div style={{ position: "relative", top: "20%", left: "30%" }}>
                            <Image
                                src="/Par_s.png"
                                height={40}
                                width={110}
                                quality={100}
                            />
                        </div>
                        <div style={{ position: "relative", top: "0", left: "52%" }}>
                            <Image
                                src="/tower.png"
                                height={60}
                                width={27}
                                quality={100}
                            />
                        </div>
                        <div style={{ position: "relative", top: "0", left: "-20%" }}>
                            <Image
                                src="/London.png"
                                height={130}
                                width={100}
                                quality={100}
                            />
                        </div>
                        <div style={{ position: "relative", top: "45%", left: "-12%" }}>
                            <Image
                                src="/left_fly_arrow.png"
                                height={43}
                                width={88}
                                quality={100}
                            />
                        </div>
                        <div style={{ position: "relative", top: "-67%", left: "-7%" }}>
                            <Image
                                src="/Crown.png"
                                height={50}
                                width={37}
                                quality={100}
                            />
                        </div>
                        <div style={{ position: "relative", top: "-75%", left: "85%" }}>
                            <Image
                                src="/Rome.png"
                                height={100}
                                width={100}
                                quality={100}
                            />
                        </div>
                        <div style={{ position: "relative", top: "-65%", left: "80%" }}>
                            <Image
                                src="/right_fly_arrow.png"
                                height={43}
                                width={88}
                                quality={100}
                            />
                        </div>
                        <div style={{ position: "relative", top: "-125%", left: "100%" }}>
                            <Image
                                src="/rome_build.png"
                                height={60}
                                width={45}
                                quality={100}
                            />
                        </div>
                        <div style={{ position: "relative", bottom: "430px", left: "auto", right: "auto" }}>
                            <MobileCard />
                        </div>
                    </div>
                </Container>
            )
            }
            {
                (winWidth > 1020) && (
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
                                        style={{ zIndex: "200" }}
                                        href={{
                                            pathname: "/search_detail",
                                            query: data,
                                        }}
                                    >
                                        <button className={styles.submitButton}>Submit</button>
                                    </Link>
                                </div>
                                <div style={{ transform: "rotate(90deg)", width: "450px", marginTop: "-90px" }}>
                                    <MobileCard />
                                </div>
                            </Col>
                            <Col>
                                <Row>
                                    <div>
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
                                    </div>
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
                                    <Col lg={{ span: 4 }}>
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
                                            <img src="/pole.svg" />
                                        </div>
                                    </Col>
                                    <Col lg={{ span: 4, offset: 2 }}>
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
                                        <div className={style.questionBox} style={{ marginLeft: "0" }}>
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

                                {/* <div className={style.smalldiv2}></div> */}
                            </Col>
                        </Row>
                    </div>
                )
            }
        </div>

    );
}
export default search_1;