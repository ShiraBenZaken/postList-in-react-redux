import JsonPlaceHolder from "../apis/JsonPlaceHolder";

export const fetchPost = () => async (dispatch) => {
    const response = await JsonPlaceHolder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
    const response = await JsonPlaceHolder.get( `/users/${id}` );

    dispatch({ type: 'FETCH_USER', payload: response.data });
}