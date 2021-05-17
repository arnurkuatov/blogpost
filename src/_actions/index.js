export * from './alert.actions';
export * from './user.actions';

import jsonPlaceholder from "../_apis/jsonPlaceholder";


export const fetchUser = (id) => {
    return async dispatch => {
        const response = await jsonPlaceholder.get(`/users/${id}`);
        dispatch({ type: 'FETCH_USER', payload: response.data });
    }
};

