export default function RenderText({ mouse }) {
    return(
        
        <p style={{  zIndex: '1', marginTop: '150px'}}>
            A posição atual é x:({mouse.x}, y:{mouse.y})
            
        </p>
    )
}