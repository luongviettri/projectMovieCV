import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin-top: 1rem;
`;
export const Input = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 1rem;
  color: #fff;
  margin-top: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
  :focus {
    font-size: 1.1rem;
  }
`;
export const Label = styled.label`
  position: absolute;
  top: -1.5rem;
  left: 0;
  margin: 10px 0;
  font-size: 1rem;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
  ${Input}:focus ~ & {
    top: -2.5rem;
    left: 0;
    color: #03e9f4;
    font-size: 1.2rem;
  }
`;
