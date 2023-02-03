import React from 'react';
import Feed from '../../components/Feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import SideBar from '../../components/sidebar/SideBar';
import Topbar from '../../components/topbar/Topbar';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Topbar></Topbar>

            <div className="homeContainer">
                <SideBar></SideBar>
                <Feed></Feed>
                <Rightbar></Rightbar>
            </div>
        </div>
    );
};

export default Home;