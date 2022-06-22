# Alexa Win10 XPS
## 21/06/2021
### Remarks
- pipenv has been 'user installed' as per guide instructions.
	- this requires the '[user base](https://docs.python.org/3/library/site.html#site.USER_BASE)'s' binary directory to be added to PATH (this directory is base for user site-packages. site-packages is where manually packages built go)
- [A popular answer on stackoverflow](https://stackoverflow.com/a/57421906/1820618) also recommends using chocolately for installing Python on windows
- I deleted all the folders in `site-packages` that began with `~` because warning messages about "invalid distributions" when I ran **pip**

### Process
1. [Install Chocolately](https://docs.chocolatey.org/en-us/choco/setup) from admin **cmd**
	-  `@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "[System.Net.ServicePointManager]::SecurityProtocol = 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"`
	-  close then reopen **cmd**
2.  [Install Python](https://docs.python-guide.org/starting/install3/win/#install3-windows) from admin **cmd**
	- `choco install python`
	- Make sure pip is up to date: `python -m pip install -U pip`
3. [Setup Pipenv and Virtual Environments](https://docs.python-guide.org/dev/virtualenvs/#virtualenvironments-ref)
	- `pip install --user pipenv`
 > This does a [user installation](https://pip.pypa.io/en/stable/user_guide/#user-installs) to prevent breaking any system-wide packages. If pipenv isn’t available in your shell after installation, you’ll need to add the user base’s binary directory to your PATH.



- The user base directory is where user site-packages go

- To add the user base directory to PATH you first need to know what it is. To get it, run `py -m site --user-site`. Then modify the returned value by replacing `site-packages` with `Scripts`
- For my system the result is `C:\Users\alexa\AppData\Roaming\Python\Python310\Scripts`
- close and reopen shell

Installation is complete.
---

## pipenv notes
[See here](https://docs.python-guide.org/dev/virtualenvs/#installing-packages-for-your-project) for more instructions on how to use **pipenv**.

- pipenv is a higher level too than pip. Pipenv is meant to simplify dependency management.

- **Installing packages**
	```
	$ cd project_folder
	$ pipenv install requests
	```
	This will create a `Pipfile` in the project directory. The Pipfile is used to track dependencies your project needs

- To **run python files from the virtual environment**, use either:
	- `$ pipenv run python main.py`
	- `$ pipenv shell`  
	- The latter will open a shell that ensures all commands have access to packages of the virtual environment. 
	-

- A warning about dependencies ([1](#error-messages)) came up after I setup a new pipenv. I fixed it with `pipenv lock --clear` which came from [here](https://stackoverflow.com/questions/51512519/pipenv-how-to-resolve-dependency-conflicts)
- For issues with **Jupyter Notebooks** in pipenv apparently you can run the following ([from here](https://stackoverflow.com/questions/52566337/do-i-need-to-install-jupyter-notebook-in-every-virtual-environment))
```shell
pip install ipykernel  
python -m ipykernel install --user
```

### VSCode
- installed the Python extension

#### Jupyter
- `$ Jupyter notebook` no longer works from the cli. I deleted it from `C:\Users\alexa\AppData\Roaming\Python\Python310\Scripts`. I'm not sure how it got there in the first place, or if reinstalling jupyter would put an executable somewhere else. For now `python -m jupter notebook` should work








### Error messages

1.	```
	ERROR: pip's dependency resolver does not currently take into account all the packages that are installed. This behaviour is the source of the following dependency conflicts. pipenv 2022.4.21 requires setuptools>=60.0.0, but you have setuptools 58.1.0 which is incompatible.
	```
