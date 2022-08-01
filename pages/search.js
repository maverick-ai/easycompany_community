import styles from "../styles/Search.module.scss";
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
    const [sPhone,setSphone] = useState();

    const datanew = {
        pk: "fa63ddb2-a291-46fe-9d2a-dab875338086",
        title: "goa 4",
        votes: 0,
    };

    useEffect(() => {
        if (window.innerWidth <= 1020) {
            setWinWidth(true);
        } else {
            setWinWidth(false);
        }
        window.addEventListener("resize", () => {
            if (window.innerWidth <= 1020) {
                setWinWidth(true);
            } else {
                setWinWidth(false);
            }
        });
        if (window.innerWidth <= 450) {
            setSphone(true);
        } else {
            setSphone(false);
        }
        window.addEventListener("resize", () => {
            if (window.innerWidth <= 450) {
                setSphone(true);
            } else {
                setSphone(false);
            }
        });


    }, []);

    return (
        <div>
            {(winWidth) && (
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
                        <div style={{ position: "relative", top: "15%", left: "30%" }}>
                            <span
                                style={{
                                    fontFamily: "Gloria Hallelujah,cursive",
                                    fontSize: "40px",
                                }}
                            >
                                Par
                            </span>
                        </div>
                        <div style={{ position: "relative", top: "-8%", left: "52%" }}>
                            <Image src="/Group.svg" height={60} width={27} quality={100} />
                        </div>
                        <div style={{ position: "relative", top: "-27%", left: "60%" }}>
                            <span
                                style={{
                                    fontFamily: "Gloria Hallelujah,cursive",
                                    fontSize: "40px",
                                }}
                            >
                                s
                            </span>
                        </div>
                        {(sPhone) ? 
                            (<div className={styles.london} style={{top:"-40%" , left:"-27%"}}>
                            <span style={{ fontSize: "40px" }} >London</span>
                        </div>) : (<div className={styles.london} style={{top:"-40%" , left:"-35%"}}>
                            <span style={{ fontSize: "40px" }} >London</span>
                        </div>)}
                        
                        
                        <div style={{ position: "relative", top: "45%", left: "-12%" }}>
                            <Image
                                src="/left_fly_arrow.png"
                                height={43}
                                width={88}
                                quality={100}
                            />
                        </div>
                        {sPhone?(<div style={{ position: "relative", top: "-72%", left: "-7%" }}>
                            <Image
                                src="/Crown.png"
                                height={50}
                                width={37}
                                quality={100}
                            />
                        </div>):(<div style={{ position: "relative", top: "-74%", left: "-22%" }}>
                            <Image
                                src="/Crown.png"
                                height={50}
                                width={37}
                                quality={100}
                            />
                        </div>)}
                        {(sPhone) ? 
                            (<div style={{
                            position: "relative", top: "-50%", left: "70%", transform: "rotate(45deg)",
                            fontSize: "40px",
                            fontFamily: "'Gloria Hallelujah', cursive",
                        }}>
                            <span>Rome</span>
                        </div>) : (<div style={{
                            position: "relative", top: "-50%", left: "75%", transform: "rotate(45deg)",
                            fontSize: "40px",
                            fontFamily: "'Gloria Hallelujah', cursive",
                        }}>
                            <span>Rome</span>
                        </div>)}
                        
                        <div style={{ position: "relative", top: "-65%", left: "80%" }}>
                            <Image
                                src="/right_fly_arrow.png"
                                height={43}
                                width={88}
                                quality={100}
                            />
                        </div>
                        <div style={{ position: "relative", top: "-115%", left: "100%" }}>
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
                (!winWidth) && (
                    <div style={{ marginTop: "110px" }}>
                        <Row>
                            <Col lg="5">
                                <div style={{ marginLeft: "50px" }}>
                                    <div style={{ marginTop: "60px", fontSize: "14px" }}>
                                        <p>Find Answers To Your Questions</p>
                                    </div>

                                    <h1
                                        style={{
                                            marginTop: "0",
                                            fontSize: "50px",
                                            fontWeight: "700",
                                            fontFamily: "Poppins, sans-serif",
                                        }}
                                    >
                                        Search
                                    </h1>
                                </div>
                                <div style={{ marginTop: "0", marginLeft: "50px", marginRight: "60px" }}>
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
                                                height: "50px",
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
                                        style={{ zIndex: "5" }}
                                        href={{
                                            pathname: "/search_detail",
                                            query: data,
                                        }}
                                    >
                                        <button style={{ zIndex: "90" }} className={styles.submitButton}>Submit</button>
                                    </Link>
                                </div>
                                <div style={{ transform: "rotate(90deg)", width: "100px", marginTop: "-110px", marginLeft:"170px" }}>
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
                                                        height={140}
                                                        width={102}
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