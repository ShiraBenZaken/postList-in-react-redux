import _ from 'lodash';
import JsonPlaceHolder from "../apis/JsonPlaceHolder";


export const fetchPost = () => async (dispatch) => {
    const response = await JsonPlaceHolder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

/********* first way - overFatching => memorize *********/
// export const fetchUser = (id) => (dispatch) =>  _fetchUser(id, dispatch);
// const _fetchUser = _.memoize( async (id, dispatch) => {
//     const response = await JsonPlaceHolder.get( `/users/${id}` );

//     dispatch({ type: 'FETCH_USER', payload: response.data });
// });

/********* second way - overFatching => memorize *********/
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPost());
    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    userIds.forEach(id=> dispatch(fetchUser(id)));
 };
 
 export const fetchUser = (id) => async (dispatch) => {
     const response = await JsonPlaceHolder.get( `/users/${id}` );
 
     dispatch({ type: 'FETCH_USER', payload: response.data });
 }

