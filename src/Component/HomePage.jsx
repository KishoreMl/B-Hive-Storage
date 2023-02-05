import React, { Component } from 'react';
import HeaderHome from './HeaderHome';
import MenuBar from './MenuBar';
import UserInfoBox from './UserInfoBox';

class HomePage extends Component{

    constructor(props)
    {
        super(props);
    }
    render()
    {
        return (
            <div>
                <MenuBar />
                <HeaderHome />
                <UserInfoBox />
                
            </div>  
        );
    }
}

export default HomePage;