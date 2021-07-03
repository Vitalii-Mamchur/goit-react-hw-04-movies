import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./views/HomePage";
import MoviesPage from "./views/MoviesPage";
import MovieDetailsPage from "./views/MovieDetailsPage";
import Cast from "./views/Cast";
import Reviews from "./views/Reviews";
// import NotFoundView from "./views/NotFoundView";

/*
https://api.themoviedb.org/3/movie/550?api_key=5236a2719406752a49bdc856168a1fda
*/
const App = () => (
  <>
    <ul>
      <li>
        <NavLink
          exact
          to="/"
          className="NavLink"
          activeClassName="NavLinkActive"
        >
          Home Page
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          to="/movies"
          className="NavLink"
          activeClassName="NavLinkActive"
        >
          Movies Page
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies/:movieId"
          className="NavLink"
          activeClassName="NavLinkActive"
        >
          Movie Details Page
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies/:movieId/cast"
          className="NavLink"
          activeClassName="NavLinkActive"
        >
          Cast
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies/:movieId/reviews"
          className="NavLink"
          activeClassName="NavLinkActive"
        >
          Reviews
        </NavLink>
      </li>
    </ul>

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/movies" component={MoviesPage} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
      <Route path="/movies/:movieId/cast" component={Cast} />
      <Route path="/movies/:movieId/reviews" component={Reviews} />
      <Route component={HomePage} />
    </Switch>
  </>
);

export default App;
