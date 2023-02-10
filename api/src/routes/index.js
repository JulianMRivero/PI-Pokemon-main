const { Router } = require("express");
const pokeRouter = require('./pokeRouter')
const typesRouter = require('./typesRouter')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
router.use('/pokemons',pokeRouter )
router.use('/types',typesRouter )

module.exports = router;
