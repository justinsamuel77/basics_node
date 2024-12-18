import Movie from "../models/movie.model.js";

export const MoviesIndex = (req, res) => {
    res.send("Get Successfully")
};

export const MoviesCreate = async (req, res) => {

    const newMovie = new Movie({
        title: req.body.title,
        desc: req.body.desc
    });

    try {
        const movie = await newMovie.save();
        return res.status(201).json(movie);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};