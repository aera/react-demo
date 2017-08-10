import React from 'react';
import Shape from './Shape';

function BoardRow(props) {
  const {cols, oddColor, evenColor, offset} = props;

  let isBordered



  const style = {
    display: 'flex',
    flexFlow: 'row'
  }



  const boxColor = (index) => {
    return (index + offset) % 2 === 0 ? oddColor : evenColor;
  }

  return(
    <div style ={style}>
      {
        Array.from({length: cols}, (value, index) => {
          return <Shape bgColor={boxColor(index)}/>
        })
      }
    </div>
  )
}

function Chessboard(props){
  const {cols = 8,
    rows = 8,
    oddColor = 'Yellow',
    evenColor = 'Green',
    isBordered = false
  } = props;

  let border

  if (isBordered) {border = '10px solid Brown'}

  const style = {
    border: `${border}`
  }

  return (
    <div style={style}>
      {
        Array.from({length: cols}, (value, index) => {
          return (
            <BoardRow cols={cols} oddColor={oddColor} evenColor={evenColor} offset={index % 2} />
          )
        })
      }
    </div>
  )
}

export default Chessboard;
