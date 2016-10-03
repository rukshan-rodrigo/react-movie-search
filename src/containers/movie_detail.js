import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectMovie } from '../actions/select_movie';
import { bindActionCreators } from 'redux';

class MovieDetail extends Component {
  render() {

    if(!this.props.movie) {
      return <div>Movie not selected yet!!!</div>
    }

    return (
      <div>
      <h3>Movie Detail!</h3>
    <div> Title: {this.props.movie.Title}</div>
    <div> Pages: {this.props.movie.Id}</div>
    </div>
  );
  }
}

function mapStateToProps(state) {
  return {
    movie: state.ActiveMovie
  }

}

export default  connect(mapStateToProps)(MovieDetail);
