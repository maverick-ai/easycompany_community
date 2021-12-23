import styles from "./traveller.module.css";
import { useState, useEffect } from "react";

let initialState = 0;
function TravellerWordAnimation(props) {
  const [fadeState, setFadeState] = useState(false);
  const [travelWordState, setTravelWordState] = useState("traveller");
  const travelWords = [
    "traveller",
    "adventurer",
    "wanderer",
    "hiker",
    "vacationer",
    "tripper",
    "biker",
    "tourist",
    "voyager",
    "backpacker",
    "excursionist",
    "sightseer",
    "tourer",
    "rover",
    "globetrotter",
    "holidaymaker",
    "explorer",
    "wayfarer",
    "trekker",
  ];

  useEffect(() => {
    setInterval(() => {
      setFadeState(true);

      setTimeout(() => {
        initialState += 1;
        setTravelWordState(travelWords[initialState % travelWords.length]);
        setFadeState(false);
      }, 1500);
    }, 3500);
  }, []);

  return (
    <span className={fadeState ? styles.fadeIn : styles.fadeOut}>{travelWordState}</span>
  );
}

export default TravellerWordAnimation;