import json
import os
import time
import httplib
from flask import Flask, Response, request, make_response
from flask.ext.cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})


@app.route('/api/todos', methods=['GET'])
def todos_index():
    with open('todos.json', 'r') as db:
        todos = json.loads(db.read())

    return Response(json.dumps(todos),
                    mimetype='application/json')


@app.route('/api/todos', methods=['POST'])
def todos_create():
    with open('todos.json', 'r') as db:
        todos = json.loads(db.read())
    newTodo = request.json
    newTodo['completed'] = False
    newTodo['id'] = int(time.time() * 1000)

    with open('todos.json', 'w') as db:
        todos.append(newTodo)
        db.write(json.dumps(todos, indent=4, separators=(',', ': ')))
    return Response(json.dumps(newTodo), mimetype='application/json')


@app.route('/api/todos/<todo_id>', methods=['GET'])
def todos_show(todo_id):
    with open('todos.json', 'r') as db:
        todos = json.loads(db.read())
    todo = filter(lambda x: x['id'] == int(todo_id), todos)[0]
    return Response(json.dumps(todo), mimetype='application/json')


@app.route('/api/todos/<todo_id>', methods=['DELETE'])
def todos_delete(todo_id):
    with open('todos.json', 'r') as db:
        todos = json.loads(db.read())
    todos = filter(lambda x: x['id'] != int(todo_id), todos)
    with open('todos.json', 'w') as db:
        db.write(json.dumps(todos, indent=4, separators=(',', ': ')))
    return make_response('', httplib.NO_CONTENT)


@app.route('/api/todos/<todo_id>', methods=['PUT'])
def todos_update(todo_id):
    with open('todos.json', 'r') as db:
        todos = json.loads(db.read())
    newTodos = []
    for todo in todos:
        if todo['id'] == int(todo_id):
            todo['completed'] = request.json.get('completed') or todo['completed']
            todo['text'] = request.json.get('text') or todo['text']
            res = todo
        newTodos.append(todo)
    with open('todos.json', 'w') as db:
        db.write(json.dumps(todos, indent=4, separators=(',', ': ')))
    return Response(json.dumps(res), mimetype='application/json')


if __name__ == '__main__':
    app.debug = True
    app.run(port=int(os.environ.get("FLASK_PORT", 9000)))
