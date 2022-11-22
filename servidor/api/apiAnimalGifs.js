import axios from 'axios';

import config from '../config.js';

class ApiAnimalGifs {
  async getAnimalGifs() {
    try {
      console.log(
        `https://api.giphy.com/v1/gifs/search?api_key=${config.API_GIFS_KEY}&q=animals&limit=30&offset=0&rating=g&lang=en`
      );
      // Petición http
      const instance = axios.create({
        baseURL: `https://api.giphy.com/v1/gifs/search?api_key=${config.API_GIFS_KEY}&q=animals&limit=30&offset=0&rating=g&lang=en`,
      });
      const resp = await instance.get();
      return resp.data.data.map((data) => data.images.downsized_medium.url);
    } catch (error) {
      return [];
    }
  }
}

export default ApiAnimalGifs;
