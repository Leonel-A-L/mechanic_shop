export default function Services(props) {
  const displayServices = props.services.map((eachService) => <li>{eachService}</li>)

  return (
    <div>
      <div className="servicesPage">
        <div className="servicesHeader">
          <h1>Services</h1>
        </div>
        <ul>
          {displayServices}
        </ul>
      </div>
    </div>
  )
}