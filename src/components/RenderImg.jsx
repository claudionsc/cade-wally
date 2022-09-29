import waldo from './img/waldo.jpg'
import styled from 'styled-components'
import { useState } from 'react'

const WaldoContainer = styled.div`
    width: 110px;
    height: 110px;
    background-color: blue;
    display: flex;
    justify-content: flex-end;
    /* padding: 250px; */

`

const WaldoImg = styled.img`
    width: 100px;
    height: 100px;
`

function RenderImg() {
    
    const [img, setImg] = useState(false)

    


    return (
        <WaldoContainer>
            <WaldoImg src={waldo}></WaldoImg>
        </WaldoContainer>
    )
}

export default RenderImg