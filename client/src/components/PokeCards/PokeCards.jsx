import React from "react";
import styles from "./PokeCards.module.css"
import "./ColorTypes.css"


const PokeCards = ({ name, image,types,id}) => {

  return (
    
    <div className={styles.card}> 
      <p className={styles.name}>{name}</p>
      <p><img src={image} alt="img" className={styles.img} /></p>
      <div className={styles.types}>{
          types?.map(
            (type) => <div key={id + type} className={type}> {type} </div> ) }</div>
          
    </div>
   
  );
};

export default PokeCards;
