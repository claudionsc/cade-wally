import React from "react";
import styled from "styled-components";

const StyleDiv = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

class MouseTracker extends React.Component {
    constructor(props) {
      super(props);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.state = { x: 0, y: 0};
    }
  
    handleMouseMove(event) {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    }
  
    render() {
      return (
        <StyleDiv onMouseMove={this.handleMouseMove}>
          <h1 style={{ position: 'fixed', zIndex: '1'}}>Mova o mouse por aí e procure o Wally!</h1>
          {this.props.render(this.state)}
          {this.props.img(this.state)}
        </StyleDiv>
      );
    }
  }
export default MouseTracker