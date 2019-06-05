import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
           
        }
        
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event){
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name] : value})
    }
    
    render() {
        return (
            <main>
                <form>
                    <input placeholder="First Name" name="firstName" onChange={this.handleChange} />
                    <br />
                    <input placeholder="Last Name" name = "lastName" onChange={this.handleChange}/>
                    <br />
                    <input placeholder="Age" name="age" onChange={this.handleChange} /><br />
                    
                    <label> Gender </label>
                        <input 
                            type="radio" 
                            name="gender" 
                            value="male" 
                            checked = {this.state.gender === "male"}
                            onChange={this.handleChange}/> Male 
                        
                         <input 
                            type="radio" 
                            name="gender" 
                            value="female" 
                            checked = {this.state.gender === "female"}
                            onChange={this.handleChange}/> Female 
                            
                        
                    <br />
                    
                    <label> Destination </label>
                        <select name="destination" value={this.state.destination} 
                        onChange={this.handleChange}>
                            <option value="home">Home</option>
                            <option value="San Francisco">San Francisco</option>
                            <option value="Japan">Japan</option>
                        </select>
                            
                    <br />
                    
                    
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName + " " + this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
               
            </main>
        )
    }
}

export default App
