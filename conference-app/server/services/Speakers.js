const axios = require('axios');

class SpeakersService {
  constructor({ serviceRegistryUrl, serviceVersionIdentifier }) {
    this.serviceRegistryUrl = serviceRegistryUrl;
    this.serviceVersionIdentifier = serviceVersionIdentifier;
  }

  async getNames() {
    const { ip, port } = await this.getService('speakers-service');
    return this.callService({
      method: 'get',
      url: `http://${ip}:${port}/names`,
    });
  }

  async getListShort() {
    const { ip, port } = await this.getService('speakers-service');
    return this.callService({
      method: 'get',
      url: `http://${ip}:${port}/list-short`,
    });
  }

  async getList() {
    const { ip, port } = await this.getService('speakers-service');
    return this.callService({
      method: 'get',
      url: `http://${ip}:${port}/list`,
    });
  }

  async getAllArtwork() {
    const { ip, port } = await this.getService('speakers-service');
    return this.callService({
      method: 'get',
      url: `http://${ip}:${port}/artwork`,
    });
  }

  async getSpeaker(shortname) {
    const { ip, port } = await this.getService('speakers-service');
    return this.callService({
      method: 'get',
      url: `http://${ip}:${port}/speaker/${shortname}`,
    });
  }

  async getArtworkForSpeaker(shortname) {
    const { ip, port } = await this.getService('speakers-service');
    return this.callService({
      method: 'get',
      url: `http://${ip}:${port}/artwork/${shortname}`,
    });
  }

  async callService(requestOptions) {
    const response = await axios(requestOptions);
    return response.data;
  }

  async getService(serviceName) {
    const response = await axios.get(
      `${this.serviceRegistryUrl}/find/${serviceName}/${this.serviceVersionIdentifier}`
    );
    return response.data;
  }
}

module.exports = SpeakersService;
