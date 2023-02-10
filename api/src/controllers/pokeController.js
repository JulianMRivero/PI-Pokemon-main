const { Pokemons, Types } = require("../db.js");
const { Sequelize } = require("sequelize");
const axios = require("axios");

const getPokeApi = async () => {
  try {
    
    const pokeApiURL = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=40"
    );
    const pokeUrlName = pokeApiURL.data.results;
    const pokeComplete = await axios.all(
      pokeUrlName.map(async (i) => {
        let infoPush = await axios.get(i.url);
        return {
          id: infoPush.data.id,
          name: infoPush.data.name,
          hp: infoPush.data.stats[0].base_stat,
          attack: infoPush.data.stats[1].base_stat,
          defense: infoPush.data.stats[2].base_stat,
          speed: infoPush.data.stats[5].base_stat,
          height: infoPush.data.height,
          weight: infoPush.data.weight,
          image: infoPush.data.sprites.other.dream_world.front_default,
          types: infoPush.data.types.map((t) => t.type.name),
        };
      })
    );
    return pokeComplete;
  } catch (error) {
    console.log({
      error: `Something is wrong with "getPokeApi" located in controllers`,
    });
  }
};

const getPokeDb = async () => {
  return await Pokemons.findAll({
    include: {
      model: Types,
      atributes: ["name"],
      through: { attributes: [] }
    },
  });
};

const getAllPokemons = async () => {
  const apiPoke = await getPokeApi();
  const dbPoke = await getPokeDb();
  const allPoke = apiPoke.concat(dbPoke);
  return allPoke;
};
//GET /pokemons/{idPokemon}:
const getPokeApiById = async (id) => {
  try {
    const info = await getPokeApi();
    if (id) {
      return info.filter((poke) => poke.id == id);
    }
  } catch (error) {
    console.log({
      error: `Algo anda mal por getPokeApiById`,
    });
  }
};
const getPokeDbId = async (id) => {
  try {
    const db = await Pokemons.findAll({
      where: {
        id: id,
      },
      include: {
        model: Types,
        attributes: ["name"],
        through: { attributes: [] },
      },
    });
    return db;
  } catch (error) {
    console.log({
      error: `Algo anda mal por getPokeDbId`,
    });
  }
};

const getTypes = async () => {
  try {
    const gTypes = await axios.get("https://pokeapi.co/api/v2/type");
    const newTypes = [...gTypes.data.results];
    const mapTypes = newTypes.map((ele) => ele.name);
    mapTypes.forEach(
      async (ele) => await Types.findOrCreate({ where: { name: ele } })
    );
    const typeFind = Types.findAll();
    return typeFind;
  } catch (error) {
    console.log({
      error: `Algo anda mal por typess`,
    });
  }
};
;

module.exports = {
  getPokeApi,
  getAllPokemons,
  getPokeDb,
  getPokeApiById,
  getPokeDbId,
  getTypes,
  
};
