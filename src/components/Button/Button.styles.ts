import styled from "styled-components";

import { IButtonProps } from "@/interfaces/IButton.interface";

export const ButtonCustom = styled.button<IButtonProps>`
  background: ${({ backGround }) =>
    backGround ?? "transparent"};
  height: ${({ height }) => height ?? "auto"};
  width: ${({ width }) => width ?? "auto"};
  display: ${({ display }) => display ?? "block"};
  justify-content: ${({ justifyContent }) => justifyContent ?? "center"};
  align-items: ${({ alignItems }) => alignItems ?? "center"};
  flex-direction: ${({ flexDirection }) => (flexDirection ? "column" : "row")};
  gap: ${({ gap }) => gap ?? "0"};
  padding: ${({ padding }) => padding ?? "0"};
  flex-wrap: ${({ flexWrap }) => (flexWrap ? "wrap" : "nowrap")};
  border-radius: ${({ borderRadius }) => borderRadius};
  border: ${({ border }) => border};
`;

export const ButtonSearch = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 13px;
  right: 10px;
  cursor: pointer;

  @media (max-width: 600px) {
    right: 45px;
  }
`;
