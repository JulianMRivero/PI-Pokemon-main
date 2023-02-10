import React from "react";
import { filterTypes, filterbyDb, Order,orderByAttack } from "../../Redux/Actions/Actions";
import { useDispatch } from "react-redux";
import styles from "./Filters.module.css"
export const Filters = ({paginado}) => {
  const dispatch = useDispatch();

  const handleFilter = (event) => {
    paginado(1)
    dispatch(filterTypes(event.target.value));
    
  };
  const handleFilterByDb = (e) => {
    paginado(1)
    dispatch(filterbyDb(e.target.value));
  };
  const handleOrder = (event)=>{
    dispatch(Order(event.target.value))
  }
  const handleOrderAttack = (event) =>{
    dispatch(orderByAttack(event.target.value))
  }

  return (
    <div className={styles.divFilter}>
      <select onChange={handleFilterByDb} className={styles.fSelect}>
        <option value="all" className={styles.fOptions}>All Pokemons</option>
        <option value="api" className={styles.fOptions}>Natural Pokemons</option>
        <option value="inDb" className={styles.fOptions}>Created by Users</option>
      </select>
      <select onChange={handleFilter}>
        <option value="all">Select one Poke-Type </option>
        <option value="normal">Normal</option>
        <option value="fighting">Fighting</option>
        <option value="bug">Bug</option>
        <option value="flying">Flying</option>
        <option value="poison">Poison</option>
        <option value="ground">Ground</option>
        <option value="ghost">Ghost</option>
        <option value="rock">Rock</option>
        <option value="steel">Steel</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="grass">Grass</option>
        <option value="electric">Electric</option>
        <option value="psychic">Psychic</option>
        <option value="ice">Ice</option>
        <option value="dragon">Dragon</option>
        <option value="dark">Dark</option>
        <option value="fairy">Fairy</option>
        <option value="unknown">Unknown</option>
        <option value="shadow">Shadow</option>
      </select>
      <select onChange={handleOrder}>
        <option value='AoD'>Select Order</option>
        <option value='asc'>Ascendt</option>
        <option value='desc'>descev</option>
      </select>
      <select onChange={handleOrderAttack}>
        <option value='SoW'>Stronger or Weaker</option>
        <option value='strong'>Stronger</option>
        <option value='weak'>Weaker</option>
      </select>
      
    </div>
  );
};
