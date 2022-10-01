export default function RenderDicas({ msg }) {
    return(
        <p style={{ position: 'fixed', zIndex: '1', marginTop: '100px'}}>
            {msg.M1}
        </p>
    )
}