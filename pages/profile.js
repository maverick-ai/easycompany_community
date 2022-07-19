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
import ProfileHead from "../components/profile/profileHead";
import Medal1 from "../components/profile/medal_box1";
import Medal2 from "../components/profile/medal_box2";
import Description from "../components/profile/description";
import QuestionProfile from "../components/profile/questions";
import TagsProfile from "../components/profile/profiletags";
import TopTags from "../components/profile/topTags";
import Bookmark from "../components/profile/bookmark";
import VoteCast from "../components/profile/votecast";

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
            <ProfileHead userData={userData} dateJoined={dateJoined} />
          </Col>
        </Row>

        {/* medal row  */}
        <Row className={styles.medalRow}>
          <Medal1 />
          <Medal2 />
        </Row>

        {/*----------- medal row end ------------*/}

        {/*--------- answer questions row ------- */}

        <Row className={styles.medalRow}>
          <Description />
          <QuestionProfile />
        </Row>

        {/*---------- tags reputation row-------- */}

        <Row className={styles.medalRow}>
          <TagsProfile />

          {/* reputation chart ------------- */}
          <TopTags />
        </Row>

        {/* -----------  */}

        {/* bookmark -------------------- */}
        <Row className={styles.medalRow}>
          <Bookmark />

          {/* votes cast start  */}
          <VoteCast />
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
  // console.log("aaaaaaaaaaaaaaaaaaa");

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
