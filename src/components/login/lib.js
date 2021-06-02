import styled from "styled-components";

export const Form = styled.form`
  color: black;

  > * {
    margin-bottom: 12px;
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

export const Label = styled.label``;

export const Button = styled.button`
  padding: 6px 20px;
  border: none;
  background-color: #2775ff;
  color: white;
  border-radius: 4px;
  font-size: max(1.5vh, 18px);
  cursor: pointer;
  width: 125px;
  white-space: nowrap;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
