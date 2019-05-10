import React from 'react';


const Card = ({id, name, username, email}) => {
    return (
        <div className="tc bg-light-red dib br3 pa3 ma3 grow shadow-2">
            <img src={`https://robohash.org/${id}?size=200x200`} alt=""/>
            <hr className="mw3 bb bw1 b--black-30"></hr>
            <div className="tc">
                <h3 className="f6">{name}</h3>
                <h4 className="f6">{username}</h4>
                <h4 className="f6">{email}</h4>
            </div>         
        </div>
    );
}


export default Card;