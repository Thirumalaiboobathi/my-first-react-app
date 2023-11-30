import React from 'react';

const Calculator = ({ temperature, scale }) => {
  let isBoilingPointCelsius = temperature >= 100 && scale === 'celsius';
  let isBoilingPointFahrenheit = temperature >= 212 && scale === 'fahrenheit';

  return (
    <div>
      {scale === 'celsius' ? (
        isBoilingPointCelsius ? (
          <p style={{
            fontSize: '32px',
            color: 'white',
            // Other styles as needed
          }}>The water is at boiling point ♨️♨️♨️</p>
        ) : (
          <p style={{
            fontSize: '32px',
            color: 'white',
            // Other styles as needed
          }}>The water is not at boiling point 🥶🥶 Increase the Temperature</p>
        )
      ) : (
        isBoilingPointFahrenheit ? (
          <p style={{
            fontSize: '32px',
            color: 'white',
            // Other styles as needed
          }}>The water is at boiling point ♨️♨️♨️</p>
        ) : (
          <p style={{
            fontSize: '32px',
            color: 'white',
            // Other styles as needed
          }}>The water is not at boiling point 🥶🥶 Increase the Temperature</p>
        )
      )}
    </div>
  );
};

export default Calculator;
