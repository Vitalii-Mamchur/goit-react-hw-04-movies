import React, { Component } from "react";
import { onSearchReviewsByID } from "../../api-service/api-service";

class Reviews extends Component {
  state = {
    contentsArr: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const response = await onSearchReviewsByID(movieId);

    this.setState({ contentsArr: response.data.results });
  }

  render() {
    const { contentsArr } = this.state;
    return (
      <>
        {contentsArr.length > 0 ? (
          <ul className="">
            {contentsArr.map(({ author, content }) => (
              <li key={author}>
                <h2>Author: {author}</h2>
                <p>"{content}"</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We don`t have reviews for this movie.</p>
        )}
      </>
    );
  }
}

export default Reviews;
