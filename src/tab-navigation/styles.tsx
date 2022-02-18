import styled from "styled-components";
import { Selected } from "./types";
import randomRgba from "random-rgba";

export const TabNavigationContainer = styled.div<Selected>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const TabRow = styled.div<Selected>`
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border-bottom: 0.0625rem solid green;
`;

export const TabLabelContainer = styled.div<Selected>`
  cursor: pointer;
  padding: 0.75rem;
  background-color: ${({ selected }: Selected) =>
    selected ? "white" : "green"};
  color: ${({ selected }: Selected) => (selected ? "green" : "white")};
`;

export const TabContentContainer = styled.div<Selected>`
  background-color: white;
  padding: 1rem;
`;
