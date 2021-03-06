const mockData = require("../db/mockData.json");

const checkPokemonExists = (req, res, next) => {
  const { id } = req.params;
  const { pokemons } = req;
  const pokemonsFiltered = pokemons.filter(
    (pokemon) => pokemon.id === Number(id)
  );

  if (!pokemonsFiltered.length) {
    return res.status(404).send("Pokemon not found");
  }

  req.pokemons = pokemonsFiltered;
  next();
};

module.exports = checkPokemonExists;
