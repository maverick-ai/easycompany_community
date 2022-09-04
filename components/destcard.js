import st from "./destcard.module.css";
import { Col } from "react-bootstrap";
function DestCard(props) {
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
      <div style={{ width: "min-content", margin: "auto" }}>
        <div className={st.destcard}>
          <div className={st.destcard1} style={{ PaddingTop: "20%" }}>
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

export default DestCard;
