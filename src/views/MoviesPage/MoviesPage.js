import React, { Component } from "react";
import Searchbar from "../../components/Searchbar";
import { onSearchQuery } from "../../api-service/api-service";
import FilmsList from "../../components/FilmsList";

class MoviesPage extends Component {
  state = { movies: [], searchQuery: "" };

  componentDidMount() {
    if (localStorage.getItem("movies") !== null) {
      this.setState({ movies: JSON.parse(localStorage.getItem("movies")) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchMovies(this.state.searchQuery);
    }
  }

  componentWillUnmount(nextProps, nextState) {
    const movies = this.state.movies;
    localStorage.setItem("movies", JSON.stringify(movies));
  }

  handleChangeQuery = (query) => {
    this.setState({ searchQuery: query });
  };

  fetchMovies = () => {
    const searchQuery = this.state.searchQuery;
    onSearchQuery(searchQuery).then((res) =>
      res.data.total_results
        ? this.setState({ movies: res.data.results })
        : alert("No results were found for your request, please try again")
    );
  };

  render() {
    const movies = this.state.movies;
    const searchQuery = this.state.searchQuery;

    return (
      <>
        <div className="">
          <Searchbar
            onSubmit={this.handleChangeQuery}
            searchQuery={searchQuery}
            onFetch={this.fetchMovies}
          />
        </div>
        <div className="">
          <FilmsList films={movies} />
        </div>
      </>
    );
  }
}

export default MoviesPage;
