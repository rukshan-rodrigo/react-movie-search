import React, {Component} from 'react';
import { connect } from 'react-redux';
//import { selectMovie } from '../actions/select_movie';
import { bindActionCreators } from 'redux';

class MovieList extends Component {

  renderList(movie) {
    const id = movie.Id;
    const title = movie.Title;
    const genre = movie.Genre;
    const year = movie.ReleaseYear;
    const rating = movie.Rating;
    const image = movie.PosterPath;

    return (
      <tr key={id}>
      <td>{title}</td>
      <td>{genre}</td>
      <td>{year}</td>
      <td>{rating}</td>
      <td><img src={image} className="poster" /></td>
      </tr>
  );
  }

  render() {
    return (
      <table className="table table-hover">
      <thead>
      <tr>
      <th>Title</th>
      <th>Genre</th>
      <th>Year</th>
      <th>Rating</th>
      <th>Poster</th>
      </tr>
      </thead>
      <tbody>{this.props.movies.map(this.renderList)}</tbody>
    </table>
  );
  }

}

function mapStateToProps(state) {
  return {
    movies: state.movie
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ selectMovie: selectMovie }, dispatch);
// }
export default connect( mapStateToProps)(MovieList);