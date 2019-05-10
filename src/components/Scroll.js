import React from 'react';

const Scroll = (props) => {
    return (
        <div className="ma2" style={{overflow: 'scroll', border: '1px solid brown', height:'1000px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;