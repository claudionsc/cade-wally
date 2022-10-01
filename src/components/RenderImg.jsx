import wally from './img/wally.jpg'
import styled from 'styled-components'
import React from 'react'
import * as messages from './mensagens'

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

    
}

const WallyContainer = styled.div`
    width: 550px;
    height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(0, 0, 255);
    position: relative;
    top: ${getRandomInt(-250, 420)}px;
    right: ${getRandomInt(-650, 650)}px;
    
    

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
        this.state = {
            show: false, message: messages.message1
        };
      }

      handleShowImage(){
        this.setState({
            show: true,
            um: messages.message1
            })

          alert(this.state.message.message)

        }
      

      render(){

        return (
            <WallyContainer onMouseEnter={this.handleShowImage.um} >
                <div style={{width: '350px', height: '350px', /*backgroundColor: 'yellow',*/ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div style={{ width: '150px', height: '150px', /* display: 'flex',*/ alignItems: 'center', justifyContent: 'center'}} onMouseEnter={this.handleShowImage}>
                        {this.state.show === true &&            
                        <WallyImg src={wally}></WallyImg>
                        }

                    </div>
                </div>
            </WallyContainer>
        )
      }
    
}


export default RenderImg