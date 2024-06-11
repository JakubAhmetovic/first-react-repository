import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import Dodatak from "./components/Dodatak/Dodatak"
import Dobrodoslica from "./components/Griting/Griting"
import Hotel from "./components/Kartica/Hotel_kartica/Hotel"
import hotels from "./common/hotel.json"
import Heder from "./components/Heder/Heder"
import Footer from "./components/Foter/Footer"
import { Route, Routes } from "react-router-dom"
import Hoteli from "./pages/Hotels/Hotels"
import StartPage from "./components/StarPage/StartPage"
import SpecificPage from "./pages/SpecificPage2/SpecificPage"
import TeamKartica from "./components/Kartica/TeamKartica/TeamKartica"
import Teams from "./pages/Teams/Teams"

function App() {
  //   const [count, setCount] = useState(0)
  //   const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  //   // const arr=[];
  //   //   for (let i = 1; i < 10; i++) {
  //   //     arr.push(i)
  //   //   }
  //   const reverseArr = () => {
  //     const _arr = [...arr]
  //     setArr(_arr.reverse())
  //   }
  return (
    <>
      <Heder />
      <div className="main2">
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/hotels" element={<Hoteli />} />
          <Route path="/hotels/:id" element={<SpecificPage />} />
          <Route path="/teams" element={<Teams />} />
        </Routes>
      </div>
      {/* <div className="main">
        {hotels.map((hotel) => (
          <Hotel
            key={hotel.id}
            imageUrl={hotel.imageUrl}
            title={hotel.title}
            content={hotel.content}
            total={hotel.total}
          ></Hotel>
        ))}
      </div> */}
      <Footer />
    </>
  )
}

export default App
// // desstracturing(izvukli smo name iz osoba)
// // sa objektom
// const osoba = {
//   name: "Jakub",
//   age: 17,
// }
// const { name } = osoba
// // sa nizom
// const arr = ["Kanita", 19]
// const [ime] = arr //Kanita
// const [, godine] = arr //19
