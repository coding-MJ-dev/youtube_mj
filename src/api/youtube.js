export default class Youtube{
  constructor(apiClient) {
    this.apiClient = apiClient;
    // this.httpClient = axios.create({
    //   baseURL: 'https://www.googleapis.com/youtube/v3',
    //   params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    // });
  }


  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
    // using Axios

  }

  async #searchByKeyword(keyword) {
    return this.apiClient.search(
      {params:{
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        q: keyword
      },
    })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({...item, id: item.id.videoId})));

  }


  async #mostPopular() {
    return this.apiClient.videos({
      params:{
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 25,  
      },
    })
    .then((res) => res.data.items)
  }
}




