import bridge from '@vkontakte/vk-bridge';

export interface VKGroup {
  id: number;
  name: string;
  members_count: number;
  photo_100: string;
}

class VKApi {
  private readonly APP_ID = 52891021;
  private readonly API_VERSION = '5.131';

  async getAuthToken() {
    const auth = await bridge.send('VKWebAppGetAuthToken', {
      app_id: this.APP_ID,
      scope: 'groups'
    });
    return auth.access_token;
  }
    async getUserGroups(): Promise<VKGroup[]> {
      const token = await this.getAuthToken();
    
      const response = await bridge.send('VKWebAppCallAPIMethod', {
        method: 'groups.get',
        params: {
          filter: 'admin',
          extended: 1,
          fields: 'members_count,photo_100',
          access_token: token,
          v: this.API_VERSION
        }
      });

      return response.response.items;
    }
  }

export const vkApi = new VKApi();
