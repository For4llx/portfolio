import { useState } from "react";
import styled from "styled-components";

const FormInputContainer = styled.div`
  position: relative;
`;

const FormInput = styled.input`
  padding: 1rem;
  color: ${(props) => props.theme.white};
  border-bottom: 1px solid ${(props) => props.theme.greyishBlue};
  font-size: 15px;
  font-weight: 300;
  width: 100%;
`;

const FormErrorMessage = styled.p`
  position: absolute;
  right: 0;
  top: 0;
  padding: 1rem;
`;

interface IAppFormInput {
  placeholder: string;
}

const AppFormInput = ({ placeholder }: IAppFormInput) => {
  const [isEmpty, setIsEmpty] = useState(false);
  return (
    <FormInputContainer>
      <FormInput placeholder={placeholder} />
      {isEmpty && <FormErrorMessage>Can't be empty</FormErrorMessage>}
    </FormInputContainer>
  );
};

export default AppFormInput;
