export const getPokemones = async (limit = 20, offset = 0) => {
    try{
        let url =`http://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const response = await fetch(url)
        return await response.json()
    }catch(error){
        console.log("error: ", error)
    }
}

export const getPokemonData = async (url) => {
    try{
        const response = await fetch(url)
        return await response.json()
    }catch(error){
        console.log("error: ", error)
    }
}

