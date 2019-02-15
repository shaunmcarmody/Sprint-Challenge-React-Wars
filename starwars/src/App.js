import React, { Component } from 'react';
import Character from './components/Character';
import Button from './components/Button';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      next: '',
      previous: ''
    };
  }  

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data); // <--------- THIS NEEDS REMOVING BEFORE SUBMISSON
        this.setState({
          starwarsChars: data.results,
          next: data.next,
          previous: data.previous
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="browse">
          <Button getCharacters={this.getCharacters} browse={this.state.previous}/>
          <Button getCharacters={this.getCharacters} browse={this.state.next} />
        </div>
        <div className="container">
          {
            this.state.starwarsChars.map(char => <Character character={char} key={char.name} />)
          }
        </div>
      </div>
    );
  }
}

export default App;
