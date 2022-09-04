import styled from "styled-components";

export const ContainerList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const Title = styled.h2`
  color: rgba(33, 37, 41);
  text-align: center;
  font-size: 20px;
`;

export const ButtonClose = styled.button.attrs(() => ({
  type: "button",
}))`
  padding: 5px 7px;
  background-color: transparent;
  color: #fff;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.1);
  }
`;

export const TextList = styled.span`
  color: #fff;
  display: inline-block;
  margin-top: 10px;
`;
