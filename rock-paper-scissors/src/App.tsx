import React from 'react';
import './App.css';
import Rock from './Rock.png';
import Paper from './Paper.png';
import Scissors from './Scissors.png';



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="player-section" style={{ backgroundColor: 'blue' }}>
            <h2>Player 1</h2>
            <img src={Rock} alt="Player 1" />
            <button>Random</button>
          </div>
          <div className="player-section" style={{ backgroundColor: 'red' }}>
            <h2>Player 2</h2>
            <img src={Rock} alt="Player 2" />
            <button>Random</button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
