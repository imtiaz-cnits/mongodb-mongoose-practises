import express from "express";
import * as todoController from "../app/controllers/todoController.js";
const router = express.Router();
// import * as todoController from '../app/controllers/brandController.js';
// import * as todoController from '../app/controllers/categoryController.js';

// Brand CRUD
router.get("/brand/store", brandController.store);
router.post("/brand/show", brandController.show);
router.put("/brand/update", brandController.update);
router.delete("/brand/destroy", brandController.destroy);

router.post("/todo/store", todoController.store);
router.get("/todo/show", todoController.show);
router.delete("/todo/destroy/:id", todoController.destroy);

export default router;
