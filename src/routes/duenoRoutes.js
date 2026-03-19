import { Router } from "express";

import {
  getDuenos,
  createDueno,
  getDueno,
  updateDueno,
  deleteDueno,
} from "../controllers/dueno.controller.js";

const router = Router();

router.get("/duenos", getDuenos);
router.post("/duenos", createDueno);
router.get("/duenos/:id", getDueno);
router.put("/duenos/:id", updateDueno);
router.delete("/duenos/:id", deleteDueno);

export default router;
