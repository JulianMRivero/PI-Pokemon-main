import React from "react";
import { Link } from "react-router-dom";
import { pokeCreate, getPokeTypes } from "../../Redux/Actions/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { validations } from "./Validations";
import styles from "./FormCreate.module.css";




export default function FormCreate(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const allPokes = useSelector((state) => state.pokemons);
  const types = useSelector((state) => state.pokeTypes);

  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    image: "",
    types: [],
  });
  useEffect(() => {
    dispatch(getPokeTypes());
    setErrors(
      validations({
        ...input,
      })
    );
  }, [dispatch, input]);

  const handleInputChange = (event) => {
    event.preventDefault();
    const property = event.target.name;
    const value = event.target.value;

    setErrors(validations({ ...input, [property]: value }));

    setInput({ ...input, [property]: value });
  };

  const handleTypeChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setErrors(validations({ ...input, [property]: value }));

    setInput({
      ...input,
      types: [...input.types, event.target.value], //agrega en un array lo que se selecciona en selecet
    });
  };

  console.log(input.types);
  console.log(errors);

  const handleSubmit = (event) => {
    event.preventDefault();
    const pokeFind = allPokes.find((n) => n.name.toUpperCase() === input.name.toUpperCase());
    if (pokeFind) return alert("repetido");
    else {
      dispatch(pokeCreate(input));
      setInput({ ...input });
    }

    history.push("/home");
  };
  const handlerDelete = (e) => {
    setInput({
      ...input,
      types: input.types.filter((ele) => ele !== e),
    });
    console.log(types);
  };

  return (
    <div className={styles.conteiner}>
      <div className={styles.divNav}>
          <h1 className={styles.title}>Create Pokemon</h1>
          <div className={styles.divBtn}>
        <Link to="/home">
          <button className={styles.btnHome}><span className={styles.spanHome}>Home</span></button>
        </Link>
        <Link to="/about">
          <button className={styles.btnAbout}>
            <span className={styles.spanAbout}>About</span>
          </button>
        </Link>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.divForm}>
        <div>
          <label className={styles.label}>Name</label>
          <input
            type="text"
            name="name"
            key="name"
            placeholder="Insert a name"
            value={input.name}
            onChange={handleInputChange}
            className={styles.input}
          ></input>
        </div>
        {errors.name && <span className={styles.span}>{errors.name}</span>}
        <div>
          <label className={styles.label}>Health</label>
          <input
            type="text"
            name="hp"
            placeholder="1-200"
            value={input.hp}
            onChange={handleInputChange}
            className={styles.input}
          ></input>
        </div>
          {errors.hp && <span className={styles.span}>{errors.hp}</span>}
        <div>
          <label className={styles.label}>Attack</label>
          <input
            type="text"
            name="attack"
            placeholder="1-200"
            value={input.attack}
            onChange={handleInputChange}
            className={styles.input}
          ></input>
        </div>
          {errors.attack && <span className={styles.span}>{errors.attack}</span>}
        <div>
          <label className={styles.label}>Defense</label>
          <input
            type="text"
            name="defense"
            placeholder="1-200"
            value={input.defense}
            onChange={handleInputChange}
            className={styles.input}
          ></input>
        </div>
          {errors.defense && <span className={styles.span}>{errors.defense}</span>}
        <div>
          <label className={styles.label}>Speed</label>
          <input
            type="text"
            name="speed"
            placeholder="1-200"
            value={input.speed}
            onChange={handleInputChange}
            className={styles.input}
          ></input>
        </div>
          {errors.speed && <span className={styles.span}>{errors.speed}</span>}
        <div>
          <label className={styles.label}>Height (cm)</label>
          <input
            type="text"
            name="height"
            placeholder="1-400(cm)"
            value={input.height}
            onChange={handleInputChange}
            className={styles.input}
          ></input>
        </div>
          {errors.height && <span className={styles.span}>{errors.height}</span>}
        <div>
          <label className={styles.label}>Weight (kg)</label>
          <input
            type="text"
            name="weight"
            placeholder="1-500(kg)"
            value={input.weight}
            onChange={handleInputChange}
            className={styles.input}
          ></input>
        </div>
          {errors.weight && <span className={styles.span}>{errors.weight}</span>}
        <div>
          <label className={styles.label}>Image</label>
          <input
            type="text"
            name="image"
            placeholder="Insert URL"
            value={input.image}
            key="image"
            onChange={handleInputChange}
            className={styles.input}
          ></input>
        </div>
        <div>
          <div className={styles.divT}>
            <div>
          <select
          className={styles.select}
            onChange={handleTypeChange}
            name="types"
            value={input.types}
            disabled={input.types.length >= 2 ? true : false}
          >
            <option value="0">Select Maximum Two Types</option>
            {types.map((t) => (
              <option value={t.name}>{t.name}</option>
            ))}
          </select>
          </div>
          {errors.types && <span className={styles.span}>{errors.types}</span>}
          <div>
            <ul className={styles.ul}>
              {input.types.map((t) => {
                return (
                  <li classname={styles.liTypes} value={t}>
                    {t.toUpperCase()}
                    <button type="button" onClick={() => handlerDelete(t)} className={styles.btnX}>
                     X
                    </button>
                  </li>
                );
              })}
            </ul>
            </div>
            {/* {errors.types &&<span>{errors.types}</span>} */}
          </div>
           </div>
         
        <div className={styles.btnCreate}>
          {Object.keys(errors).length > 0 ? (
            <button disabled={true}>Create</button>
          ) : (
            <button type="submit">Create</button>
          )}
        </div>
        </div>
       
      </form>
    </div>
  );
}
