import React, { Component } from 'react';
import './App.css';
import cardCover from './cover.svg';
import defaultCard from './default.svg';

class App extends Component {
  render() {
    return(
      <div>
        <Header />
        <GameBoard value="0"/>
      </div>
    )
  }
}

class Header extends Component {
  render() {
    return(
      <section className="title-section">
        <h1>BLACK JACK</h1>
      </section>
    )
  }
}

class GameBoard extends Component {
  render(){
    return(
      <section className="game-board">
        <div className="game-board-contents">
          <h2>Dealer</h2>
					<p>Score {this.props.value}</p>
					<CardsDealt />
        </div>
        <div className="game-board-contents">
          <h2>Player</h2>
					<p>Score {this.props.value}</p>
					<CardsDealt value="0"/>
        </div>
      </section>
    )
  }
}

function CardsDealt(props) {
  return(
			<div className="hand">
				<img alt="card-cover" className="card" src={cardCover} />
				<img alt="play-card" className="card" src={defaultCard}/>
		 </div> 	
	)
}


export default App;
