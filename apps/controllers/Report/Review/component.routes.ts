import express from "express";
import { createComponentController } from "./Create/component.createcontroller";
import { allComponentsFetchController} from "./Fetch/component.allfetchcontroller";

const router = express.Router();

router.post("/", createComponentController);
router.get("/", allComponentsFetchController);

export default router;