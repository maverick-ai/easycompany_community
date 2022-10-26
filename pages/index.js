import { useState, useEffect } from "react";
import Page1 from "../components/page1";
import Page3 from "../components/phonepage";
import Page2 from "../components/tabletpage_home";


export default function Home() {
  const [winWidth, setWinWidth] = useState(true);
  const [winWidth2, setWinWidth2] = useState(true);
  const [winWidth3, setWinWidth3] = useState(true);
  
  useEffect(() => {
    if (window.innerWidth <= 991 && window.innerWidth >= 768) {
      setWinWidth(false);
      setWinWidth2(true);
      setWinWidth3(false);
    } else if (window.innerWidth < 768){
      setWinWidth(false);
      setWinWidth2(false);
      setWinWidth3(true);
    } else {
      setWinWidth(true);
      setWinWidth2(false);
      setWinWidth3(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 991 && window.innerWidth >= 768) {
        setWinWidth(false);
        setWinWidth2(true);
        setWinWidth3(false);
      } else if (window.innerWidth < 768){
          setWinWidth(false);
          setWinWidth2(false);
          setWinWidth3(true);
      } else {
          setWinWidth(true);
          setWinWidth2(false);
          setWinWidth3(false);
        }
    });
  }, []);

  return (
    <div>
      {winWidth && <Page1 />}
      {winWidth2 && <Page2 />}
      {winWidth3 && <Page3 />}
    </div>
  );
}
