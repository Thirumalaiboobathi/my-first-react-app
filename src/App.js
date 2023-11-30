import React, { useState } from 'react';
import Calculator from './components/calculator';

function App() {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('celsius');
  const [submitted, setSubmitted] = useState(false);

  const handleTemperatureChange = (e) => {
    setTemperature(e.target.value);
  };

  const handleScaleChange = (e) => {
    setScale(e.target.value);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setTemperature(''); // Reset temperature input
  };

  return (
    <div style={containerStyle}>
      <h2 style={{color:'white',fontSize:'42px'}}>Check Boiling Point</h2>
      <div style={centeredBoxStyle}>
        <div style={inputBoxStyle}>
          <label>
            Temperature:
            <input
              type="number"
              value={temperature}
              onChange={handleTemperatureChange}
              style={inputStyle}
            />
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="celsius"
              checked={scale === 'celsius'}
              onChange={handleScaleChange}
            />
            Celsius
          </label>
          <label>
            <input
              type="radio"
              value="fahrenheit"
              checked={scale === 'fahrenheit'}
              onChange={handleScaleChange}
            />
            Fahrenheit
          </label>
          <br />
          <button style={buttonStyle} onClick={handleSubmit}>Submit</button>

          <button style={buttonStyle} onClick={handleReset}>Clear</button>
        </div>
      </div>
      {submitted && (
        <Calculator temperature={temperature} scale={scale} />
      )}
    </div>
  );
}

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  Color: 'white', 
};

const centeredBoxStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const inputBoxStyle = {
  border: '2px solid #ccc',
  borderRadius: '5px',
  padding: '50px',
  marginBottom: '20px',
  backgroundColor: 'white', 
};

const inputStyle = {
  width: '150px',
  padding: '8px',
  margin: '5px',
};

const buttonStyle = {
  padding: '10px 20px',
  marginTop: '10px',
  cursor: 'pointer',
  marginRight: '10px', // Add margin to create space between buttons
};

export default App;
