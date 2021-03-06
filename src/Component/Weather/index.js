import React from 'react';
import { Switch, Route, withRouter} from 'react-router';
import ShowList from './ShowList';
import weatherByCityName from './weatherByCityName';


// function과 클래스 모듈의 차이가 존재 

// function - stateless component

// class - smart component - 라이프사이클을 자체적으로 가짐


const API_CITIES = "http://localhost:8080/weather-crawler/available-cities"


// JSON 데이터를 가져와서 사용할 것임 


class Weather extends React.Component{
    
    state = {
        cities:[]
    };

    // 마운트가 되면 실행이 되는 것
    async componentDidMount() {
        // async - 얘는 fetch라는 얘를 하는데
        // 끝날 때까지 기다릴 거야 - await
        // fetch 결과가 전달이 되고 나면 들어갈 것
        // let cities;
        // async, await - readability가 높아짐 
        // 기존에는 프로미스를 많이 썼지만 
        // 프로미스 객체 자체를 cities에 집어넣어 오류가 남 
        const city_list = await fetch(API_CITIES)
        .then(res => res.json())
        .then(data => data);

        // console.log(city_list);

        // 비동기로 실행해 결과를 기다리게 만듬 
        this.setState({
            cities : city_list,
        });
    }
    // 상태가 변경되면 바뀌었다는 것을 볼 수 있어 

    render(){
        const { match } = this.props;
        const { cities } = this.state;
        
        if(!cities)
        {
            return <div>Loading...</div>
        }
        
        return(
            <div className="weather">
                <Switch>
                    <Route path={`${match.path}/:cityId`} component={weatherByCityName} />
                    <Route exact path={match.path} render={()=> <ShowList cities={cities}/>} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(Weather);