import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/dist/client/image";
import styles from "../styles/Profile.module.css";
import Box from "./questions/box";
import { Chart } from "../components/chart";
import {
  UserProfileURL,
  UserPostsURL,
  UserSolutionsURL,
  PublicUserProfileURL,
  PublicUserSolutionsURL,
  PublicUserPostsURL,
} from "../components/constants";

function Profile1() {
  return (
    <React.Fragment>
      <Container>
        <Row className={styles.toprow}>
          <Col lg={{ span: 1 }}></Col>
          <div className={styles.imgBorder}>
            <Image
              className={styles.profileImg}
              src="/img1.jpg"
              height={200}
              width={200}
              quality={100}
            />
          </div>

          <Col lg={8}>
            <Row>
              <div style={{ width: "27px" }} />
              <Col>
                <Row className={styles.nameRow}>
                  <h1>riya chaturvedi</h1>
                </Row>
                <Row className={styles.middleRow}>
                  <Col>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <div className={styles.imgWrap}>
                        <Image
                          src="/smalliconprofile.svg"
                          height={20}
                          width={20.55}
                          quality={100}
                        />
                      </div>

                      <div style={{ marginBottom: "3px" }}>
                        <span>member since may 10th</span>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <div className={styles.imgWrap}>
                        <Image
                          src="/smalliconprofile.svg"
                          height={20}
                          width={20.55}
                          quality={100}
                        />
                      </div>

                      <div style={{ marginBottom: "3px" }}>
                        <span>member since may 10th</span>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <div className={styles.imgWrap}>
                        <Image
                          src="/smalliconprofile.svg"
                          height={20}
                          width={20.55}
                          quality={100}
                        />
                      </div>

                      <div style={{ marginBottom: "3px" }}>
                        <span>member since may 10th</span>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className={styles.middleRow}>
                  <Col>
                    <button className={styles.buttonEdit}>Edit Profile</button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* medal row  */}
        <Row className={styles.medalRow}>
          <Col styles={{ paddingLeft: "50px" }}>
            <div className={styles.medalbox}>
              <div
                style={{
                  paddingTop: "47px",
                  marginRight: "auto",
                  marginLeft: "30px",
                  display: "flex",
                }}
              >
                <img
                  src="/goldmedal.svg"
                  alt="medal"
                  style={{ width: "51px", height: "35px" }}
                />
                <div style={{ padding: "7px 10px 0" }}>
                  <h5 style={{ fontSize: "20px" }}>lorem ipsum</h5>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className={styles.medalbox1}>
              <div
                style={{
                  paddingTop: "47px",
                  marginRight: "auto",
                  marginLeft: "30px",
                  display: "flex",
                }}
              >
                <img
                  src="/goldmedal.svg"
                  alt="medal"
                  style={{ width: "51px", height: "35px" }}
                />
                <div style={{ padding: "7px 10px 0" }}>
                  <h5 style={{ fontSize: "20px" }}>lorem ipsum</h5>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/*----------- medal row end ------------*/}

        {/*--------- answer questions row ------- */}

        <Row className={styles.medalRow}>
          <Col styles={{ paddingLeft: "50px" }}>
            <div
              className={styles.medalbox}
              style={{ padding: "39px 19px 49px" }}
            >
              <div style={{ display: "flex", marginBottom: "10px" }}>
                <div className={styles.smallBox} />
                <div style={{ margin: "10px auto 0" }}>
                  <p>description description descrip</p>
                </div>
                <div style={{ marginTop: "10px", marginLeft: "auto" }}>
                  <p>date dd/mm/yyyy</p>
                </div>
              </div>

              <div style={{ display: "flex", marginBottom: "10px" }}>
                <div className={styles.smallBox} />
                <div style={{ margin: "10px auto 0" }}>
                  <p>description description descrip</p>
                </div>
                <div style={{ marginTop: "10px", marginLeft: "auto" }}>
                  <p>date dd/mm/yyyy</p>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div
              className={styles.medalbox1}
              style={{ padding: "39px 19px 49px" }}
            >
              <div style={{ display: "flex", marginBottom: "10px" }}>
                <div className={styles.smallBox} />
                <div style={{ margin: "10px auto 0" }}>
                  <p>description description descrip</p>
                </div>
                <div style={{ marginTop: "10px", marginLeft: "auto" }}>
                  <p>date dd/mm/yyyy</p>
                </div>
              </div>

              <div style={{ display: "flex", marginBottom: "10px" }}>
                <div className={styles.smallBox} />
                <div style={{ margin: "10px auto 0" }}>
                  <p>description description descrip</p>
                </div>
                <div style={{ marginTop: "10px", marginLeft: "auto" }}>
                  <p>date dd/mm/yyyy</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/*---------- tags reputation row-------- */}

        <Row className={styles.medalRow}>
          <Col styles={{ paddingLeft: "50px" }}>
            <div className={styles.medalbox}>
              <Row>
                <Col lg={{ span: 2, offset: 3 }}>
                  <div>
                    <h5>tagss</h5>
                  </div>
                </Col>
                <Col lg={{ offset: 3 }}>
                  <div style={{ display: "flex" }}>
                    {" "}
                    <h3>score</h3> <h3>888</h3>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>

          {/* reputation chart ------------- */}
          <Col>
            <div className={styles.medalbox1}>
              <div className={styles.chart}>
                {/* <Chart chartdata={data}/> */}
              </div>
            </div>
          </Col>
        </Row>

        {/* -----------  */}
        <Row className={styles.medalRow}>
          <Col styles={{ paddingLeft: "50px" }}>
            <div className={styles.medalbox}></div>
          </Col>
          <Col>
            <div className={styles.medalbox1}></div>
          </Col>
        </Row>
        <Row className={styles.medalRow}>
          <Col styles={{ paddingLeft: "50px" }}>
            <div className={styles.medalbox}></div>
          </Col>
          <Col>
            <div className={styles.medalbox1}></div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Profile1;
