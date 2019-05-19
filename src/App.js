import React from 'react';
// node_modules에서 가져온 파일은 ./ 없이 그냥 쓰면 됌
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import RouterApp from './RouterApp';

function App() {
  return (
    <BrowserRouter>
      <RouterApp/>
    </BrowserRouter>
  
  );
}

export default App;
