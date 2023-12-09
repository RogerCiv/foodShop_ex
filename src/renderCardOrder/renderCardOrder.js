import { removeCardOrder } from "../helpers/removeCardOrder";
import { saveOrderApi } from "../helpers/saveOrderApi";
import { showBtnPay } from "../helpers/showBtnPay";

export async function renderCardOrder(foodItem,foodCard){

    fetch("http://localhost:4000/categories?id=" + foodItem)
    .then((resp) => {
      if (!resp.ok) {
        throw new Error("Could not found Food");
      }
      return resp.json();
    })
    .then((data) => {
      console.log(data);

      data.map((food) => {
        const orderContainer = document.querySelector(".order");
        const divOrder = document.createElement("div");

        divOrder.classList.add("col-md-12");
        divOrder.classList.add("mt-2")
        divOrder.innerHTML = `
            <div class="card" data-id="${food.id}" data-title="${food.strCategory}" data-price="${food.price}">
            <img
              src="${food.strCategoryThumb}"
              class="card-img-top"
              alt="${food.strCategory}"
            />
            <div class="card-body">
              <h5 class="card-title">${food.strCategory}</h5>
              <p class="card-text">Precio: ${food.price}$</p>
              <a href="#" class="btn btn-link card-link"  data-id="${food.id}">Quitar</a>
            </div>
          </div>
            `;

        orderContainer.appendChild(divOrder);
        removeCardOrder(divOrder,orderContainer,foodCard)
 

       showBtnPay()
      })
    })

}










