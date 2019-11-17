import React, { Component } from 'react'
import { Tabs,SearchBar,NavBar,Icon,Carousel, WhiteSpace } from 'antd-mobile';
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
                  <input tyle="search" placeholder="搜索商家、品类或商圈" style={{borderRadius:'10px',textAlign:'center'}}/>
                </NavBar>
                <WhiteSpace/>
                <Carousel
              autoplay={true}
              infinite
              beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
              afterChange={index => console.log('slide to', index)}
            >
              {[1,2,3,4,5].map(val => (
                <a
                  key={val}
                  style={{ display: 'inline-block', width: '100%'}}
                >
                  <img
                    src={require('./首页轮播图1.jpg')}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                  />
                </a>
              ))}
            </Carousel>
            <WhiteSpace/>
            <Carousel
              autoplay={true}
              infinite
              beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
              afterChange={index => console.log('slide to', index)}
            >
              {[1,2].map(val => (
                <a
                  key={val}
                  style={{ display: 'inline-block', width: '100%'}}
                >
                  <img
                    src={require('./首页轮播图2.jpg')}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                  />
                </a>
              ))}
            </Carousel>
            <WhiteSpace/>
            <div style={{width:'100%'}}>
              <img src={require('./首页下图.jpg')} style={{width:'100%'}}/>
            </div>
        </div>
    )
}
}