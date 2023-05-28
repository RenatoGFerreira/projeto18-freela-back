import {Router} from "express";
import { getViagens, getInfoViagens, buyticket } from "../controllers/viagens.controllers.js";

const viagensRouter = Router()

viagensRouter.get("/viagens", getViagens)
viagensRouter.get("/checkinpage/:id", getInfoViagens)
viagensRouter.get("/confirmpage/:id", buyticket)

export default viagensRouter