export default function RenderText({ mouse, msg }) {
    return(
        <p style={{ position: 'fixed', zIndex: '1', marginTop: '100px'}}>
            A posição atual é x:({mouse.x}, y:{mouse.y})
            {msg}
        </p>
    )
}