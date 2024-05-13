import {
  createCheckout,
  deleteCheckouts,
  getAllCheckouts,
  returnCheckout,
} from "../Controllers/Chekout.controller";
import { Router } from "express";

const route = Router();

route
  .post("/", createCheckout)
  .get("/", getAllCheckouts)
  .put("/:id/return", returnCheckout)
  .delete("/:id", deleteCheckouts);
export default route;
