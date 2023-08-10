import ContentCard from '../ContentCard/ContentCard';
import './app.css';

const SingleColor = ( {HexColor} ) => {

  return (
    <div className="single-card" style={{backgroundColor: `#${HexColor}`}}>
        <ContentCard HexColor={HexColor}/>
    </div>
  )
}

export default SingleColor;
