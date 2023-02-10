const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Pokemons",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false, //permito que sea null?
        unique: true,
        validate: {
          len: [3, 10],
        },
      },
      hp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 999,
        },
      },
      attack: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 0,
          max: 999,
        },
      },
      defense: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 0,
          max: 999,
        },
      },
      speed: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 0,
          max: 999,
        },
      },
      height: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 999.99,
        },
      },
      weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 999,
        },
      },
      image: {
        type: DataTypes.STRING(2000),
        defaultValue: "https://thumbs.gfycat.com/DampSpanishCleanerwrasse.webp"
      },
      createdInDb: {
        type: DataTypes.BOOLEAN, //prop que me va a permitir acceder solo a los pokemons creados en la db
        allowNull: false,
        defaultValue: true, //se añade automaticamente a cada pokemon creado
      },
    },
    { timestamps: false }
  );
};
