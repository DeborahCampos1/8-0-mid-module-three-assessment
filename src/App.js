import "./App.css";
import { Component } from "react";
import ShoppingCart from "./components/ShoppingCart";
import CheckoutForm from "./components/CheckoutForm";
import productData from "./data/productData"; 
import formatPrice from "./helpers/formatPrice";




class App extends Component{
  constructor(){
    super();

    this.state = {


      productName: "",
      productPrice: 0,
      productDescription: "",

      cartContents: [],


      subTotal: 0,
      tax: 0,
      totalPrice: 0,
      

    }
    
  }

  handleAddToCart=()=>{

    const {cartContents, subTotal, tax, productName, productPrice, totalPrice} = this.state;
    
    this.setState({
      cartContents: [...cartContents, productName, productPrice],
      subTotal: subTotal + productPrice,
      tax: subTotal * .05,
      totalPrice: subTotal + tax

    })
  }
  render(){

    let productsToDisplay = productData.map((product)=>{
      return(
        <div>
          <h2>{product.name}</h2>
          <p>{formatPrice(product.price)}</p>
          <img src={product.img} alt={product.name}></img>
          <p>{product.description}</p>
          <button type="submit" onClick={this.handleAddToCart}>Add to Cart</button>
        </div>
      )
    })
    return(
      <div id="app-container"> 
        <h1>Garage Sale Products</h1>
        <div className="products" >
          {productsToDisplay}
        </div>
        <ShoppingCart handleAddToCart={this.handleAddToCart}/>
        <CheckoutForm />
       

      </div>
    )
  }
}

export default App;
