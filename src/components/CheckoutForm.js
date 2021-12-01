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
        const {firstName,lastName, email,creditCard,zipCode} = this.state
        e.preventDefault();

        if(firstName.length <3 || firstName === ""){
            alert("Input is not valid")
            alert("First Name is not valid")
        
        } if(lastName === "" || lastName.length < 2){
            alert("Input is not valid.")
            alert("Last Name is not valid")
            
        } if(creditCard.length !== 16){
            alert("Credit card number is not valid")
        } if(zipCode.length !== 5){
            alert("Zip code is not valid")

        } else {
            alert("Purchase complete $73.49")
        }
        console.log("trigger")
        
        this.setState({
            firstName:"",
            lastName:"",
            email:"",
            creditCard:"",
            zipCode: ""

        })
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
                    <br/>
                    <input
                        onChange={this.handleFirstName}
                        value={this.state.firstName}
                        type="text"
                        name="firstName"
                        id="first-name"
                    />
                    <br/>
                    <label htmlFor="last-name">Last Name</label>
                    <br/>
                    <input
                        onChange={this.handleLastName}
                        value={this.state.lastName}
                        type="text"
                        name="lastName"
                        id="last-name"
                    />
                     <br/>
                    <label htmlFor="email">Email</label>
                    <br/>
                    <input
                        onChange={this.handleEmail}
                        value={this.state.email}
                        type="email"
                        name="email"
                        id="email"
                    />
                     <br/>
                    <label htmlFor="credit-card">Credit Card</label>
                    <br/>
                    <input
                        onChange={this.handleCreditCard}
                        value={this.state.creditCard}
                        type="text"
                        name="creditCard"
                        id="credit-card"
                    />
                     <br/>
                    <label htmlFor="zip-code">Zip Code</label>
                    <br/>
                    <input
                        onChange={this.handleZipCode}
                        value={this.state.zipCode}
                        type="text"
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
