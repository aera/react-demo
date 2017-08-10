import React from 'react';

function Shape(props){
  const {bgColor = 'Blue', type = 'square'} = props;

  const style = {
    borderRadius: type === 'circle' ? '99999999px' : '0px',
    width: '100px',
    height: '100px',
    backgroundColor: bgColor
  }

  return (
    <div style={style}> </div>
  )
}

export default Shape;
