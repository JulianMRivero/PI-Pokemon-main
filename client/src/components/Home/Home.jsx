import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, clear } from "../../Redux/Actions/Actions";
import PokeCards from "../PokeCards/PokeCards";
import { Paginado } from "../Pagination/Pagination";
import { Filters } from "../Filters/Filters";
import { SearchBar } from "../SearchBar/SearchBar";
import Loading from "../Loading/Loading";
import styles from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const allPokes = useSelector((state) => state.pokemons); //remplaza map state to props
  const [currentPage, setCurrentPage] = useState(1); //1 porq es la primera pagina
  const [pokesXPages, setPokesXPages] = useState(12); // cuantos personajes quiero por pagina?
  const lastIndexPoke = currentPage * pokesXPages; //ultimo del ultimo poke de la pag (inica en 12 )
  const firstIndexPoke = lastIndexPoke - pokesXPages; //0
  //pokes de la pagina actual, trae todos los personajes, el slice toma una porcion del array(del indice 0 al 12 )
  let asdf = allPokes?.slice(firstIndexPoke, lastIndexPoke);

  const paginado = (pagNumber) => {
    setCurrentPage(pagNumber);
  };

  useEffect(() => {
    dispatch(getPokemons()); //remplaza al map dispatch to props
  }, [dispatch]); //siempre y cyuando suceda lo que este en el array este componente se monta

  const handleClick = (event) => {
    event.preventDefault();
    
    dispatch(clear());
  };

  return (
    <div className={styles.gral}>
      <div>
        <div className={styles.divTitle}>
          <div className={styles.btnCreate}>
            <Link to="/create">
              <button className={styles.btnCreate1}>
                <span className={styles.btnCreateSpan}>Create Pokemon</span>
              </button>
            </Link>
            <Link to="/about">
              <button className={styles.btnAbout}>
                <span className={styles.btnCreateSpan1}>About</span>
              </button>
            </Link>
          </div>
          <h1 className={styles.title}>Welcome to Poke World!</h1>
          <p className={styles.desc}>
            Here you can search and create a Pokemon <br /> also u can see all
            stats of any poke
          </p>
        </div>
      </div>
      <SearchBar paginado={paginado} />
      <div className={styles.divbtn}>
        <Filters paginado={paginado}></Filters>
        <button onClick={handleClick} className={styles.reset}>
          Reset All Filters
        </button>
      </div>
      <Paginado
        pokesXPages={pokesXPages}
        allPokes={allPokes?.length}
        paginado={paginado}
        currentPage={currentPage}
      ></Paginado>
      <div>
        {asdf?.length > 0 ? asdf?.map((ele) => {
          // let ruteId = "/pokemon/" + ele.id;
          console.log(ele);
          if (ele.createdInDb === true) {
            return (
              <Link to={"/pokedetail/" + ele.id}>
                <PokeCards
                  name={ele.name}
                  image={ele.image}
                  types={[ele.types[0]?.name, ele.types[1]?.name]}
                  key={ele.id}
                  id={ele.id}
                />
              </Link>
            );
          } else
            return (
              <Link to={"/pokedetail/" + ele.id}>
                <PokeCards
                  name={ele.name}
                  image={ele.image}
                  types={ele.types}
                  // types1={[ele.types[1]]}
                  key={ele.id}
                  id={ele.id}
                />
              </Link>
            );
        }):<Loading></Loading>}
      </div>
    
    
  </div>
  );
};

export default Home;
