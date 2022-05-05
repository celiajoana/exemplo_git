const express = require("express");
const { send } = require("express/lib/response");
const router = express.Router();
const { products } = require("../Models/products")

const productsController = require("../Controllers/products")

//mostra todos os produtos
router.get("/", (req, res, next) => {
    productsController.getAll(req, res)
    });

//cria os produtos
router.post("/", (req,res, next) => {
    productsController.create(req, res)
});

//mostra um produto específico
/*router.get("/:productId", (req, res, next) => {
    const id = req.params.productId

    if (id === "especifico"){
        res.status(200).send({
            message: "id especifico",
            id: id
        })
        } else {
            res.status(200).send({
                message: "Product específico"
            })
        }
});*/

//PUT atualiza toda a estrutura do registro
//PATCH atualizar parte do registro

router.patch("/:id", (req, res, next) => {
    productsController.update(req, res)
});

router.delete("/:id", (req, res, next) => {
   productsController.delete(req, res)
})

module.exports = router;

