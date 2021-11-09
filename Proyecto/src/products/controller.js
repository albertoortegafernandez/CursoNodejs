const createError = require("http-errors");
const debug = require("debug")("app:module-product-controller");

const { request, response } = require("express");
const { ProductsService } = require("./services");
const { Response } = require("../common/response");

module.exports.ProductsController = {
  getProducts: async (req, res) => {
    try {
      let products = await ProductsService.getAll();
      Response.succes(res, 200, "Lista de productos", products);
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
  getProduct: async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
      let product = await ProductsService.getById(id);
      if (!product) {
        Response.error(res, new createError.NotFound());
      } else {
        Response.succes(res, 200, `Producto ${id}`, product);
      }
    } catch (error) {
      debug(error);
      res.status(500), Response.error(res);
    }
  },
  createProducts: async (req, res) => {
    try {
      const { body } = req;
      if (!body || Object.keys(body).length === 0) {
        Response.error(res, new createError.BadRequest());
      } else {
        const insertedId = await ProductsService.create(body);
        Response.succes(res, 201, "Producto agregado", insertedId);
      }
    } catch (error) {
      debug(error);
      res.status(500), Response.error(res);
    }
  },

  generateReport: (req,res) => {
    try {
        ProductsService.generateReport('Inventario',res);
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  }

};
