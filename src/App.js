import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Provider } from 'react-redux';
import store from './redux/store';
import { setNavList }  from './redux/action'
import Routes from './router/Routers'
import TopBar from './components/commont/TopBar'
import SideBar from './components/commont/SideBar'
import Loading from './components/commont/Loading'
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './style/App.css';

const navList = [{
        name: '会员中心',
        icon: 'fa-diamond',
        children: [{
            title: '会员等级',
            sub_list: [{
                name: '会员等级管理',
                id: 'vipLevelManage'
            },{
                name: '生日权益',
                id: 'birthdayRights'
            },{
                name: '会员等级设置',
                id: 'vipLevelSetting'
            }]
        },{
            title: '会员积分',
            sub_list: [{
                name: '会员积分管理',
                id: 'ccc'
            },{
                name: '活动积分设置',
                id: 'ddd'
            },{
                name: '积分基础设置',
                id: 'eee'
            }]
        },{
            title: '兑礼及试用',
            sub_list: [{
                name: '积分兑礼设置',
                id: 'fff'
            },{
                name: '试用申请设置',
                id: 'ggg'
            },{
                name: '积分兑礼记录',
                id: 'hhh'
            },{
                name: '试用申请记录',
                id: 'iii'
            }]
        }],
        index: 0
    },{
        name: '营销触达',
        icon: 'fa-yelp',
        children: [{
            title: '等级二',
            sub_list: [{
                id: "jjj",
                name: '2-1'
            },{
                id: "kkk",
                name: '2-2'
            }]
        }],
        index: 1
    },{
        name: '数据洞察',
        icon: 'fa-pie-chart',
        children: [{
            title: '等级三',
            sub_list: [{
                id: "lll",
                name: '3-1'
            },{
                id: "mmm",
                name: '3-2'
            }]
        }],
        index: 2
    }]

store.dispatch(setNavList(navList));

class App extends Component {

    /*material-ui 需要配置主题才可以使用*/
    getChildContext() {
        return { muiTheme: getMuiTheme(lightBaseTheme) };
    }

    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <TopBar />
                    <SideBar />
                    <div className="main">
                        <Loading />
                        <Routes />          
                    </div>
                </div>        
            </Provider>
        );
    }
}

App.childContextTypes = {
    muiTheme: PropTypes.object.isRequired
};

export default App;
