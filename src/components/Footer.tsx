import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';

const Footer = () => {
    return (
        <div className='w-full text-center'>
            <code>
                Сделано с <FavoriteBorderIcon color='error' /> Джампьеро <SentimentSatisfiedIcon color='info' />
            </code>
        </div>
    )
}

export default Footer