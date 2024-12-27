import * as React from "react";
import {
  AppRoot,
  View,
  Panel,
  PanelHeader,
  Group,
  Header,
  CardGrid,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import CardGroup from "./CardGroup";
import { vkApi, VKGroup } from "./api/vkApi";

const App = () => {
  const [groups, setGroups] = React.useState<VKGroup[]>([]);

  React.useEffect(() => {
    const loadGroups = async () => {
      try {
        const userGroups = await vkApi.getUserGroups();
        setGroups(userGroups);
      } catch (error) {
        console.error("Failed to load groups:", error);
      }
    };

    loadGroups();
  }, []);

  return (
    <AppRoot>
      <View activePanel="main">
        <Panel id="main">
          <PanelHeader>Подключайте VK Donut</PanelHeader>
          <Group className="m-2" mode="card" header={<Header>Groups</Header>}>
            <CardGrid size="l" style={{ gridTemplateColumns: "1fr" }}>
              {groups.map((group) => (
                <CardGroup
                  key={group.id}
                  id={group.id}
                  title={group.name}
                  membersCount={group.members_count}
                  photo={group.photo_100}
                />
              ))}
            </CardGrid>
          </Group>
        </Panel>
      </View>
    </AppRoot>
  );
};

export default App;
