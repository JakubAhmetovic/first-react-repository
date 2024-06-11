import "./TeamKartica.css"
import { FaRegTrashAlt } from "react-icons/fa"
import { useEffect, useState } from "react"

function TeamKartica(props) {
  const [showMore, setShowMore] = useState(false)
  const [teamDescription, setTeamDescription] = useState("")
  useEffect(() => {
    if (showMore) {
      setTeamDescription(
        "Ovaj tim je osnovan 1925. godine. Najtrofejniji je klub u Engleskoj..."
      )
    } else {
      setTeamDescription("")
    }
  }, [showMore])
  return (
    <div className="team-card">
      <h2 className="h2">{props.name}</h2>
      <p className="p">{props.points}</p>
      <p className="p">{props.matches}</p>
      <p className="p">{props.wins}</p>
      <p className="p">{props.draws}</p>
      <p className="p">
        <button onClick={() => setShowMore(!showMore)} className="show">
          {showMore ? "Show less" : "Show more"}
        </button>
      </p>
      {showMore && <p className="p text">{teamDescription}</p>}
      <button className="trashIcon" onClick={props.onDelete}>
        <FaRegTrashAlt />
      </button>
    </div>
  )
}
export default TeamKartica
