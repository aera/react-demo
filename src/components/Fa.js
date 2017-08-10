import React from 'react';

function Fa(props){
  const {kind, size, spin=false, color} = props;

  //size = '8em';
  //color = 'Red'

  const fontAwesome = function(){
    let iconKind, iconSpin, iconSize

    if (kind) {iconKind = `fa-${kind}`}
    if (spin) {iconSpin = `fa-spin`}
    if (size) {iconSize = `fa-${size}`}

    return `fa ${iconKind} ${iconSpin} ${iconSize}`
  }

  const style = {
    color: `${color}`,
    size: `${size}`
  }

  return(
    <div>
      <i className={fontAwesome()} style={style} />
    </div>
  )
}

export default Fa;
