import React from "react";
import styles from "./fourth_page_home.module.scss";
import { Row, Carousel } from "react-bootstrap";
// import { Carousel, CarouselItem } from "react-multi-carousel";

function Fourth_page_tab() {
    return (
        <React.Fragment>
            <Row className={styles.pageContainer}>
                <div className={styles.heading}>
                    <span className={styles.love1}>
                        Who Are We?
                        <span>
                            <img
                                src="phone_assets/arrowplane.png"
                                className={styles.arorrr}
                            />
                        </span>
                    </span>
                </div>
                <img 
                    src="/search glass.png" 
                    className={styles.search}     
                />
                <div className={styles.horzrule} />
                <div className={styles.carosuleDiv}>
                    <Carousel
                        controls={false}
                        indicators={false}
                        touch={true}
                        interval={10000}
                    >
                        <Carousel.Item>
                            <div className={styles.whop}>
                                <p>
                                    A free digital space where hundreds of thousands of people <br />
                                    can share their knowledge about travel and tourism in an <br />
                                    open forum.
                                </p>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className={styles.whop}>
                                <p>
                                    At Easycommunity, we believe you should see as much of the <br />
                                    world as possible. Easycommunity is building a digital space <br />
                                    to find and contribute answers regarding travel and tourism. <br />
                                </p>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className={styles.whop}>
                                <p>
                                    You might not be able to get your mom on the phone to know <br />
                                    what to pack, but there's another way to find trusted <br />
                                    answers before your trip: from Easycommunity.
                                </p>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className={styles.bottomHr} />
                <img src="/Right Arrow.png" className={styles.rightArrow} />
            </Row>
        </React.Fragment>
    );
}

export default Fourth_page_tab;