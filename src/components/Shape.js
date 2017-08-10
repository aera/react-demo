import React, {Component} from 'react';

class Shape extends Component{
  constructor (props) {
    super(props);

    this.state = {
      backgroundColor: 'Magenta'
    };
  }

  render (){
    let {bgColor = 'Magenta', type = 'square'} = props;

    const style = {
      borderRadius: type === 'circle' ? '99999999px' : '0px',
      width: '100px',
      height: '100px',
      backgroundColor: bgColor
    }

  this.onClick{
      if (this.state.bgColor == 'Magenta'){
        this.state.bgColor = 'Yellow'
      }else if (this.state.bgColor == 'Yellow'){
        this.state.bgColor = 'Cyan'
      }else if (this.state.bgColor == 'Cyan'){
        this.state.bgColor = 'Magenta'
      }
    }

    return (
      <div style={style}> </div>
    )
  }


}

export default Shape;
