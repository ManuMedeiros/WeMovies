import styled from "styled-components";

export const Content = styled.div`
  background-color: #ffffff;
  height: auto;
  width: auto;
  min-width: 960px;
  min-height: 532px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 32px;
  padding: 64px;
  flex-wrap: nowrap;
  border-radius: 4px;

  @media(max-width: 600px) {
    min-width: auto;
    width: 67%;
    margin: 0 auto;
    text-align: center;
  }
`;
