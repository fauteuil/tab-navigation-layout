import { nanoid } from "nanoid";
import { TabData } from "./types";
import styled from "styled-components";
import { PropsWithChildren, ReactNode } from "react";

const MockTabContent = styled.div`
  padding: 5rem;
`;

function MockContent({ children = "hi" }: PropsWithChildren<ReactNode>) {
  return <MockTabContent>{children}</MockTabContent>;
}

export const mockTabNavigationData: TabData[] = [
  {
    id: nanoid(7),
    label: `${nanoid(3)} label`,
    content: <MockContent>hi</MockContent>
  },

  {
    id: nanoid(7),
    label: `${nanoid(3)} label`,
    content: <MockContent>hello</MockContent>
  },
  {
    id: nanoid(7),
    label: `${nanoid(3)} label`,
    content: <MockContent>howdy</MockContent>
  },
  {
    id: nanoid(7),
    label: `${nanoid(3)} label`,
    content: <MockContent>hiya</MockContent>
  },
  {
    id: nanoid(7),
    label: `${nanoid(3)} label`,
    content: <MockContent>heyho</MockContent>
  }
];
