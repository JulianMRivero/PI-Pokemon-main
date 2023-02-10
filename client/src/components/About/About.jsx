import { Link } from "react-router-dom";
import styles from "./About.module.css";
import React from "react";
import linkedin from "./img/linked.png"
import github from "./img/github.png"

export default function About() {
  return (
    <div>
    <div>
    <div className={styles.divNav}>
      <h1 className={styles.title}>About</h1>
      
      <div className={styles.divBtn}>
      <div className={styles.divBtn}>
        <Link to="/home">
          <button className={styles.btnHome}>
            <span className={styles.spanHome}>Home</span>
          </button>
        </Link>
        <Link to="/create">
          <button className={styles.btnCreate}>
            <span className={styles.btnCreateSpan}>Create Pokemon</span>
          </button>
        </Link>
        </div>
      </div>
    </div>
    </div>
    <div className={styles.divP}>
        <h2>Hola!</h2>
       
    <p className={styles.p}>
        Hola mi nombre es Julian Rivero, <br/>
        Bienvenidos a mi primera pagina web realizada con mucho cariño y esfuerzo, <br/>
        esta es parte del Proyecto Individual del Bootcamp SoyHenry, en el cual durante dos meses <br/>
        aprendi todas las tecnologias necesarias para poder lograr finalizar esta Single Page Aplication. <br/>
        <br/>
        En la parte del Front, utilice JavaScript y su framework React, tambien Redux, HTML y CSS. <br/>
        Con respecto al Back-end, utilice Express y en base de datos PostgresSQL y Sequelize. <br/>
        <br/>
        Espero que sea una experiencia agradable pasear por aqui y visitar algunos de los miles de Pokemons <br/>
        <br/>
        Muchas Gracias

    </p>
    
    </div>
    <div className={styles.red}>
        <a href="https://www.linkedin.com/in/julianmrivero/">
            <img src={linkedin} alt="linkedin" className={styles.linkedin}></img>
        </a>
        <a href="https://github.com/JulianMRivero">
            <img src={github} alt="linkedin" className={styles.github}></img>
        </a>
    </div>
   </div>
  );
}
