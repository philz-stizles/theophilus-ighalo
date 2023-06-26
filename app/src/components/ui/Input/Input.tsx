import styled from "styled-components";

type InputWrapperProps = {
  inValid: boolean;
};

const InputWrapper = styled("div")<InputWrapperProps>`
  & label {
    color: ${(props) => (props.inValid ? "red" : "#ccc")};
  }

  &.invalid label {
  }

  & input {
    padding: 2px 4px;
    border: 1px solid ${(props) => (props.inValid ? "red" : "#ccc")};
  }

  & input:focus {
  }

  &.invalid input {
  }

  @media (max-width: 767px) {
  }

  @media only screen and (max-width: 767px) {
  }
`;

type InputProps = {
  label?: string;
  type?: string;
  placeholder?: string;
  error?: string;
  isValid?: boolean;
  isTouched?: boolean;
};

const Input = ({
  label,
  type = "text",
  placeholder,
  isValid = false,
  isTouched = false,
}: InputProps) => {
  return (
    // <InputWrapper className={`${!isValid && isTouched && "invalid"}`}>
    <InputWrapper inValid={!isValid && isTouched}>
      {label && (
        <label>
          {label}
          <input type={type} placeholder={placeholder} />
        </label>
      )}
    </InputWrapper>
  );
};

export default Input;
