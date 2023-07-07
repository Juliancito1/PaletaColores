const URL_COLORES = import.meta.env.VITE_API_COLORES


export const crearColor = async (color) => {
    try {
        const respuesta = await fetch(URL_COLORES,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(color)
        })
        return respuesta
    } catch (error) {
        console.log(error)
    }
}

export const obtenerColores = async () => {
    try {
        const respuesta = await fetch(URL_COLORES)
        const listaColores = await respuesta.json()
        return listaColores;
    } catch (error) {
        console.log(error)
    }
}

export const borrarColor = async (id) => {
    try {
        const respuesta = await fetch(`${URL_COLORES}/${id}`,{
            method: "DELETE"
        })
        return respuesta;
    } catch (error) {
        
    }
}

export const editarColor = async (color,id) => {
    try {
        const respuesta = await fetch(URL_COLORES+'/'+id,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(color)
        });
        return respuesta
    } catch (error) {
        console.log(error)
    }

}

export const obtenerColor = async (id) => {
    try{
        const respuesta = await fetch(`${URL_COLORES}/${id}`);
        const color = await respuesta.json();
        return color;

    }catch(error)
    {
        console.log(error)
    }
}