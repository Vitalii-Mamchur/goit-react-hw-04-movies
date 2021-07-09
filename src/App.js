import React, { Suspense, lazy } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import routes from "./routes";
import Loader from "react-loader-spinner";
import "./App.css";

const HomePage = lazy(() =>
  import("./views/HomePage" /*webpackCunkName: 'home-view'*/)
);
const MoviesPage = lazy(() =>
  import("./views/MoviesPage" /*webpackCunkName: 'movies-view'*/)
);
const MovieDetailsPage = lazy(() =>
  import("./views/MovieDetailsPage" /*webpackCunkName: 'details-view'*/)
);
const Cast = lazy(() =>
  import("./views/Cast" /*webpackCunkName: 'cast-view'*/)
);
const Reviews = lazy(() =>
  import("./views/Reviews" /*webpackCunkName: 'reviews-view'*/)
);
// import NotFoundView from "./views/NotFoundView";

const App = () => (
  <>
    <ul className="flexNav">
      <li className="flexNav_item">
        <NavLink
          exact
          to={routes.home}
          className="NavLink"
          activeClassName="NavLinkActive"
        >
          Home Page
        </NavLink>
      </li>
      <li className="flexNav_item">
        <NavLink
          exact
          to={routes.movies}
          className="NavLink"
          activeClassName="NavLinkActive"
        >
          Movies Page
        </NavLink>
      </li>
    </ul>
    <Suspense
      fallback={
        <Loader type="ThreeDots" color="#000000" height={80} width={80} />
      }
    >
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.movies} component={MoviesPage} />
        <Route path={routes.movieDetails} component={MovieDetailsPage} />
        <Route path={routes.cast} component={Cast} />
        <Route path={routes.reviews} component={Reviews} />
        <Route component={HomePage} />
      </Switch>
    </Suspense>
  </>
);

export default App;
