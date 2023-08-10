import './app.css';
import SingleColor from "../SingleColor/SingleColor";

const ListColorMap = ( {list} ) => {
  return (
    <div className="colors-flex">
        {
          list.map((color, index) => (
            <SingleColor key={index} HexColor={color.hex}/>
          ))
        } 
    </div>
  )
}

export default ListColorMap;
