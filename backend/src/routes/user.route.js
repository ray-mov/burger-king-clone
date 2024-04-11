import { Router } from "express";
import { loginUser, googleAuthCallback } from "../controllers/user.controller";

const router = Router()

router.route("/auth/google").get(loginUser)
router.route("/auth/google/callback").get(googleAuthCallback)


export default router