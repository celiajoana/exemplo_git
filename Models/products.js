"use strict"
//Model passa a estrutura dos dados da tabela do BD
const { Model } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
    class Products extends Model{}

    Products.init({ //Define os campos da tabela 
            nome_produto: DataTypes.STRING(30),
            descricao: DataTypes.STRING(100),
            valor_produto: DataTypes.DECIMAL(6,2),
            image: DataTypes.STRING(200)
            
          },
          { sequelize,
            modelName: "products",//nome da tabela no BD
            timestamps: false //oculta os campos createdat e updateat
          });

    return Products
    }