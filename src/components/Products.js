import { Component } from "react"
import formatPrice from "../helpers/formatPrice";
import productData from "../data/productData"; 


class Products extends Component{
    constructor(){
        super()
        this.state = {

            productList: productData,
      
            productName: this.state.productList[0].name,
            productPrice: this.state.productList[0].price,
            productDescription: this.state.productList.productDescription,
      
          }
    }

    render(){
        return(
            <div id="product-list-container">
                <h1>Items for sale go here</h1>
                <div>
                    <h2>Product Name</h2>
                    <p>Price: {formatPrice(this.state.productPrice)}</p>
                    <img src="" alt="" ></img>
                    <p></p>
                </div>
            </div>
        )
    }
}

export default Products