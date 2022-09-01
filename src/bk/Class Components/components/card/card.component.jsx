import { Component } from "react";
import './card.styles.css'

class Card extends  Component{
    render () {
        const {id, name, email} =this.props.monster; // as a shortcut so no need to add 'monster.id/name/email
        return (
            <div className='card-container' key={id}> {/*THIS key={id} IS NOT NEEDED HERE, NEEDS ONLY AT PARENT CONTAINER LEVEL*/}
                  <img 
                  alt={`monster ${name}`} 
                  src={`https://robohash.org/${id}?set=set2`}/>
                  <h2>{name}</h2>
                  <p>{email}</p>
            </div>
        );

    }
}

export default Card;