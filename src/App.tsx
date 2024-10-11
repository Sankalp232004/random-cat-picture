import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App: React.FC = () => {
  const [catImage, setCatImage] = useState<string>('');

  const fetchCatImage = async () => {
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search');
      setCatImage(response.data[0].url);
    } catch (error) {
      console.error('Error fetching cat image:', error);
    }
  };

  return (
    <div className="App">
      <h1>Random Cat Picture Generator 😺</h1>
      {catImage && <img src={catImage} alt="A random cat" style={{ width: '400px', borderRadius: '10px' }} />}
      <br />
      <button onClick={fetchCatImage} style={{ padding: '10px 20px', marginTop: '20px', cursor: 'pointer' }}>
        Get a Random Cat!
      </button>
    </div>
  );
};

export default App;
