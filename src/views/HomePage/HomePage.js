import { React, Component } from "react";
import Axios from "axios";

const api_key = "5236a2719406752a49bdc856168a1fda";

class HomePag extends Component {
  state = { movies: [] };

  async componentDidMount() {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`
    );
    console.log(response.data.results);
    this.setState({ movies: response.data.results });
  }
  render() {
    return (
      <ul>
        {this.state.movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    );
  }
}

export default HomePag;

// const HomePage = () => {
//   return <h1>Домашняя страница со списком популярных кинофильмов</h1>;
// };

// export default HomePage;
