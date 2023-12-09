import { showBtnPay } from "./showBtnPay";

export function removeCardOrder(element,container,foodCard){
    const removeButton = element.querySelector('.card-link')
  
    removeButton.addEventListener("click" , () => {
        console.log(removeButton);
        container.removeChild(element)
        foodCard.style.opacity = 1;
        const addButton = foodCard.querySelector(".card-link")
        addButton.style.display = "block"
        showBtnPay()
    })
  }