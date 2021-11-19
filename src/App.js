import "./App.css";
import productData from "./data/productData"; 
import CheckoutForm from "./components/CheckoutForm";
import { Component } from "react";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";



class App extends Component{
  constructor(){
    super();
    this.state = {

      productList: productData,

      productName: "",
      productPrice: 0,
      productDescription: "",

    }
  }
  render(){
    return(
      <div id="app-container"> 
        <Products />
        <ShoppingCart />
        <CheckoutForm />

      </div>
    )
  }
}

export default App;
