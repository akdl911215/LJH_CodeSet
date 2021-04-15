import React from 'react';

const Eagle1 = () => {
    return (
        <>
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
                                <a href="#">Board</a>
                            </li>
                            <li>
                                <a href="#">SignUp</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};
export default Eagle1;
