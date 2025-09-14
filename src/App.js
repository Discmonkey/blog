import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

const VALUE_MAP = ['0' ,'1' ,'2' ,'3' ,'4' ,'5' ,'6' ,'7' ,'8' ,'9' ,'A' ,'B' ,'C' ,'D' ,'E' ,'F']
function upperCase(s) {
  return s.slice(0, 1).toUpperCase() + s.slice(1)
}
function ColorSlider({name, initialValue, update}) {

  const [colorValue, setColorValue] = useState(initialValue);

  return (
   <div className="slider">
     <h3>{upperCase(name)}: {colorValue}</h3>
      <input type="range" min="0" max="255" step="1" value={colorValue}
             onChange={e => {
               setColorValue(parseInt(e.target.value));
               update(parseInt(e.target.value));
             }
      }
      />
   </div>
  );
}

function numToHex(num) {
  const rem = num % 16;
  const first = Math.floor((num - rem) / 16)

  return `${VALUE_MAP[first]}${VALUE_MAP[rem]}`
}

function App() {
  const [color, setColor] = useState('#000000');
  const [textColor, setTextColor] = useState('#FFFFFF');
  const [red, setRed] = useState(0)
  const [green, setGreen] = useState(0)
  const [blue, SetBlue] = useState(0)
  const style = {
    backgroundColor: color,
    color: textColor,
  }

  useEffect(() => {
    const newColor = '#' + numToHex(red) + numToHex(green) + numToHex(blue)
    setColor(newColor);
    const newTextColor = '#' + numToHex(255 - red) + numToHex(255 - green) + numToHex(255 -blue);
    setTextColor(newTextColor)
  }, [red, green, blue])
  return (
    <div className="container">
      <div className="controls">
        <ColorSlider name={'red'} initialValue={red} update={setRed}/>
        <ColorSlider name={'green'} initialValue={green} update={setGreen}/>
        <ColorSlider name={'blue'} initialValue={blue} update={SetBlue}/>
      </div>

      <div className="display" style={style}>
        <h1>{color}</h1>
      </div>
    </div>
  );
}

export default App;
