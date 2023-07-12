import React from 'react';
import './App.css';
import Rock from './Rock.png';
import Paper from './Paper.png';
import Scissors from './Scissors.png';

class App extends React.Component {
  images = [Rock, Paper, Scissors];
  state = { player1Image: this.images[0], player2Image: this.images[0] };


  getRandomImage = () => {
    const images = [Rock, Paper, Scissors];
    const randomNum = Math.floor(Math.random() * images.length);
    return images[randomNum];
  }

  handleRandom = (player: 'player1Image' | 'player2Image') => {
    let counter = 0;
    let imageIndex = 0;
    const totalDuration = 3000;
    const delay = totalDuration / (this.images.length * 10);

    const intervalId = setInterval(() => {
      this.setState({ [player]: this.images[imageIndex] });
      imageIndex = (imageIndex + 1) % this.images.length;
      counter += delay;
      if (counter >= totalDuration) {
        clearInterval(intervalId);
        this.setState({ [player]: this.getRandomImage() });
      }
    }, delay);
  }

  handleRandom1 = () => {
    this.handleRandom('player1Image');
  }

  handleRandom2 = () => {
    this.handleRandom('player2Image');
  }
  
  render() {
    const { player1Image, player2Image } = this.state;
    return (
      <div className="App">
        <div className="player-section">
          <h2>Player 1</h2>
          <div className="player-image-container">
            <img className="player-image" src={player1Image} alt="Player 1" />
          </div>
          <button className="random-button" onClick={this.handleRandom1}>Random</button>
        </div>
        <div className="player-section">
          <h2>Player 2</h2>
          <div className="player-image-container">
            <img className="player-image" src={player2Image} alt="Player 2" />
          </div>
          <button className="random-button" onClick={this.handleRandom2}>Random</button>
        </div>
      </div>
    );
  }
}

export default App;
