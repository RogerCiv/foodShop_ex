import { saveOrderApi } from "./saveOrderApi"

export function handlePay() {

    const orderItems = Array.from(document.querySelectorAll(".order .card"))
  
    const products = orderItems.map((order) => {
      return{
        id: order.dataset.id,
        title: order.dataset.title,
        price: parseFloat(order.dataset.price),
      }
    })
  
    const total = products.reduce((total,order) => total + order.price,0)
  
    const orderData = { products, total }
  
    console.log(orderData);
  
    let arrayLS = []
  
    if(localStorage.getItem("OrderFoods")){
      arrayLS =JSON.parse(localStorage.getItem("OrderFoods"))
  
      if(!Array.isArray(arrayLS)){
        arrayLS = []
      }
      
    }
    arrayLS.push(orderData)
    
    localStorage.setItem("OrderFoods",JSON.stringify(arrayLS))
  
    saveOrderApi(orderData).then( () => {
      location.reload()
    })
  
  }