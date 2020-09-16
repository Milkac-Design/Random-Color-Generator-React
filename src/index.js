import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import randomColor from 'randomcolor';

function RandomColor() {
  const [hex, setHex] = useState('#ffffff'); // set up for random color

  const [hue, setHue] = useState(''); // setup for user color

  const [luminosity, setLuminosity] = useState('');
  //setup for randomizing user hue to color

  const [color, setColor] = useState(
    randomColor({ hue: hue, luminosity: luminosity }),
  );

  //function to call random color (setHex updates hex)
  const setBckground = () => {
    const userColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setHex(userColor);
  };

  //trying to make submit button submit the color rather than
  const handleSubmit = (e) => {
    setColor(randomColor({ hue: hue }));
    setLuminosity(randomColor({ luminosity: luminosity }));
    e.preventDefault();
  };

  return (
    <div>
      <div className="outter-box">
        <button onClick={setBckground}>Change color in box 1</button>

        <form onSubmit={handleSubmit}>
          <label>
            Choose a color for box 2:
            <input type="text" onChange={(e) => setHue(e.target.value)} />
            <input type="submit" value="Submit" />
          </label>
          <br></br>
          <label>
            Choose the luminosity:
            <input
              type="radio"
              id="light"
              name="luminosity"
              onChange={(e) => setColor(randomColor({ luminosity: 'light' }))}
            />
            <label for="light">Light</label>
            <input
              type="radio"
              id="dark"
              name="luminosity"
              onChange={(e) => setColor(randomColor({ luminosity: 'dark' }))}
            />
            <label for="dark">Dark</label>
          </label>
        </form>
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
              backgroundColor: `${color}`, //make new variable to track random color
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
ReactDOM.render(<RandomColor />, document.getElementById('root'));
