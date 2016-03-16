## React-Redux TODO List

Sample application for react and redux. This demonstrates:

* React for view
* Redux for state management
* Gulp for streaming build pipelines

That's the major portion of the application. There is lot of other stuff viz. babel configuration, eslint configuration, tern configuration, flow configuration which can be used as a template for react-redux applications. There aren't any tests but one to demonstrate writing tests using `expect` and running it using `mocha`

This whole structure can be easily refactored into a `yeoman` generator. For now, I just clone this repository and clean it up for my projects


### Running the frontend server

You will need `node` and `npm` installed. Install the dependencies and then run the frontend server.

    npm install
    gulp serve


### Running the backend server

The sample backend server is written in Python/Flask. Install flask and dependencies first.

    pip install flask
    pip install flask-cors

Then run the flask application server.

    python server.py
