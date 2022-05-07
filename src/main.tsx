import ReactDOM from "react-dom/client"
import App from "./App"
import { ConfigProvider } from "antd"
import zhCN from "antd/lib/locale/zh_CN"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>
)
