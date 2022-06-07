import React, { useState } from "react";
import styles from "./Email.module.scss";

function EmailField(props) {
  const [addEmailState, setAddEmailState] = useState(false);

  const regex = new RegExp(
    '^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|' +
    '(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])' +
    '|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$');

  const HandleEmailInChange = (event) => {
      if(regex.test(event.target.value)){
        setAddEmailState(true)
      }
      else{
        setAddEmailState(false)
      }
  };

  return (
    <div className={`${styles.emailInput} ${addEmailState && styles.valid}`}>
      <input ref={props.EmailRef} type="email" onChange={HandleEmailInChange} placeholder="Type your email ..." />
      {/* <svg viewBox="0 0 18 18">
        <path d="M11.5,10.5 C6.4987941,17.5909626 1,3.73719105 11.5,6 C10.4594155,14.5485365 17,13.418278 17,9 C17,4.581722 13.418278,1 9,1 C4.581722,1 1,4.581722 1,9 C1,13.418278 4.581722,17 9,17 C13.418278,17 17,13.42 17,9"></path>
        <polyline points="5 9.25 8 12 13 6"></polyline>
      </svg> */}
    </div>
  );
}

export default EmailField;