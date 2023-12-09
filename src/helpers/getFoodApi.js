import { renderCardFoods } from "../renderCardFoods/renderCardFoods";


export async function getFoodApi(url,container){

    try{
        const respon = await fetch(url)
        if(!respon.ok){
            throw new Error("Error API")
        }
        const data = await respon.json()

        console.log(data);

        data.map((food) => {
          renderCardFoods(container,food)
        })
    }catch(err){
        console.log("Error: ",err)
    }
}