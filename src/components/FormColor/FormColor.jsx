import { useState } from "react";
import Values from 'values.js';
import Error from "../Error/Error";
import './app.css';
import H2Title from "../h2-text-title/H2Title";

const FormColor = ( {setList} ) => {
    const [color, setColor] = useState('blue');
    const [err, setErr] = useState(false);

    const HandleGenerator = (e) => {
        e.preventDefault();
        try {
            let colors = new Values(color).all(6);
            setList(colors);
            setErr(false);
        } catch (err) {
            setErr(true);
        }
    };

    return (
        <div className="form-container">
            <H2Title/>
            <form className="form-flex" onSubmit={HandleGenerator}>
                <input className="input-txt" type="text" placeholder="#fff" onChange={(e) => setColor(e.target.value)} />
                <input type="submit" value="generar"></input>
            </form> 
            { err ? <Error/> : null}
        </div>
    )
}

export default FormColor;
