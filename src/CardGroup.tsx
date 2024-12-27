import React from 'react';
import { Card, Button, Avatar, Text, SimpleCell } from '@vkontakte/vkui';
import { getSubscribersDeclension } from './utils/numberDeclension';

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
      <div className="flex flex-col md:flex-row items-center justify-between p-2">
        <SimpleCell
          before={<Avatar size={48} src={photo} />}
        >
          <Text weight="1">{title}</Text>
          <Text weight="3">{membersCount} {getSubscribersDeclension(membersCount)}</Text>
        </SimpleCell>
        <div className="mt-3  mr-0 md:mr-2 md:mt-0 w-full md:w-auto text-center">
          <Button size="m" mode="secondary" onClick={handleConnect}>
            Подключить
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CardGroup;
