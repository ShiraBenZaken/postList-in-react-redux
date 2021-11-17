import JsonPlaceHolder from "../apis/JsonPlaceHolder";

export const fetchPost = () => async (dispatch) => {
    const response = await JsonPlaceHolder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data });
};