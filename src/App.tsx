import { FC } from "react"
import "./App.css"
import Header from "./components/Header"
import Main from "./pages/main/index"
const App:FC = () => {
  return (
    <div className="layout">
      <div className="layout-top">
        <Header />
      </div>
      <div className="layout-content">
        <Main />
        </div>
    </div>
  )
}

export default () => <App />
