# Application Setup

## Using this Project

### Step 1: Pre-requirements

1.  Install Python 3
2.  Install `virtualenv`
3.  Install `nodejs`

### Step 2: Create a new project

1.  Copy this project somewhere and rename it to whatever your project will be
    called.
2.  In a terminal, run

    ```sh
    virtualenv env
    ```

    to set up a new virtual environment.

    **Note**: This will create a virtual environment using the Python version
    that `virtualenv` was run with (which will be the version it was installed
    with).
    
3.  Assuming you are using the `bash` shell, run

    ```sh
    source .env/bin/activate
    ```

If you ever want to leave the virtual environment, simply run `deactivate` in
the terminal.

4.  Now you can install all of the required packages from the project's root folder using

    ```sh
    pip install -r requirements.txt
    ```

### Step 3: Create the database

With this being a sample project, we'll simple use the generated SQLite DB Django provides.
In your terminal execute in order

    ```sh
    cd backend
    python manage.py migrate
    python manage.py loaddata pricing/fixtures/initial_data.yaml
    ```
    
This will setup your database and populate it with some testing objects.

### Step 5: Installing frontend packages and providing app

    ```sh
    cd frontend
    npm install
    npm run dev
    ```
    
### Step 6: Run the server

    ```sh
    cd ..
    python manage.py runserver
    ```

Go to http://localhost:8000/


[GitHub]: https://github.com/
[virtual environment]: https://docs.python.org/3/tutorial/venv.html