import Carousel from "react-multi-carousel";
import { Container, Col, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import styles from "../../../styles/phonestyle.module.scss";

function Carousel_2() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Col xl={7}>
      <Carousel
        responsive={responsive}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        autoPlay={true}
        infinite={true}
        partialVisbile={true}
        itemClass={styles.cari}
        ssr={true}
        deviceType="mobile"

        // itemClass="carousel-item-padding-40-px"
      >
        <div>
          <img
            src="photos/img1.png"
            className={styles.travimg}
            style={{ marginLeft: "5px" }}
          />
        </div>
        <div>
          <img
            src="photos/img2.png"
            className={styles.travimg}
            style={{ marginLeft: "5px" }}
          />
        </div>

        <div>
          <img
            src="photos/img3.png"
            className={styles.travimg}
            style={{ marginLeft: "5px" }}
          />
        </div>
        <div>
          <img
            src="photos/img4.png"
            className={styles.travimg}
            style={{ marginLeft: "5px" }}
          />
        </div>
      </Carousel>
    </Col>
  );
}

export default Carousel_2;
