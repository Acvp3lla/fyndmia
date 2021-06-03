import {} from "./lib";

function Register() {
  return (
    <form>
      <label for="name">First Name</label>
      <input type="text" id="fname" placeholder="Enter your first name" />

      <label for="lname">Last Name</label>
      <input type="text" id="lname" placeholder="Enter your last name" />

      <label for="email">Email</label>
      <input type="email" id="email" placeholder="Enter your email address" />

      <label>Password</label>
      <input type="password" id="password" placeholder="Enter your password" />
      <label id="passwordConfirmation">Confirm Password</label>
      <input
        type="password"
        id="passwordConfirmation"
        placeholder="Re-enter your password"
      />

      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Register;
