import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Group {
  id: number;
  name: string;
  members_count: number;
  photo_100: string; // Это ссылка на маленькую аватарку
}

const App: React.FC = () => {
  const [groups, setGroups] = useState<Group[]>([]);  // Состояние для списка групп
  const [loading, setLoading] = useState<boolean>(true); // Состояние для загрузки

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        // Запрос к VK API
        const accessToken = 'YOUR_ACCESS_TOKEN';  // Здесь должен быть твой access token
        const response = await axios.get(`https://api.vk.com/method/groups.get?access_token=${accessToken}&v=5.131`);

        if (response.data && response.data.response) {
          const groupsData = response.data.response.items;
          setGroups(groupsData);
        }
      } catch (error) {
        console.error('Ошибка при загрузке групп:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGroups();
  }, []);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="App h-screen flex justify-center items-center bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-4xl font-bold text-blue-600 mb-4 text-center">Подключайте VK Donut</h1>

        {groups.length === 0 ? (
          <p className="text-center text-gray-500">Нет доступных групп.</p>
        ) : (
          <div className="space-y-4">
            {groups.map((group) => (
              <div key={group.id} className="flex items-center justify-between p-4 border-b border-gray-200">
                <div className="flex items-center">
                  <img src={group.photo_100} alt={group.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <p className="font-semibold">{group.name}</p>
                    <p className="text-gray-500">{group.members_count} подписчиков</p>
                  </div>
                </div>
                <a
                  href={`https://vk.com/donut_settings/-${group.id}`} // Ссылка на страницу подключения
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Подключить
                  </button>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
