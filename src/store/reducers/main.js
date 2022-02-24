import * as actionTypes from '../actionTypes';

const INITIAL_STATE = {
  isLoading: false,
  list: [],
  movies: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_SEARCH_LIST_SUCCESS:
      return {
        ...state,
        list: action.payload,
      };
    case actionTypes.GET_SEARCH_LIST_FAILED:
      return {
        ...state,
        list: [],
      };
    case actionTypes.GET_MOVIE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.GET_MOVIE_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        isLoading: false,
      };

    case actionTypes.GET_MOVIE_FAILED:
      return {
        ...state,
        movies: [],
        isLoading: false,
      };

    default:
      return state;
  }
};
