import { useCallback, useState } from "react";
import {
  TabLabelContainer,
  TabContentContainer,
  TabNavigationContainer,
  TabRow
} from "./styles";
import { TabData } from "./types";

type TabNavigationProps = {
  tabs: TabData[];
};

type TabProps = {
  tab: TabData;
  handleClick: (id: string) => void;
  selected: boolean;
};

function renderTab({
  tab: { content, id, label },
  handleClick,
  selected
}: TabProps) {
  return (
    <TabLabelContainer selected={selected} onClick={handleClick(id)}>
      {label}
    </TabLabelContainer>
  );
}

export function TabNavigation({ tabs }: TabNavigationProps) {
  const [selectedTabId, setSelectedTabId] = useState<string>("");

  const handleTabClick = useCallback(
    (id: string) => () => {
      setSelectedTabId(id);
    },
    [setSelectedTabId]
  );

  const getTabContent = useCallback(() => {
    return tabs.find((tab) => tab.id === selectedTabId)?.content;
  }, [selectedTabId]);

  const tabContent = getTabContent();

  return (
    <TabNavigationContainer>
      <TabRow>
        {tabs &&
          tabs.map((tab) => {
            const selected = tab.id === selectedTabId;
            return renderTab({ handleClick: handleTabClick, tab, selected });
          })}
      </TabRow>
      <TabContentContainer>{tabContent}</TabContentContainer>
    </TabNavigationContainer>
  );
}
