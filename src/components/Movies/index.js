import MovieDetails from "../MovieDetails";
import { Route, Switch, NavLink } from "react-router-dom";

function Movies({ movies }) {
  return (
    <div className="comp orange">
      <h1>Movies Component</h1>
      <nav>
        {movies.map((movie) => {
          return (
            <NavLink key={movie.id} to={`/movies/${movie.id}`}>
              {movie.title}
            </NavLink>
          );
        })}
      </nav>
      <Switch>
        <Route path="/movies/:movieId">
          <MovieDetails movies={movies} />
        </Route>
      </Switch>
    </div>
  );
}

export default Movies;
