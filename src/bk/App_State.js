import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (){
    super();

    this.state={
      name:{firstName:'Eranga', lastName:'de Saram'},
      company:'Home'
    }
  }
  render(){ 
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Hi {this.state.name.firstName} {this.state.name.lastName}, I work at {this.state.company}
            </p>
            <button onClick={()=>{
              this.setState(
                //updater function
                ()=>{
                  return {
                    name:{firstName:'Test', lastName:'TEST0'},
                  }
                },
                //callback function
                ()=>{
                  console.log(this.state);
                })

              //this.setState({name:{firstName:'Test', lastName:'TEST0'}});
              //console.log(this.state);


            }}>Change Name</button>
          </header>
        </div>
      );
  }
}

export default App;
