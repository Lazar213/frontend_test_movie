import mainService from 'services/main.service';
import * as actionTypes from '../actionTypes';

export const getSearchList = (params) => async (dispatch) => {
  try {
    const result = await mainService.getSearchList(params);

    dispatch({
      type: actionTypes.GET_SEARCH_LIST_SUCCESS,
      payload: result.posts,
    });
  } catch (e) {
    dispatch({
      type: actionTypes.GET_SEARCH_LIST_FAILED,
    });
  }
};

export const getMovie = (id, params) => async (dispatch) => {
  dispatch({
    type: actionTypes.GET_MOVIE_REQUEST,
  });

  try {
    const result = await mainService.getMovie(id, params);

    dispatch({
      type: actionTypes.GET_MOVIE_SUCCESS,
      payload: result.movie_results,
    });
  } catch (e) {
    dispatch({
      type: actionTypes.GET_MOVIE_FAILED,
    });
  }
};
