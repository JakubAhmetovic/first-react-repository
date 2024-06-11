import "./StartPage.css"
import { NavLink } from "react-router-dom"

function StartPage() {
  return (
    <div className="Start-class">
      <div className="Text-Class">
        <p>Log In or make a New account in the right upper corner OR</p>
        <NavLink
          to="/hotels"
          className={({ isActive }) => (isActive ? "activeClass" : "class")}
        >
          Continue as a GUEST
        </NavLink>
      </div>
    </div>
  )
}
export default StartPage
