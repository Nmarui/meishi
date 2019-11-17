import React, { Component } from 'react'
import { NavBar, Icon, Tabs,WhiteSpace } from 'antd-mobile';
const tabs2 = [
    { title: '首页' },
    { title: '附近'},
    { title: '订单' },
    { title: '我的' },
  ];
export default class AppHome extends Component {
    render() {
        return (
            <div>
                <WhiteSpace/>
                <div style={{whidth:'100%'}}>
                    <img src={require('./wodeshang.jpg')} style={{width:'100%'}}/>
                </div>
                <WhiteSpace/>
                <div style={{whidth:'100%'}}>
                    <img src={require('./wodexia.jpg')} style={{width:'100%'}}/>
                </div>
                <WhiteSpace/>
                <div style={{whidth:'100%'}}>
                    <span style={{textAlign:'center'}}>客服电话 123345663</span>
                </div>
            </div>
        )
    }
}