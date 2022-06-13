const PollChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        marginRight: "10px",
        padding: "15px 15px 15px",
        marginLeft: "5px",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#000000",
        borderRadius: "15px",
      }}
    >
      <div
        style={{
          transform: "rotate(-90deg)",
          width: "70px",
          marginTop: "275px",
          marginLeft: "-35px",
          marginRight: "-12px",
        }}
      >
        <span style={{ fontSize: "14px" }}>{props.value} Votes</span>
      </div>
      <div
        style={{
          transform: "rotate(-90deg)",
          width: "60px",
          marginBottom: "295px",
          marginLeft: "-57px",
          marginRight: "-12px",
        }}
      >
        <span style={{ fontSize: "14px" }}>{barFillHeight}</span>
      </div>
      <div
        style={{
          height: "100%",
          width: "6px",
          borderRadius: "26px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            background: "linear-gradient(180deg, #E32A36 0%, #B50EAE 100%)",
            borderRadius: "26px",
            width: "100%",
            transition: "all 1s ease-out",
            height: barFillHeight,
          }}
        ></div>
      </div>
    </div>
  );
};

export default PollChartBar;
