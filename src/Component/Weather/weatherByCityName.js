import React from 'react';
import Icon from './Icon';
import CelsiusIcon from './CelsiusIcon';

const API_WEATHER = 'http://localhost:8080/weather-crawler/current-weathers/by-city-name';

class weatherByCityName extends React.Component{
    state = {
        weather: null,
    };

    async componentDidMount(){
        // const cityId = 'Daejeon';
        const { cityId } = this.props.match.params;
        const api = `${API_WEATHER}/${cityId}`;
        // console.log(api);
        const weather = await fetch(api)
            .then(res => res.json())
            .then(data => data);

        this.setState({
            weather
        });
    }

    render(){

        const { cityId } = this.props.match.params;
        const { weather } = this.state;
        // console.log(weather);
        if(!weather){
            return <div>Loading...</div>
        }

        const celsius = (weather.main.temp - 273.15).toFixed(2);
        const weatherMain = weather.weather[0].main;
        const iconId = weather.weather[0].icon;

        const humid = weather.main.humidity;
        const airpressure = weather.main.pressure;
        const speed = weather.wind.speed;

        const country = weather.sys.country;
        const sunrise = weather.sys.sunrise;
        const sunset = weather.sys.sunset;
        console.log(iconId)
        return(
            <div>
                <h2 className="weather-city">{cityId}</h2>

                <div className="weather-today-meta">
                    <h3 className="weather-main">{weatherMain} <Icon iconId={iconId}/>
                </h3>
                    <div><CelsiusIcon /> {celsius}&#8451;</div>
                    <div>{humid}</div>
                    <div>{airpressure}</div>
                    <div>{speed}</div>
                    <div>{country}</div>
                    <div>{sunrise} ~ {sunset}</div>
                </div>
               
            </div>
        );
    };

}

export default weatherByCityName;