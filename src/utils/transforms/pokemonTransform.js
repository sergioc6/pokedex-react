export const pokemonDetailTransform = (result) => {
    const {name, url} = result
    const urlNew = url.slice(0, -1)
    const nameCapitalize = name.toUpperCase()
    const id = urlNew.substring(urlNew.lastIndexOf('/')+1)

    return {
        id, name: nameCapitalize, url: urlNew
    }
}