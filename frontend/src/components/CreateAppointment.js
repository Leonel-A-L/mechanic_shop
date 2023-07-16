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
          <label for="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName"/>
          <label for="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName"/>
          <label for="address">Address:</label>
          <input type="text" id="address" name="address"/>
          <label for="phoneNumber">Phone Number:</label>
          <input type="text" id="phoneNumber" name="phoneNumber"/>
          <label for="city">City:</label>
          <input type="text" id="city" name="city"/>
          <label for="state">State:</label>
          <input type="text" id="state" name="state"/>
          <label for="typeOfService">Type of Service:</label>
          <input type="text" id="typeOfService" name="typeOfService"/>
          <label for="availableTime">Available Time:</label>
          <input type="text" id="availableTime" name="availableTime"/>
          <input className="submitButton" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  )
}