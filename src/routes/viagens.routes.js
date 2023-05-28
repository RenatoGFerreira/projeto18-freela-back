import {Router} from "express";
import { getViagens, getInfoViagens } from "../controllers/viagens.controllers.js";

const viagensRouter = Router()

viagensRouter.get("/viagens", getViagens)
viagensRouter.get("/checkinpage/:id", getInfoViagens)

export default viagensRouter