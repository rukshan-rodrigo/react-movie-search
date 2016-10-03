import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectMovie } from '../actions/select_movie';
import { bindActionCreators } from 'redux';

class MovieList extends Component {

  renderList(movie) {
    console.log(movie);
    const id = movie.id;
    const title = movie.title;
    const overview = movie.overview;
    const release_date = movie.release_date;
    const poster = 'https://image.tmdb.org/t/p/w500/' + movie.poster_path;

    return (
      <tr key={id}>
      <td>{title}</td>
      <td>{overview}</td>
      <td>{release_date}</td>
      <td><img src= {poster} /></td>
      </tr>
  );
  }

  render() {
    return (
      <table className="table table-hover">
      <thead>
      <tr>
      <th>Title</th>
      <th>Overview</th>
      <th>Release Date</th>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectMovie: selectMovie }, dispatch);
}
export default connect(mapStateToProps)(MovieList);