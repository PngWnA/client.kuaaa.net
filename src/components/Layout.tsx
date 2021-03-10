import React from "react";
import {useSelector} from "react-redux";
import {Link, Route, Switch, BrowserRouter as Router} from "react-router-dom"
import {Layout, Menu, Breadcrumb} from "antd";
import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons';

import Home from "../pages/home";
import About from "../pages/about";
import Board from "../pages/board";
import {RootState} from "../modules";

const {SubMenu} = Menu;
const {Header, Sider} = Layout;

export default function LayoutComponent() {
    const page = useSelector((state: RootState) => state.page);

    return (
        <Layout>
            <Header className={"header"}>
                <div className={"logo"}/>
                <Menu theme={"dark"} mode={"horizontal"} selectedKeys={[page.headerMenuItemKey]}>
                    <Menu.Item key={"1"}><Link to={"/"}>Home</Link></Menu.Item>
                    <Menu.Item key={"2"}><Link to={"/about"}>About</Link></Menu.Item>
                    <Menu.Item key={"3"}><Link to={"/board"}>Board</Link></Menu.Item>
                </Menu>
            </Header>
            <Layout>
                <Sider width={200} className={"site-layout-background"}>
                    <Menu mode={"inline"} selectedKeys={[page.sideBarMenuItemKey]} defaultOpenKeys={['sub1']}
                          style={{height: '100%', borderRight: 0}}>
                        <SubMenu key={"sub1"} icon={<UserOutlined/>} title={"subnav 1"}>
                            <Menu.Item key={"1"}>option1</Menu.Item>
                            <Menu.Item key={"2"}>option2</Menu.Item>
                            <Menu.Item key={"3"}>option3</Menu.Item>
                            <Menu.Item key={"4"}>option4</Menu.Item>
                        </SubMenu>
                        <SubMenu key={"sub2"} icon={<UserOutlined/>} title={"subnav 2"}>
                            <Menu.Item key={"5"}>option5</Menu.Item>
                            <Menu.Item key={"6"}>option6</Menu.Item>
                            <Menu.Item key={"7"}>option7</Menu.Item>
                            <Menu.Item key={"8"}>option8</Menu.Item>
                        </SubMenu>
                        <SubMenu key={"sub3"} icon={<UserOutlined/>} title={"subnav 3"}>
                            <Menu.Item key={"9"}>option9</Menu.Item>
                            <Menu.Item key={"10"}>option10</Menu.Item>
                            <Menu.Item key={"11"}>option11</Menu.Item>
                            <Menu.Item key={"12"}>option12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{padding: '0 24px 24px'}}>
                    <Switch>
                        <Route exact path={"/"} component={Home}/>
                        <Route path={"/about"} component={About}/>
                        <Route path={"/board"} component={Board}/>
                    </Switch>
                </Layout>
            </Layout>

        </Layout>
    );
}