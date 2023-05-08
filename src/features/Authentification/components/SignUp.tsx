import AppForm from "@/components/form/AppForm";
import AppFormInput from "@/components/form/AppFormInput";
import AppFormList from "@/components/form/AppFormList";
import AppFormListItem from "@/components/form/AppFormListItem";
import AppButton from "@/components/ui/AppButton";
import AppHeading from "@/components/ui/AppHeading";
import AppLink from "@/components/ui/AppLink";
import AppParagraph from "@/components/ui/AppParagraph";
import styled from "styled-components";

const LoginContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  border-radius: 20px;
  background-color: ${(props) => props.theme.semiDarkBlue};
  width: 400px;
`;

interface ISignUp {
  onFormSwitch: Function;
}

const SignUp = ({ onFormSwitch }: ISignUp) => {
  return (
    <LoginContainer>
      <AppForm>
        <AppHeading large>Sign Up</AppHeading>
        <AppFormList>
          <AppFormListItem>
            <AppFormInput placeholder="Email address" />
          </AppFormListItem>
          <AppFormListItem>
            <AppFormInput placeholder="Password" />
          </AppFormListItem>
          <AppFormListItem>
            <AppFormInput placeholder="Repeat password" />
          </AppFormListItem>
        </AppFormList>
        <AppButton>Create an account</AppButton>
      </AppForm>
      <AppParagraph>
        Already have an account?{` `}
        <AppLink red onClick={() => onFormSwitch("login")}>
          Login
        </AppLink>
      </AppParagraph>
    </LoginContainer>
  );
};

export default SignUp;
