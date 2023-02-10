import { getPokemons, getPokeName, clear } from "../../Redux/Actions/Actions";
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Search.module.css"

export const SearchBar = ({paginado}) => {
  const [input, setInput] = useState("");
  let pkPermanent = useSelector((state) => state.pokePermanent);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    paginado(1)
    dispatch(getPokeName(input));
    setInput("");
    const filterd = pkPermanent.filter((ele) => ele.name.toUpperCase() === input.toUpperCase());
    if (filterd.length > 0) {
      return filterd;
    } else {
      alert("Pokemon not found... or try enter the entire pokemon name ");
    }
    dispatch(clear());
  };

  //   let pkFind = pkPermanent.filter((pk) => pk.name === input);
  //   if(pkFind.length > 0) {
  //     return pkFind
  // }else{
  //   alert("asd")

  // let handleSubmit = (e) => {

  //   e.preventDefault();
  //   let disAndSet = (input) => { dispatch(getPokeName(input))
  //       setInput('');
  //   }
  //   let pkFind = pkPermanent.filter(pk => pk.name ===input);
  //   pkFind.length > 0 ?  disAndSet(input) : alert("no ")
  // }

  return (
    <div className={styles.Divgral}>
      <form onSubmit={submitHandler}>
        <svg className ={styles.icon} aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
        <input
          className={styles.input}
          type="search"
          name="input"
          placeholder="Search Pokemon"
          value={input}
          onChange={handleChange}
        ></input>
        <button type="submit" className={styles.btn}>Search</button>
      </form>
    </div>
  );
};
