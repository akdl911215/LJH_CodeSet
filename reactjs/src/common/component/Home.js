import React from 'react';
import 'common/style/Home.css';
import 'common/style/Common.css';
import EagleNavi from 'common/component/EagleNavi';
import Eagle from 'common/component/Eagle';
import EagleHead from 'common/component/EagleHead';
import EagleFooter from 'common/component/EagleFooter';

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
