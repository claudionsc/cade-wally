import wally from './img/wally.jpg'
import styled from 'styled-components'
import React from 'react'



const WallyContainer = styled.div`
    width: 50px;
    height: 50px;
    /* background-color: rgb(0, 0, 255); */
    display: flex;
    justify-content: flex-end;
    position: relative;
    top: 250px;
    left: 730px;

`

const WallyImg = styled.img`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`

class RenderImg extends React.Component {

    constructor(props) {
        super(props);
        this.handleShowImage = this.handleShowImage.bind(this);
        this.state = false;
      }

      handleShowImage(){
        this.setState({
            show: true,
            
          })
      }

      render(){

          return (
              <WallyContainer onMouseEnter={this.handleShowImage}>
                  {this.state.show === true &&            
                  <WallyImg src={wally}></WallyImg>
                  }
              </WallyContainer>
          )
      }
    
}


export default RenderImg