import style from "../styles/Search_new.module.css";
import React from "react";

function ImageHalo(props) {
  return (
    <React.Fragment>
      <div
        style={{ width: `${props.width} `, height: `${props.height}` }}
        className={style.halo}
      />
      <div
        style={{
          widthIn: `${props.widthIn}`,
          height: `${props.heightIn}`,
          backgroundColor: "#121212",
          zIndex: "-1",
        }}
      />
    </React.Fragment>
  );
}

export default ImageHalo;
