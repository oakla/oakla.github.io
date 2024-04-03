# Pipenv

pipenv is a higher level too than pip. Pipenv is meant to simplify dependency management.

> The python interpreter in the virtualenv is just a symlink to the /usr/bin/python
- [from here](https://stackoverflow.com/questions/65135449/why-is-pipenv-still-using-the-global-jupyter-usr-bin-python3-and-not-encapsul)

## Create Virtual Environments

Virtual environments are create implicitly when you install packages using pipenv

## Installing packages
```
$ cd project_folder
$ pipenv install <package>
```
or install as normal from the pipenv shell, which you can call with:
```
$ pipenv shell
```

This will create a `Pipfile` in the project directory. The Pipfile is used to track dependencies your project needs

## Run
- To **run** python files from the virtual environment, use either:
	- `$ pipenv run python main.py`
	- `$ pipenv shell`  
	- The latter will open a shell that ensures all commands have access to packages of the virtual environment. 
	-

## Remarks
- When I ran this process, a warning about dependencies ([1](#error-messages)) came up after I setup a new pipenv. I fixed it with `pipenv lock --clear`, a solution which came from [here](https://stackoverflow.com/questions/51512519/pipenv-how-to-resolve-dependency-conflicts)
- When using pipenv, you can still install to the global environment with `pip`. e.g.,
    ```shell
    $ pip install requests
    ```