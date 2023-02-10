const { Router, response } = require("express");
const { Sequelize } = require("sequelize");
const axios = require("axios");
const { Pokemons, Types } = require("../db");
const { Op } = require("sequelize");
const {
  getPokeApi,
  getAllPokemons,
  getPokeDb,
  getPokeApiById,
  getPokeDbId,
  getTypes,
  createPokemon,
} = require(".././controllers/pokeController");
const router = Router();



router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    const allPokemons = await getAllPokemons();
    if (name) {
      const pokeName = await allPokemons.filter((ele) => ele.name.toUpperCase() == name.toUpperCase());
      pokeName.length > 0
        ? res.status(200).json(pokeName)
        : res.status(400).send("Pokemon does not exist");
    } else {
      return res.status(200).json(allPokemons);
    }
  } catch (error) {
    error;
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const idFind = await getPokeApiById(id);
    const idDb = await getPokeDbId(id);

    if (isNaN(id)) res.status(200).json(idDb);
    else {
      res.status(200).json(idFind);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});



router.post("/", async (req, res) => {
  const {
    name,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
    image,
    types,
    createdInDb,
  } = req.body;
  try {
    const existe = await Pokemons.findOne({ where: { name: name } });
    if (existe) return res.send("El pokemon ya existe");
    if (image?.length < 5) {
      const newPoke = await Pokemons.create({
        name,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        createdInDb,
      });
      const typeDb = await Types.findAll({ where: { name: types } }); //encontra todos dentro del modelo types cuya prop name del model coincida con el parametro type pasado por argumento
    newPoke.addTypes(typeDb);
    res.status(200).send("Pokemon creado correctamente");
    }
    if (image?.length > 5) {
     const newPoke = await Pokemons.create({
        name,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        image,
        createdInDb,
      });
      const typeDb = await Types.findAll({ where: { name: types } }); //encontra todos dentro del modelo types cuya prop name del model coincida con el parametro type pasado por argumento
    newPoke.addTypes(typeDb);
    res.status(200).send("Pokemon creado correctamente");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
