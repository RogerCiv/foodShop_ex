import { renderCardOrder } from "../renderCardOrder/renderCardOrder"

export function renderCardFoods(container,foodData){

    //let description = foodData.strCategoryDescription.split(' ').slice(0,18).join(' ') + "..."
    //console.log(description);
    container.innerHTML += `
    <div class="col-md-4">
    <div class="card">
      <img
        src="${foodData.strCategoryThumb}"
        class="card-img-top"
        alt="${foodData.strCategory}"
      />
      <div class="card-body">
        <h5 class="card-title">${foodData.strCategory}</h5>
       
        <p class="card-text">Precio: ${foodData.price}$</p>
        <a href="#" class="btn btn-link card-link" data-id="${foodData.id}">Añadir</a>
      </div>
    </div>
  </div>
    `

    const addButton = document.querySelectorAll('.card-link')

    addButton.forEach(add => {
        add.addEventListener("click", (e) => {
//            console.log(e.target);
            const foodItem = e.currentTarget.getAttribute("data-id")
            console.log(foodItem);

            const div = e.target.closest('.card')
          //  console.log(div);
            div.style.opacity = 0.3
            e.target.style.display = "none"
            renderCardOrder(foodItem,div)
        })
    })
}