const express = require("express");
const app = express();

app.use(express.json());


let movies = [
  { id: 1, title: "Scarface", rating: 8.8, genre: "Drama" },
  { id: 2, title: "Interstellar", rating: 8.6, genre: "Sci-Fi" },
  { id: 3, title: "Titanic", rating: 7.8, genre: "Drama" }
];

/* 1) GET ჩამონათვალი / ფილტრაცია*/
app.get("/movies", (req, res) => {
  const { genre } = req.query;

  let result = movies;
  if (genre) {
    result = movies.filter(m => m.genre === genre);
  }

  res.json(result);
});

/* 2) GET ძიება სათაურით ან ID */
app.get("/movies/search", (req, res) => {
  const { title, id } = req.query;

  let movie = null;

  if (id) {
    movie = movies.find(m => m.id === Number(id));
  } else if (title) {
    movie = movies.find(m =>
      m.title.toLowerCase().includes(title.toLowerCase())
    );
  }

  if (!movie) {
    return res.status(404).json({ message: "Movie not found" });
  }

  res.json(movie);
});

/*3) POST ახალი ფილმის დამატება*/
app.post("/movies", (req, res) => {
  const { title, rating, genre } = req.body;

  if (!title || !rating || !genre) {
    return res.status(400).json({ message: "All fields required" });
  }

  const newMovie = {
    id: movies.length ? movies[movies.length - 1].id + 1 : 1,
    title,
    rating,
    genre
  };

  movies.push(newMovie);
  res.status(201).json(newMovie);
});

/* 4) DELETE ფილმის წაშლა (id ან title)*/
app.delete("/movies", (req, res) => {
  const { id, title } = req.query;

  const index = movies.findIndex(m =>
    id ? m.id === Number(id) : m.title === title
  );

  if (index === -1) {
    return res.status(404).json({ message: "Movie not found" });
  }

  const deletedMovie = movies.splice(index, 1);
  res.json(deletedMovie[0]);
});

/*5) GET ფილტრაცია რეიტინგით (min / max)*/
app.get("/movies/rating", (req, res) => {
  const { min, max } = req.query;

  const result = movies.filter(m =>
    (!min || m.rating >= Number(min)) &&
    (!max || m.rating <= Number(max))
  );

  res.json(result);
});


app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
