import React from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css";
import poke from "./img/pokemon-23.svg";
import pi from "./img/pi.png";

export default function Landing() {
  return (
    <div className={styles.divLanding}>
      <div>
        <div>
          <img src={poke} alt="asd" className={styles.logo} />
          <img src={pi} alt="pi" className={styles.logo1} />
        </div>

        <Link to="/home">
         
            <button className={styles.btn}>
              <span>Enter to <br/> Poke World</span>
            <span className={styles.transition}></span>
              </button>
          
        </Link>
      </div>
    </div>
  );
}
