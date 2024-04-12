import { Router } from "express";
import { addUser, deleteUser, getUser, getallUser, updateUser } from "../controllers/user.controller.js";

const router = Router();

router.route("/createUser").post(addUser);
router.route("/updateUser/:id").post(updateUser);
router.route("/getallusers").post(getallUser);
router.route("/getUser/:id").post(getUser);
router.route("/deleteUser/:id").delete(deleteUser);


export default router;