import React from "react"
import { useParams } from "react-router-dom"
import { FaTag } from "react-icons/fa"
import hotels from "../../common/hotel.json"
import "./SpecificPage.css"

function SpecificPage() {
  const { id } = useParams()
  const hotel = hotels.find((h) => h.id === parseInt(id))

  if (!hotel) {
    return <div></div>
  }

  return (
    <div className="Special-div">
      <div className="card">
        <img src={hotel.imageUrl} />
        <div className="card-title">{hotel.title}</div>
        <div className="card-content">{hotel.content}</div>
        <div className="card-text">Per Night</div>
        <div className="card-total">Total ${hotel.total}</div>
        <div className="card-price">
          <FaTag className="ikonica" />
          <button>Book Hotel</button>
        </div>
        <p className="para2">VIP Access</p>
      </div>
    </div>
  )
}

export default SpecificPage
