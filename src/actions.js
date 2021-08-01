import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, SEARCH_CHARACTER } from "./constants";

export const addToFavorites = (payload) => ({type: ADD_TO_FAVORITES, payload});
export const removeFromFavorites = (payload) => ({type: REMOVE_FROM_FAVORITES, payload});

export const searchCharacter = (payload) => ({type: SEARCH_CHARACTER, payload});