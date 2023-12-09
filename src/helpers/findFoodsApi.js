import { renderCardFoods } from "../renderCardFoods/renderCardFoods";

export async function findFoodsApi(url,query,container){

    try{
        const resp = await fetch(`${url}?strCategory=${query}`)
        if (!resp.ok){
            throw new Error("Error al buscar en la API")
        }
        const data = await resp.json()

        console.log(data);

        container.innerHTML = ""
       data.map(food => {
        renderCardFoods(container,food)
       })
    }catch(err){
        console.log("Error: ", err);
    }
}