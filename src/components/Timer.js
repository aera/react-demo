import React, {Component} from 'react';

class Timer extends Component {
  constructor (props){
    super(props);
    this.state = {
      time: new Date().toString()
    }
  }
  componentDidMount(){
    this.intervalID = setInterval(() => {
      this.setState({time: new Date().toString()});
    })
  }

  componentWillUnmount(){
    clearInterval(this.intervalID);
  }

  render(){
    return (
      <div className='Timer'>
        <strong>Time: </strong> {new Date().toString()}
      </div>
    )
  }
}

export default Timer;
