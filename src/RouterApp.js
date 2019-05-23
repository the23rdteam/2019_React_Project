import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Weather from './Component/Weather';
import Home from './Component/Home';
import About from './Component/About';
// App.js를 다 가져옴 => 어떤 렌더링을 경로에 따라할 지
// Route 컴포넌트에 추가됨. 
// const Weather = () => <div>Weather</div>;

const RouterApp = () => {

    return(
    <div className="App">

          <Header/>
          <Route exact path="/" component={Home}  />
          <Route path="/about" component={About} />
          <Route  path="/weather" component={Weather} />
      </div>
    );

};

export default RouterApp;