import React, {Component} from 'react';

export function Shape (props) {
  const {bgColor = 'Blue', type = 'square', x, y, onShapeClick} = props;

  const style = {
    borderRadius: type === 'circle' ? '99999999px' : '0px',
    width: '50px',
    height: '50px',
    backgroundColor: bgColor,
    left: x,
    top: y,
    position: 'absolute'
  }

  return (
    <div className='Shape' style={style} onClick={onShapeClick}/>
  );
}

export function ShapeContainer(props) {
  // this is where we will define our container arena
  // this is also where we will place our shape
   const { x, y, shapeType, onShapeClick } = props

  const containerStyle = {
    height: '300px',
    width: '400px',
    border: '5px solid green',
    position: 'relative'
  }

  return (
    <div style={containerStyle}>
      <Shape x={x} y={y} type={shapeType} onShapeClick={onShapeClick}/>
    </div>
  )
}

export default class ShapeMover extends Component {
  constructor(props) {
    super(props)

    this.state = {
      x: 0,
      y: 0,
      shapeType: 'square'
    }

    this.moveShape = this.moveShape.bind(this)
    this.shapeChange = this.shapeChange.bind(this)
    this.resetShape = this.resetShape.bind(this)
  }

  moveShape(event) {
    const direction = event.target.name
    const x = this.state.x
    const y = this.state.y

    switch (direction) {
      case 'left':
        return this.setState({x: x - 10})
      case 'right':
        return this.setState({x: x + 10})
      case 'up':
        return this.setState({y: y - 10})
      case 'down':
        return this.setState({y: y + 10})
      case 'reset':
        return this.setState({x: 0, y:0})

    }
  }

  resetShape (event) {
    const x = this.state.x
    const y = this.state.y

    event.stopPropagation();
    if (event.ctrlKey) {
      return this.setState({x: 0, y: 0})
    } else {
      return this.setState({x: x, y: y})
    }
  }

  shapeChange() {
    if (this.state.shapeType === 'square') {
      this.setState({shapeType: 'circle'})
    } else {
      this.setState({shapeType: 'square'})
    }
  }

  render() {
    return (
      <div>
        <h3>This is the ShapeMover</h3>
        <button name='left' onClick={this.moveShape}>Left</button>
        <button name='up' onClick={this.moveShape}>Up</button>
        <button name='down' onClick={this.moveShape}>Down</button>
        <button name='right' onClick={this.moveShape}>Right</button>

        <button name='reset' onClick={this.moveShape}>Reset</button>

        <ShapeContainer
          x={this.state.x}
          y={this.state.y}
          shapeType={this.state.shapeType}
          onShapeClick={this.shapeChange}
        />
      </div>
    )
  }
}
