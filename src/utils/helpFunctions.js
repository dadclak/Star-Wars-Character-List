export const capitalizeFirstLetter= (str) => {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}

export const isFavorite = (arr, id) => {
    const fav = arr ? arr.filter(obj => obj.id === id) : []
    if (fav.length > 0) {
        return true
    }
    return false
}

export const getId = (url) => {
    let id = url.split('/')
    id = id[id.length - 2]
    return id
}
