import express from "express";
import routerProduct from "./Product.js";
import routerAuth from "./auth.js";
import routerCategory from "./Categories.js";
const router = express.Router();

router.use("/product", routerProduct);
router.use("/auth", routerAuth);
router.use("/categories", routerCategory);
export default router;