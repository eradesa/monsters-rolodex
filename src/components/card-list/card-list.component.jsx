//import { Component } from "react";
import Card from '../card/card.component'
import './card-list.styles.css'

const  CardList = ({monsters})=>(
      <div className='card-list'>
        {monsters.map((monster)=>{
            const {id} =monster; // as a shortcut so no need to add 
            return (<div  key={id}> {/*THIS key={id} IS ONLY NEEDED HERE @ PARENT CONTAINER LEVEL AND NOT AT CHILD LEVEL*/}
                    <Card monster={monster} />
                    </div>);                              
        })}
      </div>
  ); 


// const  CardList = (props)=>{
//   //console.log(this.props)
//   console.log('render')
//   const {monsters} = props
//   return (
//       <div className='card-list'>
//         {monsters.map(
                        
//           (monster)=>{
//             const {id} =monster; // as a shortcut so no need to add 
//             return (
//           <div  key={id}> {/*THIS key={id} IS ONLY NEEDED HERE @ PARENT CONTAINER LEVEL AND NOT AT CHILD LEVEL*/}
//           <Card monster={monster} />
//           </div>);                              
//         })}
//       </div>
//   ); 
// }
export default CardList;