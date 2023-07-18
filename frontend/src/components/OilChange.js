export default function OilChange () {
  return (
    <div className="oilChangePage">
      <div className="oilChangeHeader">
        <h1>
          Oil Change
        </h1>
      </div>
      <div className="oilChangePrices">
        <p><div className="nonMember">Non-Member:</div> $45 per visit</p>
        <p><div className="sixMonthMember">6-Month Membership:</div> $35 per visit</p>
        <p><div className="oneYearMember">1-year Membership:</div> $30 per visit and a FREE set of Windshield Wipers!</p>
        <p><div className="twoYearMember">2-year Membership:</div> First 3 Oil Changes for FREE, FREE Windshield Wipers (2 sets max), and $25 per visit!</p>
      </div>
      <div>
        <img src="https://media.istockphoto.com/id/1326614900/photo/after-changing-the-oil-pour-in-the-fresh-engine-oil.jpg?s=170667a&w=0&k=20&c=-jBA-6nX9Xi932KegKmMfuUdMOyn7WGBaK2Sv9QDwVE=" alt="Oil Change" id="oilChangeImg"/>
      </div>
    </div>
  )
}