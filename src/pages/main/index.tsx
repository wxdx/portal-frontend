import { FC } from "react"
import Side from "./_source/Side"
import "./index.less"
const Main: FC = () => {
  return (
    <div className="main-box">
      <div className="main-box-side">
        <Side />
      </div>
      <div className="main-box-content"></div>
    </div>
  )
}

export default () => <Main />
