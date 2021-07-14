import { React, Component } from "react";
import { NavLink, Route } from "react-router-dom";
import { onSearchMovieByID } from "../../api-service/api-service";
import routes from "../../routes";
import Cast from "../Cast";
import Reviews from "../Reviews";
import styles from "./MovieDetailsPage.module.css";

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
    const { from } = this?.props?.location?.state || {
      from: { pathname: routes.home },
    };

    return (
      <div className="">
        <button
          className={styles.btn}
          type="button"
          onClick={this.handleGoBack}
        >
          Go back
        </button>
        <div className={styles.movieDetails}>
          {poster_path ? (
            <img
              className={styles.poster}
              src={`${baseImgURL}${poster_path}`}
              alt={title}
              width={250}
            />
          ) : (
            <img
              src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY4QwEbxykmVJXnG52vFdJarRhXRRBkbTiCg&usqp=CAU/`}
              alt={title}
              width={250}
            ></img>
          )}
          <div className={styles.infoBlock}>
            <h1>{title}</h1>
            <p>User Score: {Math.round(popularity)}%</p>
            <h2>Owerview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <ul>
              {genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.additionalInfo}>
          <h2>Additional information</h2>
          <ul className={styles.link}>
            <li>
              <NavLink
                exact
                to={{
                  pathname: `${match.url}/cast`,
                  state: {
                    from: from,
                  },
                }}
                className={styles.NavLink}
                activeClassName={styles.NavLinkActive}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: `${match.url}/reviews`,
                  state: {
                    from: from,
                  },
                }}
                className={styles.NavLink}
                activeClassName={styles.NavLinkActive}
              >
                Review
              </NavLink>
            </li>
          </ul>
        </div>
        <Route path={`${match.path}/cast`} component={Cast} />
        <Route path={`${match.path}/reviews`} component={Reviews} />
      </div>
    );
  }
}

export default MovieDetailsPage;
