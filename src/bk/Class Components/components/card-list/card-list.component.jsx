import { Component } from "react";
import Card from '../card/card.component'
import './card-list.styles.css'

class CardList extends  Component{
    render () {
        //console.log(this.props)
        console.log('render')
        const {monsters} = this.props
        return (
            <div className='card-list'>
              {monsters.map(
              //Call Back Function
                /*(monster)=>{
                  const {name, email, id} =monster; // as a shortcut so no need to add 'monster.id/name/email
                  return(               
                  <div className='card-container' key={id}>
                    <img 
                    alt={`monster ${name}`} 
                    src={`https://robohash.org/${id}?set=set2`}/>
                    <h2>{name}</h2>
                    <p>{email}</p>
                  </div>);
                }*/
                
                (monster)=>{
                  const {id} =monster; // as a shortcut so no need to add 
                  return (
                <div  key={id}> {/*THIS key={id} IS ONLY NEEDED HERE @ PARENT CONTAINER LEVEL AND NOT AT CHILD LEVEL*/}
                <Card monster={monster} />
                </div>);
                                
              }
              )
            }
            </div>
        );

    }
}

export default CardList;