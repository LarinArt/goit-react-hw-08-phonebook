import styled from "styled-components";
import Container from "components/ui/Container";

export const ContainerSearch = styled(Container)`
  width: 400px;
  margin: 20px 0;
  padding: 10px 0;
  border-radius: 10px;
  color: #000;
  background-color: rgba(244, 244, 246, 0.4);
  box-shadow: 2px 2px 23px 9px rgba(0, 0, 0, 0.39);
`;

export const Title = styled.h2`
  font-size: 16px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  text-align: center;
  margin-top: 10px;
  padding: 5px;
  border: none;
  border-radius: 5px;
  opacity: 0.5;
`;
