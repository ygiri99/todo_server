import { Router } from "express";
import { getTasks, createTask, upadateTask, deleteTask } from "../routeModules/routerModules.js";

const router = Router();

//API methods
router.get('/view', getTasks);
router.post('/add', createTask);
router.put('/task/:id', upadateTask);
router.delete('/task/:id', deleteTask);

export default router;