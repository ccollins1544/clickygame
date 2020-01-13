import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Wrapper from './components/Wrapper'
import Card from './components/Card'
import { Col, Row, Container, SectionRow } from "./components/Grid";

function App() {
  return (
    <div className="App">
      <Header />
      <Wrapper id="main-container">
        <SectionRow elementID="main-section">
          <Col size="col-lg-12">
            <Card heading="Page Title">
            </Card>
          </Col>
        </SectionRow>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;