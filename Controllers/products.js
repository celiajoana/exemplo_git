const { Sequelize } = require("sequelize");
const sequelize = require("../db/db");
const Products = require("../Models/products");


module.exports = {
    async getAll(req, res) {
        const sequelize = new Sequelize("pizzaria", "root", "root", {
            host: "localhost",
            dialect: "mysql"
        });
        const products = await Products(sequelize, Sequelize.DataTypes).findAll()
        //SELECT * FROM produtos
        res.status(200).send(products)
        
    },
    
    
    async create(req, res){
        const sequelize = new Sequelize("pizzaria", "root", "root", {
            host: "localhost",
            dialect: "mysql"
        });
        await Products(sequelize, Sequelize.DataTypes).create({
            nome_produto: req.body.nome_produto,
            descricao: req.body.descricao,
            valor_produto: req.body.valor_produto,
            image: req.body.image
        })
        res.status(200).send({
            message: "Produto cadastrado com sucesso"
        })
    },

    async update(req, res){
        const sequelize = new Sequelize("pizzaria", "root", "root", {
            host: "localhost",
            dialect: "mysql"
        }); 
        await Products(sequelize, Sequelize.DataTypes).update
        (
            {
                nome_produto: req.body.nome_produto,
                descricao: req.body.descricao,
                valor_produto: req.body.valor_produto,
                image: req.body.image
            },
            {
                where: { id: req.params.id }
            }
        );
        res.status(200).send("Produto atualizado com sucesso")
        }, 

        async delete(req, res){
            const sequelize = new Sequelize("pizzaria", "root", "root", {
                host: "localhost",
                dialect: "mysql"
            }); 
            await Products(sequelize, Sequelize.DataTypes).destroy
            (
                {
                    where: { id: req.params.id }
                }
            );
            res.status(200).send("Produto excluído com sucesso")
            }   
}