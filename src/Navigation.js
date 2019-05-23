import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// 이 앱이 라우터를 사용할 준비가 안 되었는데 
// Navigation을 만드려는 것이 잘못되었던 부분!

const bootstrapAPI = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";


const Navigation = () => {
    // JSX는 Single Element를 돌려주어야 한다. 
    return (
        // SPA를 유지하기 위해 - 자바스크립트가 모든 것을 처리하게 하기 위해
        // 의미 없는 div 막으려고 <>도 지원 
        <> 
            <link rel="stylesheet" href={bootstrapAPI} integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />

            <div class="btn-group" role="group" aria-label="Basic example">
                    <Link to="/"><button type="button" class="btn btn-outline-primary btn-lg">Home</button></Link>
                    <NavLink to="/about" activeClassName="selected"><button type="button" class="btn btn-secondary btn-lg">About</button></NavLink>
                    <NavLink to="/weather" ><button type="button" class="btn btn-outline-info btn-lg">Weather</button></NavLink>  
            </div>
        </>
         );
};

export default Navigation;