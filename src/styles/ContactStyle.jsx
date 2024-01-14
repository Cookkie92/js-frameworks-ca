import styled from "styled-components";

export const ContactContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const ContactTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
