import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './index.css';

function RandomColor() {
  const [hex, setHex] = useState('#ffffff');
  const [hex2, setHex2] = useState('#ffffff');
  const [color, setColor] = useState('');
  const setBckground = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setHex(randomColor);
  };
  const setBckground2 = () => {
    const randomColor2 =
      '#' + Math.floor(Math.random() * 16777215).toString(16);
    setHex2(randomColor2);
  };
  const userColor = () => {
    const choosenColor = '';
    setColor(choosenColor);
  };

  return (
    <div>
      <div className="outter-box">
        <button onClick={setBckground}>Change color in box 1</button>
        <button onClick={setBckground2}>Change color in box 2</button>
        <label>
          Choose a color:
          <input type="text" onClick={(e) => setColor(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
        <div className="color-boxes">
          <div
            className="box"
            style={{
              backgroundColor: `${hex}`,
            }}
          ></div>
          <div
            className="box"
            style={{
              backgroundColor: `${color}`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
ReactDOM.render(<RandomColor />, document.getElementById('root'));
