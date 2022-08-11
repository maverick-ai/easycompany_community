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
import DesktopView from "../components/desktopview_search";
import PhoneView from "../components/phoneview_search"

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
    }, []);

    return (
        <div>
            {(winWidth) && (
                <PhoneView />
                 /* <Container>
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
                    <div style={{ width: "300px", height: "300px", marginLeft: "auto", marginRight: "auto",overflow:"visible" }}>
                        <div style={{ position: "relative", top: "10%", left: "30%" }}>
                            <span
                                style={{
                                    fontFamily: "Gloria Hallelujah,cursive",
                                    fontSize: "40px",
                                }}
                            >
                                Par
                            </span>
                        </div>
                        <div style={{ position: "relative", top: "-10%", left: "52%" }}>
                            <Image src="/Group.svg" height={60} width={27} quality={100} />
                        </div>
                        <div style={{ position: "relative", top: "-31%", left: "60%" }}>
                            <span
                                style={{
                                    fontFamily: "Gloria Hallelujah,cursive",
                                    fontSize: "40px",
                                }}
                            >
                                s
                            </span>
                        </div>
                        <div className={styles.london} style={{ position: "relative", top: "-43%", left: "-26%" }}>
                            <span style={{ fontSize: "35px" }}>London</span>
                        </div>
                        <div style={{ position: "relative", top: "45%", left: "-12%" }}>
                            <Image
                                src="/left_fly_arrow.png"
                                height={43}
                                width={88}
                                quality={100}
                            />
                        </div>
                        <div style={{ position: "relative", top: "-70%", left: "-5%" }}>
                            <Image
                                src="/Crown.png"
                                height={50}
                                width={37}
                                quality={100}
                            />
                        </div>
                        <div  style={{
                            position: "relative", top: "-50%", left: "70%", transform: "rotate(45deg)",
                            fontSize: "35px",
                            fontFamily: "'Gloria Hallelujah', cursive",
                        }}>
                            <span>Rome</span>
                        </div>
                        <div style={{ position: "relative", top: "-65%", left: "80%" }}>
                            <Image
                                src="/right_fly_arrow.png"
                                height={43}
                                width={88}
                                quality={100}
                            />
                        </div>
                        <div style={{ position: "relative", top: "-115%", left: "95%" }}>
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
                </Container>  */
            )
            }
            {
                (!winWidth) && (
                    <DesktopView/>
                )
            }
        </div>

    );
}
export default search_1;