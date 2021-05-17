import jsonPlaceholder from "../_apis/jsonPlaceholder";


export const fetchPhotos = () => (dispatch) => {
    jsonPlaceholder.get('/photos?_limit=20').then(({data}) => {
        dispatch(setPhotos(data));
    })
}


export const setPhotos = (items) => ({
    type: 'SET_PHOTOS',
    payload: items
})
