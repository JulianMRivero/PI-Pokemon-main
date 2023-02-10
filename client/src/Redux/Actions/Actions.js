import axios from "axios";
export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const GET_POKE_DETAILS = "GET_POKE_DETAILS";
export const GET_POKE_TYPES = "GET_POKE_TYPES";
export const CREATE_POKEMON = "CREATE_POKEMON";
export const GET_POKE_NAME = "GET_POKE_NAME";
export const FILTER_TYPES = "FILTER_TYPES";
export const FILTER_DB = "FILTER_DB";
export const ORDER = "ORDER";
export const ORDER_BY_ATTACK = "ORDER_BY_ATTACK";
export const CLEAR_HOME = "CLEAR_HOME";

export function getPokemons() {
  return async function (dispatch) {
    const pData = await axios.get("http://localhost:3001/pokemons");
    return dispatch({ type: GET_ALL_POKEMONS, payload: pData.data });
  };
}
//   return function (dispatch) {
//     axios
//       .get("http://localhost:3001/pokemons")
//       .then((res) => dispatch({ type: GET_ALL_POKEMONS, payload: res.data }));
//   };
// }

export function getPokeDetails(id) {
  return async function (dispatch) {
    const detail = await axios.get(`http://localhost:3001/pokemons/${id}`);
    return dispatch({ type: GET_POKE_DETAILS, payload: detail.data });
  };
}

export function getPokeName(name) {
  return async function (dispatch) {
    const getName = await axios.get(
      `http://localhost:3001/pokemons?name=${name}`
    );
    return dispatch({ type: GET_POKE_NAME, payload: getName.data });
  };
}

// return function (dispatch) {
//   axios
//     .get(`http://localhost:3001/pokemons/${id}`)
//     .then((res) => dispatch({ type: GET_POKE_DETAILS, payload: res.data }));
// };

export function getPokeTypes() {
  return async function (dispatch) {
    const types = await axios.get(`http://localhost:3001/types`);
    return dispatch({ type: GET_POKE_TYPES, payload: types.data });
  };
}

export function pokeCreate(payload) {
  return async function (dispatch) {
    try {

      let data = await axios.post(`http://localhost:3001/pokemons/`, payload);
      alert("exito")
      return dispatch({ type: CREATE_POKEMON, data  });
     
    } catch (error) {
      alert("error desde el back")
    }
  };
}

export function filterTypes(payload) {
  return {
    type: FILTER_TYPES,
    payload,
  };
}

export function filterbyDb(payload) {
  return {
    type: FILTER_DB,
    payload,
  };
}

export function Order(payload) {
  return {
    type: ORDER,
    payload,
  };
}
export function orderByAttack(payload) {
  return {
    type: ORDER_BY_ATTACK,
    payload,
  };
}

export function clear() {
  return {
    type: CLEAR_HOME,
  };
}
