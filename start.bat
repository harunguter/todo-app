start /b /D .\server\ npm start
start /b /D .\client\ npm start
::timeout 5
::start /b http://localhost:3001/todos
