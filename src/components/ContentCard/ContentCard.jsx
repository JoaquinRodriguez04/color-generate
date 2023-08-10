import './app.css';

const ContentCard = ( {HexColor}  ) => {

    const HandleCopy = (color) => () => {
        const ColorNew = `#${color}`;
        navigator.clipboard.writeText(ColorNew);
    }

    return (
        <div className="content-card">
            <p className='content-p'>#{ HexColor }</p>
            <button className='btn-content' onClick={ HandleCopy(HexColor) }>copy</button>
        </div>
    )
}

export default ContentCard;
