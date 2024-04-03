## Remarks
- This process installs pipenv has at the user level. As a result, the directory of '[USER BASE](https://docs.python.org/3/library/site.html#site.USER_BASE)' must be added to PATH (**Note**: USER_BASE is the base directory for user site-packages. `site-packages` is the target directory of manually built Python packages.)
- Using choclately to install python on windows is well recommended
  - [stackoverflow](https://stackoverflow.com/a/57421906/1820618)
  - [The Hitchhiker's Guide to Python](https://docs.python-guide.org/starting/install3/win/#install3-windows)

## Process
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
- For my system the result is `C:\Users\USERNAME\AppData\Roaming\Python\Python310\Scripts`
- close and reopen shell

Installation is complete.

---

## pipenv notes
- [My notes](Setup\pipenv\notes.md) on pipenv
- [Hitchhiker's Guide to Python](https://docs.python-guide.org/dev/virtualenvs/#installing-packages-for-your-project) guide to **pipenv**.

### VSCode
- install the Python extension
- choose an interpreter
- consider setting `defaultpythoninterpreterpath` in VSCode settings

#### Jupyter
- It can happen that the command `$ Jupyter notebook` will not works from the cli. Instead, `python -m jupter notebook` should work

- For issues with **Jupyter Notebooks** in pipenv apparently you can run the following ([from here](https://stackoverflow.com/questions/52566337/do-i-need-to-install-jupyter-notebook-in-every-virtual-environment))
```shell
pip install ipykernel  
python -m ipykernel install --user
```







### Error messages

1.	```
	ERROR: pip's dependency resolver does not currently take into account all the packages that are installed. This behaviour is the source of the following dependency conflicts. pipenv 2022.4.21 requires setuptools>=60.0.0, but you have setuptools 58.1.0 which is incompatible.
	```