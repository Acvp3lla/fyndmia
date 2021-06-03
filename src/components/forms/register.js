import { Form, FormGroup, Input, Label, Heading, Button } from "./lib";
import { Spinner } from "../../lib";

function Register() {
  return (
    <Form>
      <Heading>Sign Up</Heading>
      <FormGroup>
        <Label for="name">First Name</Label>
        <Input type="text" id="fname" placeholder="Enter your first name" />
      </FormGroup>
      <FormGroup>
        <Label for="lname">Last Name</Label>
        <Input type="text" id="lname" placeholder="Enter your last name" />
      </FormGroup>

      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" id="email" placeholder="Enter your email address" />
      </FormGroup>

      <FormGroup>
        <Label>Password</Label>
        <Input
          type="password"
          id="password"
          placeholder="Enter your password"
        />
      </FormGroup>

      <FormGroup>
        <Label id="passwordConfirmation">Confirm Password</Label>
        <Input
          type="password"
          id="passwordConfirmation"
          placeholder="Re-enter your password"
        />
      </FormGroup>
      <Button type="submit">
        Sign Up <Spinner />
      </Button>
    </Form>
  );
}

export default Register;
