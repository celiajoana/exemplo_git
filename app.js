const express = require("express")
const app = express()
const bodyParser = require("body-parser")


const productRoute = require("./Routes/productRoute")
const clientRoute = require("./Routes/clientRoute")
const deliveryManRoute = require("./Routes/deliverymanRoute")
const regionRoute = require("./Routes/regionRoute")
const requestRoute = require("./Routes/requestRoute")
const itemRequestRoute = require("./Routes/itemRequestRoute")


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use("/products", productRoute)
app.use("/clients", clientRoute)
app.use("/deliverymans", deliveryManRoute)
app.use("/regions", regionRoute)
app.use("/requests", requestRoute)
app.use("/itemrequests", itemRequestRoute)


app.use((req, res, next) => {
    const erro = new Error("Rota não encontrada")
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            message: error.message
        }
    })
})

module.exports = app;