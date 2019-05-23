import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Weather from './Component/Weather'
// App.js를 다 가져옴 => 어떤 렌더링을 경로에 따라할 지
// Route 컴포넌트에 추가됨. 

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
// const Weather = () => <div>Weather</div>;

const RouterApp = () => {
    const city = '대전';
    return(
    <div className="App">
          <Header city={city}/>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/weather" component={Weather} />
      </div>
    );

};

export default RouterApp;