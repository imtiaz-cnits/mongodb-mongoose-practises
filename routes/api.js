import express from "express";
import * as todoController from "../app/controllers/brandController.js";
const router = express.Router();

// Brand CRUD
router.get("/brand/store", brandController.store);
router.post("/brand/show", brandController.show);
router.put("/brand/update", brandController.update);
router.delete("/brand/destroy", brandController.destroy);

// ToDo CRUD
router.get("/todo/store", todoController.store);

// Category CRUD
router.get("/category/store", categoryController.store);

router.post("/todo/store", todoController.store);
router.get("/todo/show", todoController.show);
router.delete("/todo/destroy/:id", todoController.destroy);

export default router;
