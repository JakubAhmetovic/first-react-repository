import "./Griting.css"
function Dobrodoslica(props) {
  return (
    <div className="griting-wraper">
      <h1 className="gritimg-title">Welcome {props.appName}</h1>
      <p className="griting-subtitle">JAKUB AHMETOVIĆ {props.fullName}</p>
    </div>
  )
}
export default Dobrodoslica
