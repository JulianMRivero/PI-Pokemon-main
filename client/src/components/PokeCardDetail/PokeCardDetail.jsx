import React from "react";
import { getPokeDetails } from "../../Redux/Actions/Actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./ColorTypes.css";
import styles from "./PokeCardDetail.module.css";
import Loading from "./../Loading/Loading";

const PokeCardsDetail = (props) => {
  const dispatch = useDispatch();
  const param = props.match.params.id;

  // console.log(props);
  const pokeDetails = useSelector((state) => state.pokeDetail);
 

  useEffect(() => {
    dispatch(getPokeDetails(param));
  }, [dispatch, param]);
  console.log(pokeDetails[0]?.id == param)
  console.log(param)
  return (
    <div>
      <nav className={styles.divNav}>
     <div className={styles.btnCreate}>
        <Link to="/home">
          <button className={styles.btnhome}><span className={styles.spanhome}>GO HOME</span></button>
        </Link>
        </div>
      </nav>
      <div className={styles.cont}>
        {pokeDetails.length && pokeDetails[0]?.id == param ? (
              <div className={styles.divDetail}>
          <div className={styles.divImg}>

              <img
                src={pokeDetails[0].image}
                alt="img"
                className={styles.img}
              ></img>
            </div>
            <div className={styles.divStats}>
              <div className={styles.stats}>Name: {pokeDetails[0].name}</div>
              <div className={styles.stats}>Hp: {pokeDetails[0].hp}</div>
              <div className={styles.stats}>
                Attack: {pokeDetails[0].attack}
              </div>
              <div className={styles.stats}>
                Defense: {pokeDetails[0].defense}
              </div>
              <div className={styles.stats}>Speed: {pokeDetails[0].speed}</div>
              <div className={styles.stats}>
                Height: {pokeDetails[0].height}
              </div>
              <div className={styles.stats}>
                Weight: {pokeDetails[0].weight}
              </div>
            </div>
            <div className={styles.types}>
            {pokeDetails[0].createdInDb
              ? pokeDetails[0].types.map((type) => (
                  <div className={type.name}>{type.name}</div>
                ))
              : pokeDetails[0].types.map((type) => (
                  <div className={type}>{type}</div>
                ))}
                </div>
          </div>
        ) : (
          <Loading />
        )}
        
      </div>
    </div>
  );
};

export default PokeCardsDetail;
