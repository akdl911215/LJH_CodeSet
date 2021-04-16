import logo from './logo.svg';
import 'App.css';
import { ArticleList, ArticleWrite, ArticleDetail } from 'article/index';
import { Login, SignUp, UserDetail } from 'user/index';
import { EagleNavi, EagleFooter, EagleHead, Home } from 'common/index';
import { NewsBoard, SeoulCCTV } from 'board/index';
import { Route } from 'react-router-dom';

const App = () => {
    return (
        <div className="App">
            <Route exact path="/" component={Home}></Route>

            <Route exact path="/board/component/article-list" component={ArticleList} />
            <Route exact path="/board/component/article-write" component={ArticleWrite}></Route>
            <Route exact path="/board/component/article-detail" component={ArticleDetail}></Route>
            <Route exact path="/board/component/news-board" component={NewsBoard}></Route>
            <Route exact path="/board/component/seoul-cctv" component={SeoulCCTV}></Route>

            <Route exact path="/user/component/login" component={Login}></Route>
            <Route exact path="/user/component/sign-up" component={SignUp}></Route>
            <Route exact path="/user/component/user-detail" component={UserDetail}></Route>

            <Route exact path="/common/component/eagle-navi" component={EagleNavi}></Route>
            <Route exact path="/common/component/eagle-footer" component={EagleFooter}></Route>
            <Route exact path="/common/component/eagle-head" component={EagleHead}></Route>
        </div>
    );
};

export default App;
