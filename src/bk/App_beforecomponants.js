import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (){
    super();
    
    this.state={
      monsters: [],  
      searchField:'',
      /*monsters: [
        {
          name:'Linda',
          id:1
        },
        {
          name:'Frank',
          id:2
        },
        {
          name:'Jacky',
          id:3
        },
        {
          name:'Era',
          id:4
        },
      ]*/
    };
    console.log('1.Constructor');
  }

  componentDidMount () {
    console.log('3.componentDidMount');
    //'http://127.0.0.1:8000/employee'
    //'https://jsonplaceholder.typicode.com/users'
    fetch ('https://jsonplaceholder.typicode.com/users') // call API / Database
      .then ((response)=> response.json()) // if success get json response
      /*.then ((users)=> console.log(users))*/
      .then ((users)=> this.setState( 
        //Caller function
        ()=>{
        return {monsters:users} //from json Response get the data set and display
        },
        //callback function
        ()=>{
          console.log(this.state) //get the confirmation that the data set was sent
        },     
      ));
  }

  onSearchChange = (event)=>{
    console.log(event.target.value);
    const searchField = event.target.value.toLocaleLowerCase();           

    this.setState(()=>{
      return {searchField };
    });

  }

  
  render(){ 
    console.log('2.render / re-render');
    const {monsters, searchField} = this.state // as a shortcut so not to user 'this.state' everywhere
    const {onSearchChange} = this // as a shortcut so not to user 'this' everywhere
    const filteredMonsters = monsters.filter( (monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
      return (
        <div className="App">
          <input 
            className='search-box' 
            type='search' 
            placeholder='search monsters'
            /*onChange={(event)=>{
              console.log(event.target.value);
              const searchField = event.target.value.toLocaleLowerCase();           

              this.setState(()=>{
                return {searchField };
              });

            }}*/
            onChange={onSearchChange}
            />
          {
            filteredMonsters.map(
              //Call Back Function
              (monster)=>{
                //return <div key={monster.EmployeeId}><h1>{monster.EmployeeName}</h1><p>{monster.Department}</p></div>
                return <div key={monster.id}><h1>{monster.name}</h1></div>

              })
          }
        </div>
      );
  }
}

export default App;
