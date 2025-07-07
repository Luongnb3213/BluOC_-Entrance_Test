import {
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  DELETE_POST,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  UPDATE_POST,
} from './actionsType';

export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});
export const fetchPostsFailure = (error) => ({
  type: FETCH_POSTS_FAILURE,
  payload: error,
});

export const addPostSuccess = (post) => ({
  type: ADD_POST_SUCCESS,
  payload: post,
});
export const addPostFailure = (error) => ({
  type: ADD_POST_FAILURE,
  payload: error,
});

export const deletePost = (id) => ({ type: DELETE_POST, payload: id });
export const updatePost = (post) => ({ type: UPDATE_POST, payload: post });

export const fetchPosts = () => async (dispatch) => {
  dispatch({ type: FETCH_POSTS_REQUEST });
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    dispatch(fetchPostsSuccess(posts));
  } catch (error) {
    dispatch(fetchPostsFailure(error.message));
  }
};

export const addPost = (postData) => async (dispatch) => {
  dispatch({ type: ADD_POST_REQUEST });
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData),
    });
    const newPost = await response.json();
    newPost.id = Date.now();
    dispatch(addPostSuccess(newPost));
  } catch (error) {
    dispatch(addPostFailure(error.message));
  }
};
