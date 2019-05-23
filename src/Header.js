import React from 'react';
import Navigation from './Navigation';

// 부모라는 App.js에 Header를 전달 
// Header는 props를 받아서 브라우저 상에 렌더링하는 과정

const Header = props => {
    // 바로 city에 할당되는 과정 
    return(
        <>
        <Navigation />
        </>
    );  
};
export default Header;
// 모듈화 시키는 과정 