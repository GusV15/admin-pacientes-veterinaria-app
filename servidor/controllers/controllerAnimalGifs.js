import ApiAnimalGifs from '../api/apiAnimalGifs.js';

class ControllerAnimalGifs {
  constructor() {
    this.apiAnimalGifs = new ApiAnimalGifs();
  }

  getAnimalGifs = async (req, res) => {
    try {
      const animalGifs = await this.apiAnimalGifs.getAnimalGifs();
      res.json(animalGifs);
    } catch (error) {
      console.log('Error ControllerAnimalGifs getAnimalGifs', error);
    }
  };
}

export default ControllerAnimalGifs;
