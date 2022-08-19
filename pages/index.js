import { useState, useEffect } from "react";
import Page1 from "../components/page1";
import Page2 from "../components/phonepage";

export default function Home() {
  const [winWidth, setWinWidth] = useState(true);

  useEffect(() => {

    if (window.innerWidth <= 768) {
      setWinWidth(false);
    } else {
      setWinWidth(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 768) {
        setWinWidth(false);
      } else {
        setWinWidth(true);
      }
    });
  }, []);

  return winWidth ? <Page1 /> : <Page2 />;
}
