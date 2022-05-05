const express = require("express");
const { send } = require("express/lib/response");
const router = express.Router();


router.get("/", (req, res, next) => {
    res.status(200).send({
        message:"GET rota Regions"
    })
}) 

router.post("/", (req,res, next) => {
    res.status(201).send({
        message:"POST rota Regions"
    })
})


router.get("/:regionId", (req, res, next) => {
    const id = req.params.regionId

    if (id === "especifico"){
        res.status(200).send({
            message: "id especifico",
            id: id
        })
        } else {
            res.status(200).send({
                message: "Region específico"
            })
        }
})


router.patch("/", (req, res, next) => {
    res.status(201).send({
        message: "Patch executado com sucesso"
    })
})

router.delete("/", (req, res, next) => {
    res.status(201).send({
        message: "Excluído com sucesso"
    })
})

module.exports = router;

