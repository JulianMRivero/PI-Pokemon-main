const { Router, response } = require("express");
const { Sequelize } = require("sequelize");
const axios = require("axios");
const { Pokemons, Types } = require("../db");
const {
  getPokeApi,
  getAllPokemons,
  getPokeDb,
  getPokeApiById,
  getPokeDbId,
  getTypes,
} = require(".././controllers/pokeController");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const as = await getTypes();
    res.status(200).send(as);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
