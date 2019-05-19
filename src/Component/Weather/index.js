import React from 'react';

// function과 클래스 모듈의 차이가 존재 

// function - stateless component

// class - smart component - 라이프사이클을 자체적으로 가짐


const API_CITIES = "http://localhost:8080/weather-crawler/cities"

class Weather extends React.Component{
    state = {
        foo : 'bar',
    };

    // 마운트가 되면 실행이 되는 것
    componentDidMount() {
        console.log('CDM!!!');

        // 자바스크립트 비동기 
        // 첫 실행은 보장 - 실행이 되어 결과가 들어가는 것을 보장하지 않음
        // async/await이라는 문법이 존재 

        console.log(this.state.foo);
        // 다른 컴포넌트들과 내 state 변경 시 용이함
        // 오브젝트로 처리하는 것
        setTimeout(()=>{ 
            this.setState({
            foo:'Hello WORLD',
            });
        }
        ,2000);
    
        
        // this.setState = ~~이런식으론 쓰지 말고
        console.log(this.state.foo);
    }
    // 상태가 변경되면 바뀌었다는 것을 볼 수 있어 

    render(){
        const { foo } = this.state;
        return(
            <div>
                <h1>{foo}</h1>
            </div>
        );
    }
}

export default Weather;