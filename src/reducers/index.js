import { combineReducers } from 'redux';
import MovieReducer from './reducer_movies';
import ActiveMovie from './reducer_active_movie';

const rootReducer = combineReducers({
  movie: MovieReducer,
  activeMovie: ActiveMovie
});

export default rootReducer;
