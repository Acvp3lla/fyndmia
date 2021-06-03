import styled from "styled-components";

export const Form = styled.form`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  > * {
    margin: 10px auto;
    width: 100%;
    max-width: 300px;
  }

  button:last-child {
    margin-top: 25px;
  }
`;

export const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid grey;
  background: #f1f2f7;
  border-radius: 5px;
  font-size: 16px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  > label {
    margin-bottom: 5px;
  }
`;

export const Heading = styled.h1`
  text-align: center;
`;

export const Label = styled.label``;

export const Button = styled.button`
  padding: 6px 20px;
  border: 0;
  background-color: #2775ff;
  color: white;
  border-radius: 4px;
  font-size: max(1.5vh, 18px);
  cursor: pointer;
  line-height: 1;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
`;
