import express from 'express';
import { MoviesIndex } from '../controllers/movies.controllers.js';
const router = express.Router();

router.get("/", MoviesIndex);

router.post("/", () => {

});

router.put("/:id", () => {

});

router.delete("/:id", () => {

});

export default router;