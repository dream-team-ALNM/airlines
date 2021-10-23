import conn from '../db/airlines';

class City {
  private model;

  constructor() {
    this.model = conn.models.city;
  }

  async getOne(parametrs: any): Promise<any> {
    try {
      return await this.model.findOne(parametrs);
    } catch (error) {
      throw Error(`Can not get given city: ${error.toString()}`);
    }
  }

  async getSome(parametrs: any): Promise<any> {
    try {
      return await this.model.find(parametrs);
    } catch (error) {
      throw Error(`Can not get given cities: ${error.toString()}`);
    }
  }

  async getAll(): Promise<any> {
    try {
      return await this.model.find({});
    } catch (error) {
      throw Error(`Can not get any city: ${error.toString()}`);
    }
  }
}

module.exports = new City();
