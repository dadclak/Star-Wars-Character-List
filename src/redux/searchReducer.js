import { SEARCH_CHARACTER } from "../constants";

const searchReducer = (state = '', action) => {
    switch (action.type) {
        case SEARCH_CHARACTER:
            return action.payload;
        default:
            return state;
    }
}

export default searchReducer;