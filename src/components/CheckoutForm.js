import { Component } from "react";

class CheckoutForm extends Component{
    constructor(){
        super()

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            creditCard: "",
            zipCode: ""
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault();

        console.log("trigger")
        // 
        // this.setState({
            // firstName:,
            // lastName:,
            // email:,

        // })
    }

    handleFirstName=(e)=>{
        this.setState({
            firstName: e.target.value
        })
    }

    handleLastName=(e)=>{
        this.setState({
            lastName: e.target.value
        })
    }

    handleEmail=(e)=>{
        this.setState({
            email: e.target.value
        })
    }

    handleCreditCard=(e)=>{
        this.setState({
            creditCard: e.target.value
        })
    }
    handleZipCode=(e)=>{
        this.setState({
            zipCode: e.target.value
        })
    }

    render(){
        return(
            <div id="checkout-form-container">
                <h2>Checkout</h2>
                <form id="checkout" onSubmit ={this.handleSubmit}>
                    <label htmlFor="first-name">First Name</label>
                    <input
                        onChange={this.handleFirstName}
                        value={this.state.firstName}
                        type="text"
                        name="firstName"
                        id="fitst-name"
                    />
                    <br/>
                    <label htmlFor="last-name">Last Name</label>
                    <input
                        onChange={this.handleLastName}
                        value={this.state.lastName}
                        type="text"
                        name="lastName"
                        id="last-name"
                    />
                     <br/>
                    <label htmlFor="email">Email</label>
                    <input
                        onChange={this.handleEmail}
                        value={this.state.email}
                        type="email"
                        name="email"
                        id="email"
                    />
                     <br/>
                    <label htmlFor="credit-card">Credit Card</label>
                    <input
                        onChange={this.handleCreditCard}
                        value={this.state.creditCard}
                        type="number"
                        name="creditCard"
                        id="credit-card"
                    />
                     <br/>
                    <label htmlFor="zip-code">Zip Code</label>
                    <input
                        onChange={this.handleZipCode}
                        value={this.state.zipCode}
                        type="number"
                        name="zipCode"
                        id="zip-code"
                    />
                    <br/>
                    <button type="submit">Buy Now</button>
                </form>
            </div>
        )
    }
}

export default CheckoutForm
