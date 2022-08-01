import { Row, Col } from "react-bootstrap";
import Image from "next/dist/client/image";
import styles from "../styles/Search.module.scss";
import style from "../styles/Search_new.module.scss";
import Link from "next/dist/client/link";
import MobileCard from "/components/mobileSearchCard";
import SearchQuestion from "../components/searchQuestion";
import SearchQuestion2 from "../components/searchQuestion2";
import s from "./desktopview_search.module.css"

import { useState } from "react";

function DesktopView(){

    const [data, setData] = useState({ search: "" });

    const datanew = {
        pk: "fa63ddb2-a291-46fe-9d2a-dab875338086",
        title: "goa 4",
        votes: 0,
    };


    return(<div className={s.Main}>
    <Row>
        <Col lg="5">
            <div className={s.lefthalf}>
                <div className={s.find}>
                    <p>Find Answers To Your Questions</p>
                </div>

                <h1
                    className={s.search}
                >
                    Search
                </h1>
            </div>
            <div className={s.sinput}>
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
                        id="query"
                        type="text"
                        autoComplete="query"
                        value={data.search}
                        onChange={(event) => setData({ search: event.target.value })}
                        required
                    />
                </div>
                <Link
                    className={s.link}
                    href={{
                        pathname: "/search_detail",
                        query: data,
                    }}
                >
                    <button style={{ zIndex: "90" }} className={styles.submitButton}>Submit</button>
                </Link>
            </div>
            <div className={s.mobilecard}>
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
            <Row className={s.righthalf}>
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
            <Row className={s.righthalf}>
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
</div>)
}

export default DesktopView;






