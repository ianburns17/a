import express from "express";
import path from "path";
const router = express.Router();
import { getHome } from "../controllers/subscriberController.js";
import { sign } from "../controllers/signup.js";
import { thankyou } from "../controllers/thanksyou.js";
import { postSignup} from "../controllers/con.js";



router.get("/", getHome);

router.get("/signup", sign);

router.post("/signup", postSignup);

router.get("/signups", thankyou );

export default router;
