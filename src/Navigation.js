import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
    // JSX는 Single Element를 돌려주어야 한다. 
    return (
        // SPA를 유지하기 위해 - 자바스크립트가 모든 것을 처리하게 하기 위해
        // 의미 없는 div 막으려고 <>도 지원 
        <> 
            <Link to="/">Home</Link>
            <NavLink to="/about" activeClassName="selected">About</NavLink>
        </>
         );
};

export default Navigation;