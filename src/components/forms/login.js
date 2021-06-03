import { Form, Input, FormGroup, Button, Label, Heading } from "./lib";
import { Spinner } from "../../lib";

function Login() {
  function handleSubmit(e) {
    e.preventDefault();

    const { email, password, rememberMe } = e.target.elements;

    console.table(email.value, password.value, rememberMe.value);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Heading>Sign In</Heading>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" id="email" placeholder="Enter your email address" />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="password"
          id="password"
          placeholder="Enter your password"
        />
      </FormGroup>
      <div style={{ display: "flex", alignItems: "center" }}>
        <label for="rememberMe" style={{ marginRight: "10px" }}>
          Remember me
        </label>
        <input type="checkbox" id="rememberMe" />
      </div>
      <Button type="submit">
        Sign In <Spinner />
      </Button>
    </Form>
  );
}

export default Login;
