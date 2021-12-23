import styles from "./world.module.css";
import { useState, useEffect } from "react";

let initialState = 0;
function WorldLanguageAnimation(props) {
  const [fadeState, setFadeState] = useState(false);
  const [worldState, setWorldState] = useState("World");
  const worldLangs = [
    "World",
    "दुनिया",
    "世界",
    "Мир",
    "mundo",
    "Welt",
    "monde",
    "العالمية",
    "mondo",
    "värld",
    "โลก",
    "κόσμος",
    "thế giới",
    "verden",
    "세계",
    "svijet",
    "свет",
    "botë",
    "világ",
    "wêreld",
    "aduunka",
    "lalolagi",
    "دنيا",
    "Dünya",
    "עוֹלָם",
    "მსოფლიო",
    "maailmas",
    "wereld-",
    "աշխարհ",
  ];

  useEffect(() => {
    setInterval(() => {
      setFadeState(true);

      setTimeout(() => {
        initialState += 1;
        setWorldState(worldLangs[initialState % worldLangs.length]);
        setFadeState(false);
      }, 1500);
    }, 3500);
  }, []);

  return (
    <span className={fadeState ? styles.fadeIn : styles.fadeOut}>{worldState}</span>
  );
}

export default WorldLanguageAnimation;