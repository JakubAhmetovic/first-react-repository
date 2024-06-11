import Hotel from "../../components/Kartica/Hotel_kartica/Hotel"
import hotels from "../../common/hotel.json"
import "./Hotels.css"
// import "./Hotel.css"

function Hoteli() {
  return (
    <>
      <div className="main">
        {hotels.map((hotel) => (
          <Hotel
            key={hotel.id}
            imageUrl={hotel.imageUrl}
            title={hotel.title}
            content={hotel.content}
            total={hotel.total}
            onClick={() => (window.location.href = `/hotels/${hotel.id}`)}
          ></Hotel>
        ))}
      </div>
    </>
  )
}
export default Hoteli
