const initialState = {
    items: [],
    isLoaded: false
}

export const posts = (state = initialState, action) => {
    switch (action.type) {
        case "SET_POSTS":
            return {
                ...state,
                items: action.payload,
            }

        default:
            return state;
    }
}
