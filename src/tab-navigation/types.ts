import { ReactNode } from "react";

export type Selected = { selected?: boolean };

export type TabData = Selected & {
  id: string;
  content: ReactNode;
  label: string;
};
