import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

const bootstrapAPI = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";


const ShowList = props => {
    const { cities, match } = props;
    const { url } = match;
    




    return (
        <div className="weather-list">
           <link rel="stylesheet" href={bootstrapAPI} integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
           <h3>Choose Your City!</h3>
                <div className="row">
                <ul className="weather-cities col"> 
                {cities.map(item => {
                    // key를 가져가도록 권고함. 각각 컴포넌트가 업데이트가 되면 
                    // 특정 변경된 컴포넌트만 사용하기 위해서 
                        return <ul class="list-group row" key={item}>
                            <li class="list-group-item list-group-item-action py-2 w-75 col" ><Link to={`${url}/${item}`}>
                                {item}</Link>
                            </li>
                        </ul>;
                    
                })}
                </ul>
                <div className="col">
                    
                </div>
                </div>
                
        </div>
    );
};

export default withRouter(ShowList);