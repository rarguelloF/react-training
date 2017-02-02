from flask import Flask

import json

app = Flask(__name__)


@app.route('/')
def index():
    with open('index.html') as data_file:
        data = data_file.read()

    return data


@app.route('/products')
def products():
    with open('products.json') as data_file:
        data = json.load(data_file)

    return json.dumps(data)


@app.route('/pay')
def pay():
    """Receives a cart object, validates it and returns the total price."""
    return 'Pay page'


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8000)
