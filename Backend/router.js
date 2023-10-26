import { Router } from "express";
import * as controller from "./controller.js"
const router=Router();
router.route("/display").post(controller.gettask)
    // res.status(200).send("this is controller"))
export default router;