import React, { useEffect } from "react";
import PollBox_A from "../components/poll";
import { Container, Row, Col } from "react-bootstrap";
import Masonry from "react-masonry-component";

const Dummy_data = [
  {
    id: 1,
    question: "Comment on the current situaton regarding crypto market",
    optionA: "Extremly Volatile",
    optionB: "Moderately Volatile",
    optionc: "Stable",
  },
  {
    id: 2,
    question: "Comment on the current situaton regarding crypto market",
    optionA: "Extremly Volatile",
    optionB: "Moderately Volatile",
    optionc: "Stable",
  },
  {
    id: 3,
    question: "Comment on the current situaton regarding crypto market",
    optionA: "Extremly Volatile",
    optionB: "Moderately Volatile",
    optionc: "Stable",
  },
  {
    id: 4,
    question: "Comment on the current situaton regarding crypto market",
    optionA: "Extremly Volatile",
    optionB: "Moderately Volatile",
    optionc: "Stable",
  },
  {
    id: 5,
    question: "Comment on the current situaton regarding crypto market",
    optionA: "Extremly Volatile",
    optionB: "Moderately Volatile",
    optionc: "Stable",
  },
  {
    id: 6,
    question: "Comment on the current situaton regarding crypto market",
    optionA: "Extremly Volatile",
    optionB: "Moderately Volatile",
    optionc: "Stable",
  },
];
// function PollsF() {
//   const PollsFF = useEffect(() => Polls, [true]);
function Polls() {
  return (
    <React.Fragment>
      <Container style={{ marginTop: "150px" }}>
        <Row>
          <Masonry spacing={2}>
            {Dummy_data.map(({ id, question, optionA, optionB, optionc }) => (
              <div
                style={{
                  marginBottom: "5%",
                  marginLeft: "9%",
                  marginRight: "5%",
                }}
              >
                <PollBox_A
                  id={id}
                  question={question}
                  option_A={optionA}
                  option_B={optionB}
                  option_C={optionc}
                />
              </div>
            ))}
          </Masonry>
        </Row>
      </Container>
    </React.Fragment>
  );
}
//   return <React.Fragment>{PollsFF}</React.Fragment>;
// }

export default Polls;
