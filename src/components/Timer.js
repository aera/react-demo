import React, {Component} from 'react';

class Timer extends Component {
  render(){
    return (
      <div className='Timer'>
        <strong>Time: </strong> {new Date().toString()}
      </div>
    )
  }
}

export default Timer
