const debug = require("debug")("app:module-product-controller");

const {
    request
} = require("express");
const {
    ProductsService
} = require("./services");

module.exports.ProductsController = {
    getProducts: async (req, res) => {
        try {
            let products = await ProductsService.getAll();
            res.json(products);
        } catch (error) {
            debug(error);
            res.status(500),
                json({
                    message: "Internal server error",
                });
        }
    },
    getProduct: async (req, res) => {
        try {
            const {
                params: {
                    id
                },
            } = req;
            let product = await ProductsService.getById(id);
            res.json(product);
        } catch (error) {
            debug(error);
            res.status(500),
                json({
                    message: "Internal server error",
                });
        }
    },
    createProducts: async (req, res) => {
        try {
            const {
                body
            } = req;
            const insertedId = await ProductsService.create(body);
            res.json(insertedId);
        } catch (error) {
            debug(error);
            res.status(500),
                json({
                    message: "Internal server error",
                });
        }
    },
};