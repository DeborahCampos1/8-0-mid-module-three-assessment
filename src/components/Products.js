import { Component } from "react"
import formatPrice from "../helpers/formatPrice";


class Products extends Component{
    constructor(){
        super()
       
          }
    

    render(){
        const {productPrice} = this.props

        return(
            <div id="product-list-container">
                <h1>Items for sale go here</h1>
                <div>
                    <h2>Product Name</h2>
                    <p>Price: </p>
                    <p></p>
                    <button type="submit" onClick={this.handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        )
    }
}

