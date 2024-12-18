import express from 'express';
import { MoviesCreate, MoviesIndex } from '../controllers/movies.controllers.js';
const router = express.Router();

router.get("/", MoviesIndex);

router.post("/", MoviesCreate);

router.put("/:id", () => {

});

router.delete("/:id", () => {

});

export default router;