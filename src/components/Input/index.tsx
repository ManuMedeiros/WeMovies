import * as React from "react";
import * as S from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = (props) => {
  return (
    <S.Content>
      <S.Input {...props} />
    </S.Content>
  );
};
