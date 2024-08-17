import { Router } from "express";
import { checkPermission } from "../middlewares/checkPermission.js";
import { create, getAll, getDetail, remove, update } from "../controllers/Categories.js";
const routerCategory = Router();

routerCategory.get("/", getAll);
routerCategory.get("/:id", getDetail);
routerCategory.post("/", checkPermission, create);
routerCategory.put("/:id", checkPermission, update);
routerCategory.delete("/:id", checkPermission, remove);

export default routerCategory;