import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (){
    super();
    
    this.state={
      monsters: [],        
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
    fetch ('http://127.0.0.1:8000/employee') // call API / Database
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
  render(){ 
    console.log('2.render / re-render');
      return (
        <div className="App">
          <input 
            className='search-box' 
            type='search' 
            placeholder='search monsters'
            onChange={(event)=>{
              console.log(event.target.value);
              const searchString = event.target.value.toLocaleLowerCase();
              const filteredMonsters = this.state.monsters.filter((monster)=>{
                return monster.EmployeeName.toLocaleLowerCase().includes(searchString);
              });

              this.setState(()=>{
                return {monsters:filteredMonsters };
              });

            }}
            />
            <table className="table table-striped">
    <thead>
    <tr>
        <th>
            EmployeeId
        </th>
        <th>
            EmployeeName
        </th>
        <th>
            Department
        </th>
        <th>
            DOJ
        </th>
        <th>
            Options
        </th>
    </tr>
    </thead>
    <tbody>
        {this.state.monsters.map(emp=>
            <tr key={emp.EmployeeId}>
                <td>{emp.EmployeeId}</td>
                <td>{emp.EmployeeName}</td>
                <td>{emp.Department}</td>
                <td>{emp.DateOfJoining}</td>
                <td>
                <button type="button"
                className="btn btn-light mr-1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={()=>this.editClick(emp)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                </button>

                <button type="button"
                className="btn btn-light mr-1"
                onClick={()=>this.deleteClick(emp.EmployeeId)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg>
                </button>

                </td>
            </tr>
            )}
    </tbody>
    </table>
            



          {/*
            this.state.monsters.map(
              //Call Back Function
              (monster)=>{
                return <div key={monster.EmployeeId}><h1>{monster.EmployeeName}</h1><p>{monster.Department}</p></div>
                //return <div key={monster.id}><h1>{monster.name}</h1></div>

              })
            */}
        </div>
      );
  }
}

export default App;
