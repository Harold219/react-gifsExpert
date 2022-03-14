export const getGifs = async (category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=12&api_key=46NnZOQ0TxONPmLnjaNX5qAGva4G38HC`;
    const respuesta = await fetch(url);
    const {data} = await respuesta.json()
    const gifs = data.map( img =>{
        return {
            id : img.id,
            title : img.title,
            url : img.images.downsized_medium.url
        }
    } )
    console.log(gifs);
    return gifs;
}