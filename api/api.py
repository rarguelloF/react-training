from flask import Flask
from flask import request
from flask_cors import cross_origin

import json

app = Flask(__name__)


@app.route('/products/')
@cross_origin()
def products():
    page = int(request.args.get('page', 0))
    per_page = int(request.args.get('perPage', 6))

    with open('./data/products.json') as data_file:
        data = json.load(data_file, encoding="utf-8")

    response = {
        'pagination': {
            'page': page,
            'perPage': per_page,
        },
        'total': len(data),
        'data': [data[i:i + per_page] for i in xrange(0, len(data), per_page)][page]
    }

    return json.dumps(response)


@app.route('/pay/')
def pay():
    """Receives a cart object, validates it and returns the total price."""
    return 'Pay page'


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8000)
