import { React, Component } from "react";
import { NavLink, Route } from "react-router-dom";
import { onSearchMovieByID } from "../../api-service/api-service";
import routes from "../../routes";
import FilmGenre from "../../components/FilmGenre";
import Cast from "../Cast";
import Reviews from "../Reviews";

class MovieDetailsPage extends Component {
  state = {
    poster_path: null,
    title: null,
    popularity: null,
    overview: null,
    genres: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const response = await onSearchMovieByID(movieId);

    this.setState({ ...response.data });
  }

  handleGoBack = () => {
    const { location, history } = this.props;

    history.push(location?.state?.from || routes.home);
  };

  render() {
    const baseImgURL = "https://image.tmdb.org/t/p/w500";
    const { poster_path, title, popularity, overview, genres } = this.state;
    const match = this.props.match;

    return (
      <div className="">
        <button type="button" onClick={this.handleGoBack}>
          (Go back)
        </button>
        {poster_path && (
          <img src={`${baseImgURL}${poster_path}`} width={250} alt={title} />
        )}
        <div className="">
          <h1>{title}</h1>
          <p>User Score: {Math.round(popularity)}%</p>
          <h2>Owerview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <ul>
            {genres.map((genre) => (
              <FilmGenre key={genre.id} filmGenre={genre.name} />
            ))}
          </ul>
          <div className="">
            <p>Additional information</p>
            <NavLink
              to={`${match.url}/cast`}
              className="NavLink"
              activeClassName="NavLinkActive"
            >
              Cast
            </NavLink>
            <NavLink
              to={`${match.url}/reviews`}
              className="NavLink"
              activeClassName="NavLinkActive"
            >
              Reviews
            </NavLink>
          </div>
        </div>

        <div className="">
          <Route path={`${match.path}/cast`} component={Cast} />
          <Route path={`${match.path}/reviews`} component={Reviews} />
        </div>
      </div>
    );
  }
}

export default MovieDetailsPage;
