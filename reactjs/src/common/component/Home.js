import React from 'react';
import 'common/style/Home.css';
import 'common/style/Common.css';
import { EagleNavi, Eagle, EagleHead, EagleFooter } from 'common/index';

const Home = () => {
    return (
        <>
            <EagleNavi />
            <Eagle />
            <EagleHead />
            <EagleFooter />
        </>
    );
};
export default Home;
