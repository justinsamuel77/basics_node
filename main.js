import express from "express";
import movieRoutes from "./routes/movies.route.js"
import connectDB from "./lib/db.js";
const app = express();
const PORT = 6969;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

connectDB(); 

app.get('/', (req, res) => {
    res.json({ msg: "Hello Students" })
});

app.use('/movies', movieRoutes);

app.listen(PORT, () => {
    console.log(`The server in running at http://localhost:${PORT}`)
});

// username: justinsamuel295
// password: KhFnstNMJ2XXwOw6