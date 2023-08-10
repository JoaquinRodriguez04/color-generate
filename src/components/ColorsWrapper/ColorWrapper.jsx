import ListColorMap from "../ListColorMap/ListColorMap";
import './app.css';

const ColorsWrapper = ( {list} ) => {
  return (
    <div className="colors-wrapper">
      <ListColorMap list={list}/>
    </div>
  )
}

export default ColorsWrapper;
