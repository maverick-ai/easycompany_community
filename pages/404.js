import styles from "../styles/404.module.css";

function handleClick(){
  
}


const errorpage = () => {
    return (
      <div>
        <main className={styles.mainContainer}>
      <div className={styles.subContainer}>
        <div className={styles.sunContainer}>
          <img src={"/404/404.svg"} />
          <div className={styles.PNF}>
            <img src={"/404/PNF.svg"} />
          </div>
          <div className={`${styles.birdContainer} ${styles.bird1}`}>
            <img src={"/404/bird1.svg"} />
          </div>
          <div className={`${styles.birdContainer} ${styles.bird2}`}>
            <img src={"/404/bird2.svg"} />
          </div>
          <div className={`${styles.birdContainer} ${styles.bird3}`}>
            <img src={"/404/bird3.svg"} />
          </div>
        </div>
      </div>
      <div className={styles.grass3}>
        <img src={"/404/grass3.svg"} />
      </div>
      <div className={styles.grass4}>
        <img src={"/404/grass4.svg"} />
      </div>
      <div className={`${styles.cloudContainer} ${styles.cloud1}`}>
        <img src={"/404/cloud.svg"} />
      </div>
      <div className={`${styles.cloudContainer} ${styles.cloud2}`}>
        <img src={"/404/cloud.svg"} />
      </div>
      <div className={`${styles.cloudContainer} ${styles.cloud3}`}>
        <img src={"/404/cloud.svg"} />
      </div>
      <div className={`${styles.cloudContainer} ${styles.cloud4}`}>
        <img src={"/404/cloud.svg"} />
      </div>
      <div className={`${styles.cloudContainer} ${styles.cloud5}`}>
        <img src={"/404/cloud.svg"} />
      </div>
      <div className={`${styles.cloudContainer} ${styles.cloud6}`}>
        <img src={"/404/cloud.svg"} />
      </div>
      <section className = {styles.btnContainer}>
        <button onClick="">Back to Home</button>
      </section>

      <section className={styles.bottomSupport}>
        <div className={styles.lakeContainer}></div>
        <div className={`${styles.mountainContainer} ${styles.mountainL}`}>
          <img src={"/404/mountain1.svg"} />
        </div>

        <div className={`${styles.mountainContainer} ${styles.mountainR}`}>
          <img src={"/404/mountain2.svg"} />
        </div>
        {/* <div className={`${styles.lakeContainer}`}>
            <img src = {'/404/lake3.svg'}/>
        </div> */}
      </section>

      <div className={`${styles.grassContainer} ${styles.grassL}`}>
        <img src={"/404/grass1.svg"} />
      </div>
      <div className={`${styles.grassContainer} ${styles.grassR}`}>
        <img src={"/404/grass2.svg"} />
      </div>
    </main>
    </div>
    );
}

export default errorpage;