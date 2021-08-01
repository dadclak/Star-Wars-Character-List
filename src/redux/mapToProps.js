import { addToFavorites, removeFromFavorites, searchCharacter } from '../actions';

export const mapStateToProps = (state) => {
  return {
    favorites: state.charactersReducer,
    searchCharacter: state.searchReducer,
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (id, name) => dispatch(addToFavorites({id, name})),
    removeFavorite: (id, name) => dispatch(removeFromFavorites({id, name})),
    setSearchCharacter: (name) => dispatch(searchCharacter(name))
  }
}