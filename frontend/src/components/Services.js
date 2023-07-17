export default function Services() {

  return (
    <div>
      <div className="servicesPage">
        <div className="servicesHeader">
          <h1>Services</h1>
        </div>
        <div>
          <ul>
            <li>
              <a href="/services/oilchange">
                Oil Change
              </a>
            </li>
            <li>
              <a href="/services/brakes">
                Brakes
              </a>
            </li>
            <li>
              <a href="/services/checkenginelight">
                Check Engine Light
              </a>
            </li>
            <li>
              <a href="/services/headlights">
                Head & Tail Lights
              </a>
            </li>
            <li>
              <a href="/services/windshieldwipers">
                Windshield Wipers
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}