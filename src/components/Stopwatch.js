import React, {Component} from 'react';

class Stopwatch extends Component{
  constructor (props){
    super(props);
    this.state = {
      time: new Time().toString()
    }
  }
}

export default Stopwatch;
