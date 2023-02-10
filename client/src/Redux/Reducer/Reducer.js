import {
  GET_ALL_POKEMONS,
  GET_POKE_DETAILS,
  CREATE_POKEMON,
  GET_POKE_TYPES,
  GET_POKE_NAME,
  FILTER_TYPES,
  FILTER_DB,
  ORDER,
  ORDER_BY_ATTACK,
  CLEAR_HOME,
} from "./../Actions/Actions";

const initialState = {
  pokemons: [],
  pokePermanent: [],
  pokeDetail: {},
  pokeTypes: [],
  
  
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        pokemons: payload,
        pokePermanent: payload,
        
        
      };
      case GET_POKE_DETAILS:
        return {
          ...state,
          pokeDetail: payload,
        };
        case GET_POKE_TYPES:
          return {
            ...state,
            pokeTypes: payload,
            
      };

    case GET_POKE_NAME:
      return {
        ...state,
        pokemons: payload,
      };
    case CREATE_POKEMON:
      return {
        ...state,
        pokemons: payload,
        pokePermanent: payload,
      };
 case FILTER_DB:
      if (payload === "all") {
        return { ...state };
      }
      if (payload === "inDb") {
        let db = state.pokePermanent.filter((ele) => ele.createdInDb ? true : false);
        return {
          ...state,
          pokemons:db,
          
        };
      }
      if (payload === "api") {
        let api = state.pokePermanent.filter((ele) => !ele.createdInDb);
        return {
          ...state,
          pokemons:api,
          
        };
      }
      break;

    case FILTER_TYPES:
      if (payload === "all") {
        return { ...state, };
      }
      

      let typeFil = state.pokemons.filter((el) => {
        if (!el.createdInDb) {
          if (el.types[0] === payload || el.types[1] === payload) {
            return true;
          } else return false;
        } else {
          let acum = el.types.filter((t) => t.name === payload);
          if (acum.length > 0) {
            return true;
          } else {
            return false;
          }
        }
      });
      return {
        ...state,
        pokemons: typeFil,
       
        
      };
   
    case ORDER:
      if (payload === "AoD") {
        return { ...state };
      }
      const allPokes = [...state.pokemons];
      const orderAZ =
        payload === "asc"
          ? allPokes.sort((a, b) => {
              if (a.name > b.name) return 1;
              if (b.name > a.name) return -1;
              return 0;
            })
          : allPokes.sort((a, b) => {
              if (a.name > b.name) return -1;
              if (b.name > a.name) return 1;
              return 0;
            });

      return {
        ...state,
        pokemons: orderAZ,
      };
    case ORDER_BY_ATTACK:
      if (payload === "SoW") {
        return { ...state };
      }
      const allPokesAttack = [...state.pokemons];
      const orderAttack =
        payload === "strong"
          ? allPokesAttack.sort((a, b) => {
              if (a.attack > b.attack) return -1;
              if (b.attack > a.attack) return 1;
              return 0;
            })
          : allPokesAttack.sort((a, b) => {
              if (a.attack > b.attack) return 1;
              if (b.attack > a.attack) return -1;
              return 0;
            });

      return {
        ...state,
        pokemons: orderAttack,
      };
    case CLEAR_HOME:
      return {
        ...state,
        pokemons: state.pokePermanent,
      };

    default:
      return {
        ...state,
      };
  }
}
