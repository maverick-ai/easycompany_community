function Box() {
  return (
    <Row className={styles.medalRow}>
      <Col styles={{ paddingLeft: "50px" }}>
        <div className={styles.medalbox}></div>
      </Col>
      <Col>
        <div className={styles.medalbox1}></div>
      </Col>
    </Row>
  );
}

export default Box;
