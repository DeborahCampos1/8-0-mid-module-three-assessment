import "./App.css";
import { Component } from "react";
import CheckoutForm from "./components/CheckoutForm";
import productData from "./data/productData"; 
import formatPrice from "./helpers/formatPrice";




class App extends Component{
  constructor(){
    super();

    this.state = {

      // productList: productData ,
      productName: "",
      productPrice: 0,
      productDescription: "",

      cartContents: [],


      subTotal: 0,
      tax: 0,
      totalPrice: 0,
      

    }
    
  }

  handleAddToCart=(product)=>{

    console.log("triggw")

    // const {cartContents, subTotal, tax, productPrice, totalPrice} = this.state;
     this.setState({
      // productName: product.name,
      // productPrice: product.price,
      subTotal: this.state.subTotal + product.price,
      cartContents: [...this.state.cartContents, product],
      // tax: this.state.subTotal * .05,
      // totalPrice: this.state.subTotal + this.state.tax

     })
  }
  render(){

    let productsToDisplay = productData.map((product)=>{
      return(
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{formatPrice(product.price)}</p>
          <img src={product.img} alt={product.name}></img>
          <p>{product.description}</p>
          <button type="submit" onClick={()=>this.handleAddToCart(product)}>Add to Cart</button>
        </div>
      )
    })
    return(
      <div id="app-container"> 
        <h1>Garage Sale Products</h1>
        <div className="products" >
          {productsToDisplay}
        </div>
        <div id="shopping-cart-container">
                <h2>Shopping Cart</h2>
                <ul>
                    <li>{this.state.cartContents}</li>
                </ul>
                <div><b>Subtotal:{formatPrice(this.state.subTotal)} </b></div>
                <br/>
                <div><b>Tax:{formatPrice(this.state.tax)}</b></div>
                <br/>
                <div><b>Total:{formatPrice(this.state.totalPrice)} </b></div>
            </div>
       
        {/* <ShoppingCart handleAddToCart={this.handleAddToCart}/> */}
        <CheckoutForm />
       

      </div>
    )
  }
}

export default App;
