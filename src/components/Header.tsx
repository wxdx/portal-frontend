import { FC } from "react"
import { Avatar, Menu, Dropdown, Space } from "antd"
import { DownOutlined, HomeTwoTone } from "@ant-design/icons"
import "./Header.less"

interface menuData {
  label: string
  key: string
}

const Header: FC = () => {
  const menuData: menuData[] = [
    {
      label: "账号管理",
      key: "1",
    },
    {
      label: "退出",
      key: "2",
    },
  ]
  const onClick = ({ key }: { key: string }) => {
    console.log(key)
  }

  const menu = <Menu onClick={onClick} items={menuData} />

  return (
    <div className="header-box">
      <div className="header-box-title">
        <HomeTwoTone />
        <span className="header-box-title-name">内网门户网站</span>
      </div>
      <div className="header-box-user">
        <div className="header-box-user-icon">
          <Avatar src="https://joeschmoe.io/api/v1/random" />
        </div>
        <div className="header-box-user-name">
          <Dropdown overlay={menu}>
            <Space>
              user
              <DownOutlined style={{ fontSize: "14px" }} />
            </Space>
          </Dropdown>
        </div>
      </div>
    </div>
  )
}

export default () => <Header />
