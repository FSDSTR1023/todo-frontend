import { Container } from '@mui/material'
import image from '../assets/404-status-code.png'

const Error = () => {
    return (
        <Container>
            <img className='h-full' src={image} />
        </Container>
    )
}

export default Error