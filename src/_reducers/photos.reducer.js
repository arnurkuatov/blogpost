const initialState = {
    items: [],
    isLoaded: false
}

export const photos = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PHOTOS":
            return {
                ...state,
                items: action.payload,
            }

        default:
            return state;
    }
}
