import exprees from 'express';
import { create, deleteuser, getall, getone, update } from '../controllers/user.controller.js';

const route = exprees.Router();

route.post("/create", create);
route.get("/getall", getall);
route.get("/getone/:id", getone)
route.patch("/update/:id", update);
route.delete("/deleteuser/:id", deleteuser)

export default route;