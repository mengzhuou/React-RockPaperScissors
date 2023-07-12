import React from 'react';
import './App.css';
import Rock from './Rock.png';
import Paper from './Paper.png';
import Scissors from './Scissors.png';



class App extends React.Component {
  state = {player1Image: Rock, player2Image: Rock}

  getRandomImage = () => {
    const image = [Rock, Paper, Scissors];
    const randomNum = Math.floor(Math.random() * 3);
    return image[randomNum];
  }

  handleRandom1 = () => {
    this.setState({ player1Image: this.getRandomImage() });
  }

  handleRandom2 = () => {
    this.setState({ player2Image: this.getRandomImage() });
  }
  render() {
    const { player1Image, player2Image } = this.state;
    return (
      <div className="App">
          <div className="player1-section">
            <h2>Player 1</h2>
            <img src={player1Image} alt="Player 1" />
            <button onClick={this.handleRandom1}>Random</button>
          </div>
          <div className="player2-section">
            <h2>Player 2</h2>
            <img src={player2Image} alt="Player 2" />
            <button onClick={this.handleRandom2}>Random</button>
          </div>
      </div>
    );
  }
}

export default App;
