import { useParams } from "react-router-dom";

function MovieDetails({ movies }) {
  const { movieId } = useParams();
  console.log(movieId);
  let movieChoice = movies.find((movie) => {
    if (movie.id === parseInt(movieId)) {
      return movie;
    }
  });
  console.log(movieId);
  return (
    <div className="comp purple">
      <h1>{movieChoice.title}</h1>
      <p>{movieChoice.description}</p>
    </div>
  );
}

export default MovieDetails;
