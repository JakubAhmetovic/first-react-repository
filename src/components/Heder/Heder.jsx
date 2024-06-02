import "./Heder.css"
import { FaSearch } from "react-icons/fa"
import { FaPhone } from "react-icons/fa"
import { MdSpeakerNotes } from "react-icons/md"
import { FaFileWaveform } from "react-icons/fa6"
import { FaServicestack } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import img1 from "../Heder/Logo-removebg-preview.png"
function Heder() {
  return (
    <>
      <header>
        <div className="cla1">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "activeClass" : "class")}
          >
            <img src={img1} alt="" />
          </NavLink>
        </div>
        <div className="cla2">
          <p>
            <NavLink
              to="/hotels"
              className={({ isActive }) => (isActive ? "activeClass" : "class")}
            >
              Hotels
            </NavLink>
          </p>
          <p>
            <FaServicestack className="iconica" />
            Services
          </p>
          <p>
            <FaFileWaveform className="iconica" />
            Projects
          </p>
          <p>
            <MdSpeakerNotes className="iconica" />
            About Us
          </p>
          <p>
            <FaPhone className="iconica" />
            Contact Us
          </p>
        </div>
        <div className="cla3">
          <button>Log In</button>
          <button>Sign Up</button>
        </div>
      </header>
    </>
  )
}
export default Heder
