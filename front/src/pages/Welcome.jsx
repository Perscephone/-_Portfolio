import Navigation from "../components/Navigation.jsx"
import Hi from "../components/Hi.jsx"
import Portfolio from "./Portfolio.jsx"

const Welcome = () => {
  return ( 
    <div className="site">
      <div className="header">
        <div className="menu">
          <h1 className="myName" >Maëlys Champeau</h1>
          <Navigation/>
        </div>
        <Hi/>
      </div>
      <div className="page1">
        <Portfolio/>
      </div>
    </div>
  )
}
export default Welcome