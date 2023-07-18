export default function Brakes() {
  return (
    <div className="brakesPage">
      <div className="brakesPageHeader">
        <h1>
          Brakes
        </h1>
      </div>
      <div className="brakePrices">
        <p>(Prices vary on make and year of vehicle)</p>
        <p><div className="nonMember">Non-Member:</div> $200 per visit</p>
        <p><div className="sixMonthMember">6-Month Membership:</div>$170 per visit</p>
        <p><div className="oneYearMember">1-Year Membership:</div>$155 per visit and 50% OFF set of Head & Tail Lights!</p>
        <p><div className="twoYearMember">2-Year Membership:</div>$140 per visit and 65% OFF set of Head & Tail Lights!</p>
      </div>
      <div>
        <img src="https://st.depositphotos.com/1637787/2927/i/450/depositphotos_29273075-stock-photo-changing-brake-pads.jpg" alt="Changing Brakes" id="brakeChangeImg"/>
      </div>
    </div>
  )
}