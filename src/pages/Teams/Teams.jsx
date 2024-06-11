import TeamKartica from "../../components/Kartica/TeamKartica/TeamKartica"
import teams from "../../common/teams.json"
import "./Teams.css"
import { useState } from "react"

function Teams() {
  const [teamsList, setTeamsList] = useState(teams)
  const handleDelete = (teamName) => {
    const updatedTeams = teamsList.filter((team) => team.team_name !== teamName)
    setTeamsList(updatedTeams)
  }
  return (
    <>
      {/* <Heder /> */}
      <div className="list">
        {teams.map((value) => {
          return (
            <TeamKartica
              name={value.team_name}
              points={`${value["points"]}pts`}
              wins={value.wins}
              loses={value.loses}
              draws={value.draws}
              matches={value.matches_played}
              onDelete={() => handleDelete(value.team_name)}
            />
          )
        })}
      </div>
    </>
  )
}
export default Teams
