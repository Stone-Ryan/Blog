import axios from 'axios';

export const FETCH_POST = 'fetch_post';
export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_posts';
export const DELETE_POST = 'delete_posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=purpleclip1';

export const fetchPosts = () => {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export const createPost = (values, cb) => {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => cb())

  return{
    type: CREATE_POST,
    payload: request
  };
}


export const fetchPost = id => {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export const deletePost = (id, cb) => {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => cb())

  return {
    type: DELETE_POST,
    payload: id
  };
}
