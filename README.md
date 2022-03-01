# CMSC447_HW1
How to run:
  Firstly you will need two terminal/commandline in order to run this program. 
  One is for the Python Backend while the other is for the Javascript Frontend
  
  ** ALSO PLEASE NOTE PYTHON BACKEND RUNS ON : http://127.0.0.1:5000/ 
  If yours is different please go into /CMSC447_HW1/frontend/package.json and change the 'proxy': "http://127.0.0.1:5000/", line into your python backend ip. **
  
  Steps on how to run this program.
  
  Python Terminal|
  1) inside of root directory /CMSC447_HW1/ | run your pip install here.
  2) Python Dependency or check requirements.txt:
      click==8.0.4
      colorama==0.4.4
      Flask==2.0.3
      Flask-SQLAlchemy==2.5.1
      greenlet==1.1.2
      itsdangerous==2.1.0
      Jinja2==3.0.3
      MarkupSafe==2.1.0
      SQLAlchemy==1.4.31
      Werkzeug==2.0.3
  3) python3 app.py <= this will boot up your backend.
  
  Now we will open up a new terminal to run our frontend.
  
  JavaScript Terminal| 
  1) cd frontend <= to get into javascript code
  2) npm install <= Install Javascript (react) Dependency
  3) npm start <= this will boot up the frontend and open up a webpage for you usually at http://localhost:3000/.

