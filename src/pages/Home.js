import React, { Component } from "react";
import Wrapper from '../components/Wrapper'
import Card from '../components/Card'
import { Col, Row, Container, SectionRow } from "../components/Grid";

class Home extends Component {
  state = {
    pageTitle: "Home",
  };

  render(){
    return (
      <Wrapper id="main-container">
        <SectionRow elementID="main-section">
          <Col size="col-lg-12">
            <Card heading={this.state.pageTitle}>
            </Card>
          </Col>
        </SectionRow>
      </Wrapper>
    );
  }
}

export default Home;