import st from "./destcardDesktop.module.scss";
import { Col } from "react-bootstrap";

function DestCardDesktop(props) {
  return (
    <Col
      xxl={2}
      xl={2}
      lg={2}
      md={5}
      sm={9}
      xs={9}
      className={st.column}
      style={{ zIndex: "3" }}
    >
      <div className={st.cardContainer}>
        <div className={st.destcard}>
          <div className={st.destcard1}>
            <img src={props.img1} className={st.destcardimg} />
            <div>
              <p className={st.destcardp}>{props.para}</p>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default DestCardDesktop;
