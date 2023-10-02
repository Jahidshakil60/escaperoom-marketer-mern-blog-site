import express from "express";

import { createPost, getPosts, updatePost, deletePost, getSinglePost } from "../controllers/posts.js";

const router = express.Router();

router.post("/", createPost);
router.get("/", getPosts);
router.get("/:id", getSinglePost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;
