import jsonPlaceholder from "../_apis/jsonPlaceholder";


export const fetchPosts = () => (dispatch) => {
    jsonPlaceholder.get('/posts?_limit=20').then(({data}) => {
        dispatch(setPosts(data));
    })
}


export const setPosts = (items) => ({
    type: 'SET_POSTS',
    payload: items
})
