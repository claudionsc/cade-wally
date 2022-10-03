import wally from './img/wally.jpg'
import styled from 'styled-components'
import React from 'react'
// import * as messages from './mensagens'

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

    
}

const WallyContainer = styled.div`
    width: 650px;
    height: 650px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: rgb(0, 0, 255); */
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
        this.handleShowMessage1 = this.handleShowMessage1.bind(this);
        this.handleShowMessage2 = this.handleShowMessage2.bind(this);
        this.state = {
            show: false, showMsg1: false, showMsg2: false
        };
      }

      handleShowImage(){
        this.setState({
            show: true,
           
            })

        }

        handleShowMessage1(){
            this.setState({
                showMsg1: this.state.showMsg1 === true ? false : true,
                showMsg2: false
            })

        }
        handleShowMessage2(){
            this.setState({
                showMsg1: this.state.showMsg1 === true ? false : true,
                showMsg2: this.state.showMsg2 === true ? false : true
               
            })

        }
      

      render(){

        return (
            <WallyContainer onMouseEnter={this.handleShowMessage1} onMouseLeave={this.handleShowMessage1} >
                <div onMouseEnter={this.handleShowMessage2} onMouseLeave={this.handleShowMessage2} style={{width: '350px', height: '350px', /*backgroundColor: 'yellow',*/ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div style={{ width: '80px', height: '80px', alignItems: 'center', justifyContent: 'center'}} onMouseEnter={this.handleShowImage} >
                        {this.state.show === true &&            
                        <WallyImg  src={wally}></WallyImg>
                    }
                    {this.props.dicas(this.state)}

                    </div>
                </div>
            </WallyContainer>
        )
      }
    
}


export default RenderImg