export default function CreateAppointment() {
  return (
    <div className="appointmentPage">
      <div className="appointmentHeader">
        <h1>
          Create Appointment
        </h1>
      </div>
      <div>
        <form className="appointmentForm">
          <label for="mechanic">Mechanic:</label>
          <input type="text" id="mechanic" name="mechanic"/>
          <label for="appointmentDate">Appointment Date:</label>
          <input type="text" id="appointmentDate" name="appointmentDate"/>
          <label for="appointmentTime">Appointment Time:</label>
          <input type="text" id="appointmentTime" name="appointmentTime"/>
          <label for="reason">Reason:</label>
          <input type="text" id="reason" name="reason"/>
          <input type="submit" name="Submit" className="submitButton"/>
        </form>
      </div>
    </div>
  )
}