import { React, Component } from "react";
import { onSearchTrending } from "../../api-service/api-service";
// import styles from "./HomePage.module.css";
import FilmsList from "../../components/FilmsList";

class HomePage extends Component {
  state = { movies: [], dinamicImgURL: null };

  async componentDidMount() {
    const response = await onSearchTrending();

    this.setState({
      movies: response.data.results,
    });
  }

  render() {
    const movies = this.state.movies;

    return <FilmsList films={movies} />;
  }
}

export default HomePage;
