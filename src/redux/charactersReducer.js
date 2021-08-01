import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../constants";

const charactersReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_FAVORITES:
            return [...state, {
                id: action.payload.id,
                name: action.payload.name,
            }];
        case REMOVE_FROM_FAVORITES:
            state = state.filter(obj => obj.id !== action.payload.id)
            return state;
        default:
            return state;
    }
}

export default charactersReducer;