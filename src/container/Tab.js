import React from "react";
import { TabBar } from "antd-mobile";
import Home from "./Home";
import Near from "./Near"
import My from "./My"

export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "blueTab"
    };
  }
  render() {
    return (
      <div
        style={{
          position: "fixed",
          height: "100%",
          width: "100%",
          top: 0
        }}
      >
        
        <TabBar
          unselectedTintColor="#fff"
          tintColor="#000"
          barTintColor="#ff0000"
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(首页.png) center center /  21px 21px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(首页.png) center center /  21px 21px no-repeat"
                }}
              />
            }
            selected={this.state.selectedTab === "blueTab"}
            onPress={() => {
              this.setState({
                selectedTab: "blueTab"
              });
            }}
          >
            <Home />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(附近.png) center center /  21px 21px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(附近.png) center center /  21px 21px no-repeat"
                }}
              />
            }
            title="附近"
            key="Koubei"
            selected={this.state.selectedTab === "redTab"}
            onPress={() => {
              this.setState({
                selectedTab: "redTab"
              });
            }}
          >
            <Near/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(订单.png) center center /  21px 21px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(订单.png) center center /  21px 21px no-repeat"
                }}
              />
            }
            title="订单"
            key="订单"
            dot
            selected={this.state.selectedTab === "greenTab"}
            onPress={() => {
              this.setState({
                selectedTab: "greenTab"
              });
            }}
          >
            订单
          </TabBar.Item>
          <TabBar.Item
            icon={{
              uri:
                "我的.png"
            }}
            selectedIcon={{
              uri:
                "我的.png"
            }}
            title="My"
            key="my"
            selected={this.state.selectedTab === "whiteTab"}
            onPress={() => {
              this.setState({
                selectedTab: "whiteTab"
              });
            }}
          >
            <My/>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}