import React, { Component } from "react";
import { onSearchCastByID } from "../../api-service/api-service";
import Acter from "../../components/Acter";

class Cast extends Component {
  state = {
    acters: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const response = await onSearchCastByID(movieId);

    this.setState({ acters: response.data.cast });
  }

  render() {
    const acters = this.state.acters;
    return acters.length > 0 ? (
      <ul className="">
        {acters.map(({ id, name, character, profile_path }) => (
          <Acter
            key={id}
            acterId={id}
            name={name}
            character={character}
            photo={profile_path}
          />
        ))}
      </ul>
    ) : (
      <p>We don`t have cast for this movie.</p>
    );
  }
}

export default Cast;
