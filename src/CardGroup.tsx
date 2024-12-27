import React from 'react';
import { Card, Button, Avatar, Text, SimpleCell } from '@vkontakte/vkui';

export interface CardGroupProps {
  id: number;
  title: string;
  membersCount: number;
  photo: string;
}

const CardGroup: React.FC<CardGroupProps> = ({ id, title, membersCount, photo }) => {
  const handleConnect = () => {
    window.open(`https://vk.com/donut_settings/-${id}`, '_blank');
  };

  return (
    <Card mode="shadow">
      <SimpleCell
        before={<Avatar size={48} src={photo} />}
        after={
          <Button size="m" mode="secondary" onClick={handleConnect}>
            Подключить
          </Button>
        }
      >
        <Text weight="1">{title}</Text>
        <Text weight="3">{membersCount} подписчиков</Text>
      </SimpleCell>
    </Card>
  );
};

export default CardGroup;
