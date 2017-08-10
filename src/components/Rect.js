import React from 'react';
import Shape from './Shape';

function Rect(props){
  const style = {
   display: 'flex',
   backgroundColor: 'Orange',
   padding: '50px 0',
   width: `${3 * 150 + 4 * 50}px`,
   justifyContent: 'space-around'
 };

  return(
    <div className='Rect' style={style}>
      <Shape />
      <Shape />
      <Shape />
    </div>

  )
}

export default Rect;
