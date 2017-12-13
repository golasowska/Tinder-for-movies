This app has been created in React. It allows you to see the data
from server, using GET method ( application display one movie: title, image, summary, raiting )
and the user can accept or reject suggestion using one of the buttons
(I like - the green one / Dont't - the red one). The data with information ('accept 'or 'reject') goes back
to the server by a PUT call.



If you want to run this app you have to use the following instructions in your console:

1. Install json server globally:  

 npm i -g json server


2. Install dependencies:

npm i


3. To start project run:

./node_modules/.bin/webpack-dev-server --hot

json-server --watch data.json

4. The project will be available at: localhost:3001,
and the local server data which you can interact will be available
at: localhohost:3000/movies
