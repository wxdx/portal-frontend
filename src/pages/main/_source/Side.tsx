import React from "react"
import { Menu, MenuProps } from "antd"
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  HomeOutlined
} from "@ant-design/icons"

type MenuItem = Required<MenuProps>["items"][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem
}

const items: MenuItem[] = [
  getItem("首页", "sub0", <HomeOutlined />),
  getItem("Navigation One", "sub1", <MailOutlined />, [
    getItem("Option 1", "1"),
    getItem("Option 2", "2"),
    getItem("Option 3", "3"),
    getItem("Option 4", "4"),
  ]),
  getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Submenu", "sub3", null, [
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
  ]),
  getItem("Navigation Three", "sub4", <SettingOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
]

// submenu keys of first level
const rootSubmenuKeys = ["sub1", "sub2", "sub4"]

const Sider = () => {
  return (
    <Menu
      mode="inline"
      defaultOpenKeys={rootSubmenuKeys}
      items={items}
    />
  )
}

export default () => <Sider />
