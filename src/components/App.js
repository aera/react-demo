import React from 'react';
import Hello from './Hello';
import Shape from './Shape';
import Rect from './Rect';
import Greetings from './Greetings';
import ShadesOfGrey from './ShadesOfGrey';
import Fa from './Fa';
import Chessboard from './Chessboard';
import GuestBook from './GuestBook';
import Timer from './Timer';
import StopWatch from './StopWatch';
import ShapeMover from './ShapeMover';
import ShapeMaker from './ShapeMaker';

function App (props) {
  const style = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '10vh'
  };

  return (
    <div className='App' style={style}>
      <ShapeMover />
      <ShapeMaker />
      <hr />
      <Timer />
      <StopWatch />
      <GuestBook />
      <hr />
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
      <Hello name='Cersei' />
      <Hello name='Euron' />
      <Hello name='Tyrion' />
      <Hello name='Ser FriendZone' />
      <Hello name='Varys' />
      <Hello name='Grey Worm' />
      <Shape />
      <Shape bgColor='Red' />
      <Shape bgColor='Green' type='circle' />
      <Rect />
      <Shape colors={['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet']} />
      <Greetings names = {['Jo', 'Dave', 'Lana', 'Dana', 'Tom']} />
      <ShadesOfGrey levels={9} />
      <ShadesOfGrey />
    </div>
  );
}

export default App;
