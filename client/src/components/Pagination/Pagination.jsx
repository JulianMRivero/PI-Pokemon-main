import React from "react";
import styles from "./Pagination.module.css";
import { useDispatch } from "react-redux";
import next from "./arrow.svg";
import back from "./back.svg";
export const Paginado = ({
  pokesXPages,
  allPokes,
  paginado,
  setCurrentPage,
  currentPage,
}) => {
  let result = Math.ceil(allPokes / pokesXPages);
  const pagNumber = [];
  //redondea todos los pokes sobre la cant que quiero por pagina
  for (let i = 1; i <= result; i++) {
    pagNumber.push(i);
  }
  const dispatch = useDispatch();
  const nextPage = () => {
    if (currentPage <= pagNumber.length) {
      paginado(currentPage + 1);
    } else {
      return null;
    }
  };

  return (
    <>
      <div className={styles.divPag}>
        <button
          className={styles.btn}
          onClick={currentPage > 1 ? () => paginado(currentPage - 1) : null}
          disabled={currentPage === 1 ? true : false}
        >
          <img src={back} alt="next" className={styles.back}></img>
        </button>
        {pagNumber.length &&
          pagNumber.map((n) => {
            return (
              <button
                className={currentPage === n ? styles.active : null}
                key={n}
                onClick={() => paginado(n)}
              >
                {n}
              </button>
            ); //me devuelva cada uno de los numeros que me da el array de numeros
          })}
        <button
          onClick={nextPage}
          disabled={currentPage === pagNumber.length ? true : false}
          className={styles.next1}
        >
          <img src={next} alt="next" className={styles.next}></img>
        </button>
      </div>
    </>
  );
};
