import React from 'react';
import EagleNavi from 'common/component/EagleNavi';
import EagleFooter from 'common/component/EagleFooter';
import ArticleList from 'article/component/ArticleList';
import 'common/style/Home.css';
import 'common/style/Common.css';

const NewsBoard = () => {
    return (
        <>
            <EagleNavi />
            <ArticleList />
            <EagleFooter />
        </>
    );
};
export default NewsBoard;
