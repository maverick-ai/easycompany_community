import { sendReq } from "../components/requests";
import React from "react";
import cookie from "cookie";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/dist/client/image";
import styles from "../styles/Profile.module.css";

import {
  UserProfileURL,
  UserPostsURL,
  UserSolutionsURL,
  PublicUserProfileURL,
  PublicUserSolutionsURL,
  PublicUserPostsURL,
} from "../components/constants";

import { useState, useEffect } from "react";
import moment from "moment";

// import { Line } from "react-chartjs-2";

const Profile = ({ userData, query, login }) => {
  // const [avatarURL, setAvatarURL] = useState("");

  // useEffect(() => {
  //   if (!userData.gender || userData.gender == "M") {
  //     userData.gender = "male";
  //   } else {
  //     userData.gender = "female";
  //   }
  //   setAvatarURL(
  //     `https://avatars.dicebear.com/api/${userData.gender}/${
  //       userData.first_name + userData.last_name
  //     }.svg`
  //   );
  // }, []);
  console.log(userData);
  console.log(query);
  const dateJoined = moment(userData.date_joined).format("MMM Do YY");
  console.log(dateJoined);

  const [newUser, setNewUser] = useState({
    labels: ["A", "B", "C", "D"],
    datasets: [
      {
        data: [12, 22, 33, 44],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  });

  return (
    <React.Fragment>
      <Container style={{ width: "90%" }}>
        <Row className={styles.toprow}>
          {/* <Col lg={{ span: 1 }}></Col> */}

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
              <div className={styles.emptybox1} />
              <Col>
                <Row className={styles.nameRow}>
                  <span className={styles.name}>
                    {userData.first_name} {userData.last_name}
                  </span>
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
                        <span>member since {dateJoined}</span>
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
                  <div className={styles.button1}>
                    <button className={styles.buttonEdit}>Edit Profile</button>
                  </div>
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
              <Row
                style={{
                  width: "70%",
                  margin: "0 auto",
                  paddingTop: "7%",
                }}
              >
                <div style={{ display: "flex", marginTop: "10%" }}>
                  <div
                    style={{
                      width: "90px",
                      height: "24px",
                      borderRadius: "12px",
                      backgroundColor: "#121212",
                      textAlign: "center",
                      margin: "auto",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "13px",
                        margin: "auto",
                        fontFamily: "Poppins",
                      }}
                    >
                      tagss
                    </span>
                  </div>
                  <div style={{ width: "40%", height: "100%" }}></div>

                  <div style={{ display: "flex", fontFamily: "Poppins" }}>
                    <h3
                      style={{
                        fontsize: "16px",
                        margin: "auto 20px auto 0",
                      }}
                    >
                      score
                    </h3>{" "}
                    <div className={styles.gradientText}>
                      <h3
                        style={{
                          fontSize: "24px",
                          fontWeight: "600",
                          margin: "auto",
                          paddingTop: "5px",
                        }}
                      >
                        88
                      </h3>
                    </div>
                  </div>
                </div>
              </Row>
            </div>
          </Col>

          {/* reputation chart ------------- */}
          <Col>
            <div className={styles.medalbox1}>
              <div className={styles.chart}>
                {/* <Line data={newUser} /> */}
              </div>
              <Row style={{ width: "70%", margin: "0 auto" }}>
                <div
                  style={{
                    marginTop: "25px",
                    width: "50%",
                    textAlign: "center",
                  }}
                >
                  <span
                    style={{
                      padding: "10px",
                      fontSize: "24px",
                      fontFamily: "Poppins",
                    }}
                  >
                    12
                  </span>
                  <div className={styles.chartBox}>
                    <span>+12</span>
                  </div>
                </div>
                <div
                  style={{
                    marginTop: "25px",
                    width: "50%",
                    textAlign: "center",
                  }}
                >
                  <span
                    style={{
                      padding: "10px",
                      fontSize: "24px",
                      fontFamily: "Poppins",
                    }}
                  >
                    Top Tags
                  </span>
                  <div
                    style={{
                      width: "90px",
                      height: "24px",
                      borderRadius: "12px",
                      backgroundColor: "#121212",
                      textAlign: "center",
                      margin: "auto",
                      marginTop: "10px",
                      fontFamily: "Poppins",
                    }}
                  >
                    <span>+12</span>
                  </div>
                </div>
              </Row>
            </div>
          </Col>
        </Row>

        {/* -----------  */}

        {/* bookmark -------------------- */}
        <Row className={styles.medalRow}>
          <Col styles={{ paddingLeft: "50px" }}>
            <div className={styles.medalbox} style={{ padding: "70px" }}>
              <div style={{ display: "flex" }}>
                <div>lorem ipsum lorem?</div>
                <img
                  src="/bookmark.svg"
                  alt=""
                  style={{ marginLeft: "auto", marginRight: "15%" }}
                />
              </div>
            </div>
          </Col>

          {/* votes cast start  */}
          <Col>
            <div className={styles.medalbox1}>
              <div style={{ padding: "50px", display: "flex" }}>
                <div style={{ width: "50%" }}>
                  <h2
                    style={{
                      fontSize: "24px",
                      fontFamily: "Poppins",
                    }}
                  >
                    All Time
                  </h2>
                  <div style={{ display: "flex", margin: "10px 0" }}>
                    <div className={styles.gradientText}>
                      <h3
                        style={{
                          fontSize: "16px",
                          fontWeight: "600",
                          margin: "auto",
                          paddingTop: "5px",
                        }}
                      >
                        226
                      </h3>
                    </div>
                    <h4
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        marginLeft: "50px",
                        marginTop: "6px",
                      }}
                    >
                      Up
                    </h4>
                  </div>
                  <div style={{ display: "flex", margin: "10px 0" }}>
                    <div className={styles.gradientText}>
                      <h3
                        style={{
                          fontSize: "16px",
                          fontWeight: "600",
                          margin: "auto",
                          paddingTop: "5px",
                        }}
                      >
                        226
                      </h3>
                    </div>
                    <h4
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        marginLeft: "50px",
                        marginTop: "6px",
                      }}
                    >
                      Down
                    </h4>
                  </div>
                  <h2
                    style={{
                      fontSize: "24px",
                      fontFamily: "Poppins",
                      marginTop: "20px",
                    }}
                  >
                    Month
                  </h2>
                  <div style={{ display: "flex", margin: "10px 0" }}>
                    <div className={styles.gradientText}>
                      <h3
                        style={{
                          fontSize: "16px",
                          fontWeight: "600",
                          margin: "auto",
                          paddingTop: "5px",
                        }}
                      >
                        226
                      </h3>
                    </div>
                  </div>
                </div>
                {/* end of first coloumn in votes ----------- */}

                <div style={{ width: "50%", marginLeft: "80px" }}>
                  <h2
                    style={{
                      fontSize: "24px",
                      fontFamily: "Poppins",
                    }}
                  >
                    By Type
                  </h2>
                  <div style={{ display: "flex", margin: "10px 0" }}>
                    <div className={styles.gradientText}>
                      <h3
                        style={{
                          fontSize: "16px",
                          fontWeight: "600",
                          margin: "auto",
                          paddingTop: "5px",
                        }}
                      >
                        226
                      </h3>
                    </div>
                    <h4
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        marginLeft: "50px",
                        marginTop: "6px",
                      }}
                    >
                      Questions
                    </h4>
                  </div>
                  <div style={{ display: "flex", margin: "10px 0" }}>
                    <div className={styles.gradientText}>
                      <h3
                        style={{
                          fontSize: "16px",
                          fontWeight: "600",
                          margin: "auto",
                          paddingTop: "5px",
                        }}
                      >
                        226
                      </h3>
                    </div>
                    <h4
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        marginLeft: "50px",
                        marginTop: "6px",
                      }}
                    >
                      Answers
                    </h4>
                  </div>
                  <h2
                    style={{
                      fontSize: "24px",
                      fontFamily: "Poppins",
                      marginTop: "20px",
                    }}
                  >
                    Days
                  </h2>
                  <div style={{ display: "flex", margin: "10px 0" }}>
                    <div className={styles.gradientText}>
                      <h3
                        style={{
                          fontSize: "16px",
                          fontWeight: "600",
                          margin: "auto",
                          paddingTop: "5px",
                        }}
                      >
                        22
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className={styles.medalRow}>
          <Col styles={{ paddingLeft: "50px" }}>
            <div className={styles.medalbox}>
              <div
                style={{
                  width: "60%",
                  padding: "50px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <span>accounts easycompanyS</span>
              </div>
            </div>
          </Col>
          <Col>
            <div className={styles.medalbox1}>
              <div style={{ padding: "50px", display: "flex" }}>
                <div style={{ width: "50%" }}>
                  <span style={{ fontSize: "24px", marginTop: "50px" }}>
                    People Reached{" "}
                  </span>
                  <div className={styles.gradientText}>
                    <h3
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        margin: "auto",
                        paddingTop: "20px",
                      }}
                    >
                      22
                    </h3>
                  </div>
                </div>
                <div style={{ width: "50%", marginLeft: "60px" }}>
                  <span
                    style={{
                      fontSize: "24px",
                      marginTop: "50px",
                    }}
                  >
                    Edited Posts{" "}
                  </span>
                  <div className={styles.gradientText}>
                    <h3
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        margin: "auto",
                        paddingTop: "20px",
                      }}
                    >
                      22
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Profile;

export async function getServerSideProps({ query, req }) {
  let userData = {};
  console.log("aaaaaaaaaaaaaaaaaaa");

  console.log(req.connection.remoteAddress, req.headers);
  try {
    if (query.user) {
      userData = await sendReq(`${PublicUserProfileURL}${query.user}/`);
    } else if (req.headers.cookie) {
      userData = await sendReq(`${UserProfileURL}`, req.headers.cookie);
    } else {
      throw "redirect to login";
    }
    console.log(userData);
  } catch (err) {
    console.log(err);
    if (err == "redirect to login") {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    } else {
      return {
        redirect: {
          destination: "/404",
          permanent: false,
        },
      };
    }
  }
  return {
    props: {
      userData,
      query,
    },
  };
}
