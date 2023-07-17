export default function CreateAccount() {
  return (
    <div className="createAccountPage">
      <div className="createAccountHeader">
        <h1>
          Create Account
        </h1>
        <div>
          <form className="createAccountForm">
            <label for="email">Email:</label>
            <input type="text" id="email" name="email"/>
            <label for="phoneNumber">Phone Number:</label>
            <input type="text" id="phoneNumber" name="phoneNumber"/>
            <button type="submit" className="submitButton">Create Account</button>
          </form>
        </div>
      </div>
    </div>
  )
}