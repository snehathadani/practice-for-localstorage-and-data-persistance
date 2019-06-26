import React from 'react';


class Login extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            userName: "",
            rememberMe:false
        }
    }
    handleChange= (event)=>{
       const input= event.target;
       const value= input.type=== "checkbox" ? input.ticked : input.value;
       this.setState({ [input.name]: value})
       
    }
  
    handleSubmit= ()=> {
        localStorage.setItem("rememberMe", this.state.rememberMe);
        localStorage.setItem("userName",this.state.rememberMe ? this.state.userName :"");
    }
    render(){
        return(
           <form>
                <label>
                    <input 
                    name="userName"
                    value={this.state.userName}
                    onChange= {this.handleChange}
                   />
                
                </label>

                <label>
                    <input
                    name="rememberMe"
                    type="checkbox"
                    ticked={this.state.rememberMe}
                    onChange={this.handleChange}
                    />
                </label>
                <button type= "submit"> Log In</button>
           </form>
        );
    }
}

export default Login;