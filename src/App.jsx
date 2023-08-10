import { useState } from 'react';
import './App.css';
import Values from 'values.js'
import FormColor from './components/FormColor/FormColor';
import ColorsWrapper from './components/ColorsWrapper/ColorWrapper';

function App() {
  const [list, setList] = useState(new Values('red').all(10));

  return (
    <div className='app-body'>
      <FormColor setList={setList}/>
      <ColorsWrapper list={list}/>
    </div>
  );
}

export default App;
