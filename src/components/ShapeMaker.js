import React, {Component} from 'react';

export function Shape (props) {
  const {color, type } = props;

  const style = {
    borderRadius: type === 'circle' ? '99999999px' : '0px',
    width: '50px',
    height: '50px',
    backgroundColor: color,
  }

  return <div style={style}/>
}

function ShapeHolder(props) {
  const {shapes} = props

  return (
    <div>
      {
        shapes.map(shape => <Shape {...shape}/>)
      }
    </div>
  )
}

export default class ShapeMaker extends Component {
  constructor(props) {
    super(props)

    this.state = {
      shapes: []
    }

    this.addShape = this.addShape.bind(this)
  }

  addShape(event) {
    event.preventDefault()

    let newShape ={
      type: this.refs.type.value || 'circle',
      color: this.refs.color.value || 'blue'
    }

    this.setState({
      shapes: this.state.shapes.concat(newShape)
    })
  }

  render() {
    return (
      <div onSubmit={this.addShape}>
        <form>
          <h3>ShapeMaker</h3>
          <div>
            <label>Type of Shape</label>
            <select ref='type'>
              <option value='circle'>Circle</option>
              <option value='square'>Square</option>
            </select>
          </div>
          <div>
            <label>Color</label>
            <input type='text' ref='color'/>
          </div>
          <input type='submit' value='Create Shape' />
        </form>

        <h3>Shape Holder</h3>
        <ShapeHolder shapes={this.state.shapes}/>
      </div>
    )
  }

}
