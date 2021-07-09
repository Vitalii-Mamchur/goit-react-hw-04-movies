import React, { Component } from "react";
import Searchbar from "../../components/Searchbar";
import { onSearchQuery } from "../../api-service/api-service";
import FilmsList from "../../components/FilmsList";

class MoviesPage extends Component {
  state = { movies: [], searchQuery: "" };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchMovies(this.state.searchQuery);
    }
  }

  handleChangeQuery = (query) => {
    this.setState({ searchQuery: query });
  };

  fetchMovies = () => {
    const searchQuery = this.state.searchQuery;
    onSearchQuery(searchQuery).then((res) =>
      this.setState({ movies: res.data.results })
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
