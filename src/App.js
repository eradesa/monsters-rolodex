//import { Component } from 'react';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.componant';
import './App.css';


const App = ()=> {
  console.log('render');
  const [searchField, setSearchField] = useState (''); //[value, serValue]
  const [title,setTitle] = useState('');
  const [monsters, setMonsters] = useState ([]);
  const [filteredMonsters, setFilteredMonsters]= useState(monsters);
  console.log(searchField);

  useEffect (()=>{
    console.log('Effects fired');
    //'http://127.0.0.1:8000/employee'
    //'https://jsonplaceholder.typicode.com/users'
    fetch ('https://jsonplaceholder.typicode.com/users') // call API / Database
      .then ((response)=> response.json()) // if success get json response
    /*.then ((users)=> console.log(users))*/
      .then ((users)=> setMonsters(users));

  }, []);//[] re call the useEffects based on the []
  
  useEffect (()=>{// run only when the search field changes
    const newFilteredMonsters = monsters.filter( (monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
    console.log('fillered monsters fired');
  }, [monsters, searchField])// run only when the search field changes


  const onSearchChange = (event)=>{
    //console.log(event.target.value);
    const searchFieldString = event.target.value.toLocaleLowerCase();           
    setSearchField(searchFieldString);    
  };

  const onTitleChange = (event)=>{
    //console.log(event.target.value);
    const searchFieldString = event.target.value.toLocaleLowerCase();           
    setTitle(searchFieldString);    
  };

  

  return(
    <div className="App">
      <h1 className='app-title'>{title}</h1>
      <SearchBox 
        className='title-search-box'
        onChangeHandler={onSearchChange} 
        placeholder='search monsters' />  
      <br />
      <SearchBox 
        className='monsters-search-box'
        onChangeHandler={onTitleChange} 
        placeholder='set title' />     
      
      <CardList monsters={filteredMonsters} />
    </div>
  );
}
// class App extends Component {
//   constructor (){
//     super();
    
//     this.state={
//       monsters: [],  
//       searchField:'',     
//     };
//     console.log('1.Constructor');
//   }

  // componentDidMount () {
  //   console.log('3.componentDidMount');
  //   //'http://127.0.0.1:8000/employee'
  //   //'https://jsonplaceholder.typicode.com/users'
  //   fetch ('https://jsonplaceholder.typicode.com/users') // call API / Database
  //     .then ((response)=> response.json()) // if success get json response
  //     /*.then ((users)=> console.log(users))*/
  //     .then ((users)=> this.setState( 
  //       //Caller function
  //       ()=>{
  //       return {monsters:users} //from json Response get the data set and display
  //       },
  //       //callback function
  //       ()=>{
  //         //console.log(this.state) //get the confirmation that the data set was sent
  //       },     
  //     ));
  // }

//   onSearchChange = (event)=>{
//     //console.log(event.target.value);
//     const searchField = event.target.value.toLocaleLowerCase();           

//     this.setState(()=>{
//       return {searchField };
//     });

//   }

  
//   render(){ 
//     console.log('2.render / re-render');
//     const {monsters, searchField} = this.state // as a shortcut so not to user 'this.state' everywhere
//     const {onSearchChange} = this // as a shortcut so not to user 'this' everywhere
//     const filteredMonsters = monsters.filter( (monster)=>{
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });
//       return (
//         <div className="App">
//           <h1 className='app-title'>Mosters Rolodex</h1>
//           <SearchBox 
//             className='monsters-search-box'
//             onChangeHandler={onSearchChange} 
//             placeholder='search monsters' />
//           <CardList monsters={filteredMonsters} />
//         </div>
//       );
//   }
// }

export default App;
