import styles from "../styles/Search.module.css";
import { useState, useEffect } from "react";
import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
import { Container, Row, Col } from "react-bootstrap";
import Styles from "../styles/utils.module.css";
import MobileCard from "/components/mobileSearchCard";

function search_1() {

    const [data, setData] = useState({ search: "" });
    const [winWidth, setWinWidth] = useState();

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
                                <div style={{ marginTop: "12px", marginRight:"5px" }}>
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
                    <div style={{ position: "absolute", top: "49%", left:"6%" }}>
                        <Image
                            src="/London.png"
                            height={130}
                            width={100}
                            quality={100}
                        />
                    </div>
                    <div style={{ position: "absolute", top: "85%", left:"7%" }}>
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
                    <footer style={{position:"fixed", bottom:"70px", left:"-40px"}}>
                        <MobileCard />
                    </footer>
                </Container>
            )
            }
            {
                (winWidth > 576) && (
                    <Container>
                        <div style={{ marginTop: "100px" }}>
                            <input
                                className={styles.searchInput}
                                style={{ border: "2px solid white" }}
                                id="query"
                                type="text"
                                autoComplete="query"
                                value={data.search}
                                onChange={(event) =>
                                    setData({ search: event.target.value })}
                                required
                            />
                            <div className={styles.ImgQues}>
                                <Link href={{
                                    pathname: "/search_detail",
                                    query: data
                                }}>
                                    <Image
                                        src={"/Vector.png"}
                                        height={18.76}
                                        width={18.76}
                                        quality={100}

                                    />
                                </Link>
                            </div>
                        </div>
                    </Container>
                )
            }
        </div>

    );
}
export default search_1;