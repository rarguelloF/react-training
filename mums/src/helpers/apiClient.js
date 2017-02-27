import URI from 'urijs';

export default class ApiClient {
  constructor(params) {
    this.host = params.host;
  }

  getProducts(page = 0, perPage = 6) {
    const url = URI(this.host)
      .directory('products')
      .query({ page, perPage });

    return fetch(url)
      .then(
        response => response.json()
                            .then(data => ({ error: false, data })),
        error => ({ error: true, data: error }),
      );
  }
}
