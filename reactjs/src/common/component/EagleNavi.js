import React from 'react';
import { Link } from 'react-router-dom';
import App from 'App';
import 'common/style/Home.css';
import EagleHead from 'common/component/EagleHead';

const EagleNavi = () => {
    return (
        <>
            <EagleHead />
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">
                            Me
                        </a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a href="#">WHO</a>
                            </li>
                            <li>
                                <a href="#">WHAT</a>
                            </li>
                            <li>
                                <a href="#">WHERE</a>
                            </li>
                            <li>
                                <Link to={'/board/component/article-list'}>Board</Link>
                            </li>
                            <li>
                                <Link to={'/user/component/sign-up'}>SignUp</Link>
                            </li>
                            <li>
                                <Link to={'/board/component/news-board'}>NewsBoard</Link>
                            </li>
                            <li>
                                <Link to={'/board/component/seoul-cctv'}>SeoulCCTV</Link>
                            </li>
                            <li>
                                <Link to={'/board/component/counter'}>Counter</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};
export default EagleNavi;
