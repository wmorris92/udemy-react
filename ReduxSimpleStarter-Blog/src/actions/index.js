import axios from 'axios';


export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
import APIKeys from '../../keys';
const API_KEY = APIKeys.reduxBlogKey;

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts?key=${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}