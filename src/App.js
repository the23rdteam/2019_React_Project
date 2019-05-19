import React from 'react';
// node_modules에서 가져온 파일은 ./ 없이 그냥 쓰면 됌
import './App.css';
import Header from './Header';


function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
