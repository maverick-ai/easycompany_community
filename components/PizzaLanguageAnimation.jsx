import styles from "./PizzaLanguageAnimation.module.css";
import { useState, useEffect } from "react";

let initialState = 0;
function PizzaLanguageAnimation(props) {
  const [fadeState, setFadeState] = useState(false);
  const [pizzaState, setPizzaState] = useState("Pizza");
  const PizzaLangs = [
    "Pizza",
    "पिज़्ज़ा",
    "피자",
    "пицца",
    "ピザ",
    "พิซซ่า",
    "بيتزا",
    "பீட்சா",
    "పిజ్జా",
    "πίτσα",
    "pitsa",
  ];

  useEffect(() => {
    setInterval(() => {
      setFadeState(true);

      setTimeout(() => {
        initialState += 1;
        setPizzaState(PizzaLangs[initialState % PizzaLangs.length]);
        setFadeState(false);
      }, 1500);
    }, 3500);
  }, []);

  return (
    <h1 className={fadeState ? styles.fadeIn : styles.fadeOut}>{pizzaState}</h1>
  );
}

export default PizzaLanguageAnimation;