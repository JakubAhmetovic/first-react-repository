import "./Hotel.css"
import { FaTag } from "react-icons/fa"
import { IoMdInformationCircleOutline } from "react-icons/io"
import { LiaHotelSolid } from "react-icons/lia"
import SpecificPage from "../../../pages/SpecificPage2/SpecificPage"

function Hotel(props) {
  return (
    // <div className="main">
    //   <img src={props?.imageUrl}
    //   <div className="m2">{props?.title}
    //     <p>
    //       <strong>EST Grand Hotel Savoy</strong>
    //     </p>
    //   </div>
    //   <div className="m3">{props?.content}
    //     <p>
    //       <b className="para1">$174</b>
    //       <del>217</del>
    //       <IoMdInformationCircleOutline className="icon" />
    //     </p>
    //     <p>per night</p>
    //     <p>$379 total</p>
    //     <p>icluding taxes & fees</p>
    //     <p className="paragraf">
    //       <FaTag />
    //       Member Price avilable
    //     </p>
    //   </div>
    //   <p className="para2">VIP Access</p>
    // </div>
    <div className="card">
      <img src={props?.imageUrl} />
      <div className="card-title">{props?.title}</div>
      <div className="card-content">{props?.content}</div>
      <div className="card-text">Per Night</div>
      <div className="card-total">Total ${props.total}</div>
      <button className="card-price" onClick={props.onClick}>
        <SpecificPage /> <FaTag className="ikonica" />
        Book Hotel
      </button>
      <p className="para2">VIP Access</p>
    </div>
  )
}
export default Hotel
