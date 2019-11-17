import React, { Component } from 'react'
import { NavBar, Icon, Tabs ,WhiteSpace} from 'antd-mobile';
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
                <NavBar
                style={{backgroundColor:'red',color:'#000'}}
                leftContent={[
                    <span style={{color:'white'}}>石家庄</span>
                ]}
                >
                  <input tyle="search" placeholder="找附近的吃喝玩乐" style={{borderRadius:'10px',textAlign:'center'}}/>
                </NavBar>
                <WhiteSpace/>
                <div style={{width:'100%'}}>
                    <span style={{textAlign:'center' ,float:'left',marginLeft:"5%"}}>1000米</span>
                    <span style={{textAlign:'center' ,float:'left',marginLeft:"25%"}}>全部餐厅 </span>
                    <span style={{textAlign:'center' ,float:'left',marginLeft:"25%"}}>默认排序</span>
                </div>
                <WhiteSpace/>
                <WhiteSpace/>
                <div style={{width:'100%'}}>
                    <img src={require('./fujin.jpg')} style={{width:'100%'}}/>
                </div>
            </div>
        )
    }
}