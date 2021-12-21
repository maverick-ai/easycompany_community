import styles from "./PizzaOrder.module.css";
import MobilPhoneMockup from "./MobilePhoneMockup.jsx";
import PizzaLanguageAnimation from "./PizzaLanguageAnimation";
import { useState,useEffect } from "react";

let initialState=0;
function PizzaOrderScreen(props) {
  const [quantity, setQuantity] = useState(1);


  return (
    <MobilPhoneMockup center={true}>
      <div className={`${styles.PizzaOrderFont} align-self-center text-center`}>
        <img src="/pizza.svg" className={styles.PizzaImg} />
        <PizzaLanguageAnimation />
        <h1>
          <span>
            <img
              src="/minus.svg"
              height={"20px"}
              width={"20px"}
              onClick={() => {
                setQuantity((prev) => {
                  if (prev === 1) {
                    return prev;
                  } else {
                    return prev - 1;
                  }
                });
              }}
            />
          </span>
          {` ${quantity} `}
          <span>
            <img
              src="/plus.svg"
              height={"20px"}
              width={"20px"}
              onClick={() => {
                setQuantity((prev) => {
                  return prev + 1;
                });
              }}
            />
          </span>
        </h1>
        <button className={styles.order}>Order</button>
      </div>
    </MobilPhoneMockup>
  );
}

export default PizzaOrderScreen;