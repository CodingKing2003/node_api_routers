import express from "express";
import { User } from "../models/user.js";
import { deleteUsers, getAllUsers, newUsers, specialUser, updateUsers, userId } from "../controllers/user.js";

const router=express.Router();

router.get("/all",getAllUsers );
  
  router.post("/new",newUsers );
  router.get("/userid/special",specialUser)
  
  router.get("userid/:id",userId);
  router.put("userid/:id",updateUsers);
  router.delete("userid/:id",deleteUsers);

  export default router;