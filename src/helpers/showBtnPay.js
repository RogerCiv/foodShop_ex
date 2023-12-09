import { handlePay } from "./handlePay";


export function showBtnPay(){
    const orderItems = document.querySelectorAll(".order .card")
    const btnPay = document.querySelector(".pay-button")
  
    if(orderItems.length > 0){
      btnPay.classList.remove("d-none");
      btnPay.classList.add("d-block");
    } else {
      btnPay.classList.remove("d-block");
      btnPay.classList.add("d-none");
    }
  
    btnPay.addEventListener("click",handlePay)
}