import json
import os
import time
from flask import Flask, Response, request
from flask.ext.cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})


@app.route('/api/todos', methods=['GET', 'POST'])
def todos_handler():
    with open('todos.json', 'r') as file:
        todos = json.loads(file.read())

    if request.method == 'POST':
        newTodo = request.form.to_dict()
        newTodo['completed'] = False
        newTodo['id'] = int(time.time() * 1000)
        todos.append(newTodo)

        with open('todos.json', 'w') as file:
            file.write(json.dumps(todos, indent=4, separators=(',', ': ')))
        return Response(json.dumps(newTodo), mimetype='application/json')

    return Response(json.dumps(todos),
                    mimetype='application/json',
                    headers={'Cache-Control': 'no-cache', 'Access-Control-Allow-Origin': '*'})


@app.route('/api/todos/:id', methods=['GET', 'PUT'])
def todo(id):
    with open('todos.json', 'r') as file:
        todos = json.loads(file.read())
    todo = filter(lambda x: x['id'] == id)[0]
    if request.method == 'PUT':
        todo['completed'] = True
        newTodos = []
        for todo in todos:
            if todo['id'] == id:
                todo['completed'] = True
            newTodos.append(todo)
        with open('todos.json', 'w') as file:
            file.write(json.dumps(todos, indent=4, separators=(',', ': ')))
    return Response(json.dumps(todo), mimetype='application/json')


if __name__ == '__main__':
    app.debug = True
    app.run(port=int(os.environ.get("FLASK_PORT", 9000)))
