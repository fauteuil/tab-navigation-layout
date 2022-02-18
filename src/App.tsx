import "./styles.css";

import { TabNavigation } from "./tab-navigation/TabNavigation";
import { mockTabNavigationData } from "./tab-navigation/TabNavigation.test";

export default function App() {
  return (
    <div className="App">
      <TabNavigation tabs={mockTabNavigationData} />
    </div>
  );
}
