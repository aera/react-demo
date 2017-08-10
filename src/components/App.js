import React from 'react';
import Hello from './Hello';
import Shape from './Shape';
import Rect from './Rect';
import Greetings from './Greetings';
import ShadesOfGrey from './ShadesOfGrey';
import Fa from './Fa';
import Chessboard from './Chessboard'

function App (props) {
  const style = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  };

  return (
    <div className='App' style={style}>

      <Chessboard cols={8} rows={8} isBordered={true} />
      <hr />
      <Chessboard cols={6} rows={2} oddColor='orange' isBordered={false} />

      <Fa kind='camera-retro' size="4x"/>
      <Fa kind='coffee' color='Brown' size="2x"/>
      <Fa kind='plane' color='Blue' size="4x" />
      <Fa kind='cog'  spin={true} color='Red' size="4x" />
      <Fa kind='spinner' spin={true} size="3x" />
      <Hello name='Jon' bgColor='LightCyan' />
      <Hello name='Daenerys' fontFamily='Papyrus' />
      <Hello name='Cersei' isBye={true} />
      <Hello name='Euron' isBye />
      <Shape />
      <Shape bgColor='Red' />
      <Shape bgColor='Green' type='circle' />
      <Rect />
      <Greetings names = {['Jo', 'Dave', 'Lana', 'Dana', 'Tom']} />
      <ShadesOfGrey levels={9} />
      <ShadesOfGrey />
    </div>
  );
}

export default App;
