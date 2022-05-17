import { Router } from "express";

import {
  CharacterController,
  CommentController,
  EpisodeController,
} from "../controllers";
import Validation from "../middleware/validation";

const router = Router();

router.get("/character", CharacterController.getAll);
router.post("/character", Validation('characterSchema'), CharacterController.post); //NOT REQUIRED

router.get("/episode", EpisodeController.getAll);
router.get("/episode/:id", EpisodeController.get);
router.post("/episode", Validation('episodeSchema'), EpisodeController.post); //NOT REQUIRED

router.get("/comment", CommentController.getAll);
router.post("/comment", Validation('commentSchema'), CommentController.post);

export default router;
