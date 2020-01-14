import React, { Component } from 'react';
import axios from 'axios';
import Wrapper from '../components/Wrapper';
import { Col, Row, Container, SectionRow } from '../components/Grid';
import Hero from '../components/Hero';

class Home extends Component {
  state = {
    heroes: [],
    clickedHeroes: [],
    score: 0,
    highScore: 0,
    pageTitle: "Home"
  };

  componentDidMount(){
    this.loadHeroes();
  }

  loadHeroes = () => {
    axios.get('./heroes.json')
      .then(res => this.setState({heroes: res.data }))
      .catch(err => console.log(err));
  };

  handleHeroClick = id => {
    console.log("id", id);
    return;
  };

  render(){ 
    return (
      <Wrapper id="main-container">
        <SectionRow elementID="main-section">
          {this.state.heroes.length ? (
            this.state.heroes.map(hero => {
              return (
                <Hero 
                  key={hero._id}
                  id={hero._id}
                  heading={hero.name}
                  src={hero.image}
                  handleHeroClick={this.handleHeroClick}
                />
              );
            })
          ) : (
            <h3>No Heroes to Display</h3>
          )}
        </SectionRow>
      </Wrapper>
    );
  }
}

export default Home;