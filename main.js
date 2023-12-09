import { findFoodsApi } from './src/helpers/findFoodsApi'
import { getFoodApi } from './src/helpers/getFoodApi'
import './style.css'


const app = document.querySelector('#app')

const cardsContainer = document.querySelector(".cards")
const btnSearch = document.getElementById("btnSearch")
const inputSearch = document.getElementById("inputSearch")
const url = "http://localhost:4000/categories"

getFoodApi(url,cardsContainer)



btnSearch.addEventListener("click", () => {

    if(inputSearch.value === ""){
        getFoodApi(url,cardsContainer)
    }else{
        findFoodsApi(url,inputSearch.value,cardsContainer)
    }
})

inputSearch.addEventListener("keydown", (e) => {

    if(e.key === "Escape" || (inputSearch.value === "" && e.key === "Enter")){
        getFoodApi(url,cardsContainer)
    }else if(e.key === "Enter"){
        findFoodsApi(url,inputSearch.value,cardsContainer)
    }
})

