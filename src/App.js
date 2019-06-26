import React from 'react';
import Login from './Components/Login';
import './App.css';
class App extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    const a= localStorage.getItem("rememberMe")===true;
    const b = a ? localStorage.getItem("userName"):"";
    this.setState({a,b});
  }
  render(){
  return (
    <div className="App">
    
     <Login/>
    </div>
  );
}
}

export default App;
