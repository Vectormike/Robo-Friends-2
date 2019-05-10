import React from 'react';
import Card from './Card';


const CardList = ({robots}) => {
    
    return ( 
        <div>
            {
                robots.map((result, i) => {
                return (   
                    <Card 
                        key={i} 
                        id ={robots[i].id} 
                        name={robots[i].name} 
                        username={robots[i].username} 
                        email={robots[i].email}
                    />
                    );
                })
            }       
        </div>

    );
}
export default CardList;