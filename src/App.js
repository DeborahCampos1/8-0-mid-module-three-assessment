import "./App.css";
import productData from "./data/productData"; 
import CheckoutForm from "./components/CheckoutForm";
import { Component } from "react";



class App extends Component{
  constructor(){
    super();
    this.state = {

      productList: productData,

      productName: "",
      productPrice: 0,
      productDescription: "",

      subTotal: 0,
      tax: 0,
      totalPrice: 0

    }
  }
  render(){
    return(
      <div> 
        
      </div>
    )
  }
}

export default App;
