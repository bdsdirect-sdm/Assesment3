import {Router} from "express";
import { createUser } from "../controllers/userController";
import { getUserById } from "../controllers/userController";
import { updateUser } from "../controllers/userController";
// import upload from "../middleware/multerMiddleware";


const router: Router = Router();
router.post("/user", createUser);
router.get('/user/:id',getUserById);
router.put('/user/:id',updateUser);

export default router;
