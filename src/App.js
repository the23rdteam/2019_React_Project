import React from 'react';
// node_modules에서 가져온 파일은 ./ 없이 그냥 쓰면 됌
import './App.css';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';


function App() {
  const city = '대전';
  return (
    <BrowserRouter>
      <div className="App">
      <Header city={city}/>
    </div>
    </BrowserRouter>
  
  );
}

export default App;
