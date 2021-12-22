import { Router, Request, Response} from "express";
import { listdiscController } from "../controllers/list-disc.controller";

const listdiscRouter = Router();
const ListdiscController = new listdiscController();

listdiscRouter.route("/")
    .get((req: Request, res: Response ) =>{

    })


export default listdiscRouter;