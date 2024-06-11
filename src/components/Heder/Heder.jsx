import "./Heder.css"
import { FaSearch } from "react-icons/fa"
import { FaPhone } from "react-icons/fa"
import { MdSpeakerNotes } from "react-icons/md"
import { FaFileWaveform } from "react-icons/fa6"
import { FaServicestack } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import img1 from "../Heder/Logo-removebg-preview.png"
import { LiaHotelSolid } from "react-icons/lia"
import teams from "../../common/teams.json"
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
          <NavLink
            to="/hotels"
            className={({ isActive }) => (isActive ? "activeClass" : "class")}
          >
            <li>
              <FaServicestack className="iconica" />
              <p>Hotels</p>
            </li>
          </NavLink>
          <NavLink
            to="/teams"
            className={({ isActive }) => (isActive ? "activeClass" : "class")}
          >
            <li>
              <FaFileWaveform className="iconica" />
              <p>Timovi</p>
            </li>
          </NavLink>
          {/* <li>
            <FaFileWaveform className="iconica" />
            <p>Projects</p>
          </li> */}
          <li>
            <MdSpeakerNotes className="iconica" />
            <p>About Us</p>
          </li>
          <li className="stvarno">
            <FaPhone className="iconica" />
            <p>Contact Us</p>
          </li>
          <li>
            <FaSearch className="iconica" />
            <p>Search</p>
          </li>
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
