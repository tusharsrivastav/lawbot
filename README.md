# lawbot

Disclaimer: This Project is Under Development

This application is currently in active development and is not yet considered stable for production use. It may contain bugs, incomplete features, or undergo significant changes without notice. Please use it cautiously and avoid deploying it in a production environment.


## Installation
After cloning this repository in your local machine, follow these steps:

### Installing dependencies

### Django API(Backend)
1. Open 'lawbot_api' directory in your text editor
2. Create a virtual environment using `python3 -m venv env`
3. Activate the virtual environment `source env/bin/activate`
4. Then install the virtualenv packages on your machine with: `pip install -r requirements.txt`

### React Frontend
1. Open 'lawbot_frontend' directory in the text editor
2. In the terminal run: `npm install` or `yarn install` to install the npm packages


## Setup
After installing all the dependencies for the project locally, follow these steps:

1. Using MySQL, create a new database 'lawbot_db' using: `CREATE DATABASE lawbot_db;`
2. In the 'lawbot_api' directory make necessary migrations and run the django project with:
   ```
   python3 manage.py makemigrations
   python3 manage.py migrate
   python3 manage.py runserver
   ```
3. After the localhost server is running, go to django admin dashboard `http://localhost:8000/admin/` and create a new 'User' and 'Chat'
4. Now, open 'lawbot_frontend' directory and run the npm server using: `npm start`
5. The application should now be running. Go to the localhost server and start using the application.
