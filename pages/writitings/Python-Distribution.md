---
date: 2024-04-03
title: Python App Distribution Q&A
layout: post
---

I was asked for advice on how to distribute a collection of small Python apps (bots).

## Question
We have to deliver 3 bots soon, and we want to decide on how user's install and/or run these bots. For the users, the bots are initally accessed through an HTML page; the user clicks on a link for the bot they need, and some kind of file for launching the bot is downloaded. 

In the case of Python bots we are considering 2 options:
### Option 1: Distribute entire bot as `exe` file
- We are converting the python script to EXE through Pyinstaller. Now the client does not need python dependencies to run the script.
- In the webrunner UI, we are making client to download a zip that contains .exe and .env file. The client clicks on exe file to run the bot.
- Pros: 
	- User does not need python as dependency.
- Cons: 
	- Every time the python code changes, the dev team will need to rebuild the exe file and zip it. 
	- Also running exe could be comparatively slower.
- Note: We have written a batch file that will help to rebuild exe in one click. So rebuilding won't be an issue; makes it easier for future maintenance.

### Option 2: Distribute Batch file as a way to run scripts stored on shared file drive
- We have written a batch file that'll run the python script through client's python interpreter. 
- The Webrunner UI will download a zip that'll contain a batch file, .env file and Venv setup batch file. 
- The client clicks on the batch file to run the bot, if the bot fails to run due to dependency issue, client will run the venv batch file to install dependencies and run the bot again.
- Pros: 
	- Code changes can be easily accommodated.
- Cons: 
	- Client might face dependency issues. 
- Note: Dependency issue can be mitigated, the client has to run the venv batch file.
- There is a friction right now to install python packages as azure artifactory is yet to give access to us. 
  
## Answer

### Python Virtual Environments
You seem to be suggesting that your users download a pre-built virtual environment with each bot. This is not how virtual environments are designed to be used. A pre-built virtual environment would need to be modified after download to function properly. 

**If you want users to run their bots in virtual environments, it is best to create them on the user's machine as needed**, rather than having the user download a pre-built one. 

Also, there is usually no reason to couple a virtual environment with an exe file. The benefit of distribution as an exe file is that you can bundle all the dependencies into that exe file, thus eliminating the need for a Python virtual environment.

### EXE files
It is a good idea to implement *some* kind of 'bundling' or packaging. Exe files do this by default, but the downside is that they give you very little control over pushing updates 
### Batch Scripts
Bat scripts are good because you can just give users shortcuts to bat files stored on the share. The question is, what will you make the bat files do?

You could have them point the Python interpreter to a Python file stored on the file share. This works very well if the bot is only one file.

### A Third Option (Packaging)
However, if the bot is more than one file, you will find that moving where those files are stored can break the bot. To solve this, you can package those Python files into a Python package (see Python's Setuptools) and distribute that instead. 

If your bots exist as Python packages, you can store them and their dependencies on the file share, and use a batch script to:
- check for updates & install the bot into a Python virtual environment onto the user's machine (if it isn't already installed), and then
- run the bot

This takes only 2 lines of code (not including the creation of a Python virtual environment)
```batch
set VENV_DIR=%~dp0.venv

REM Create a Python virtual environment if it doesn't already exist
if not exist "%VENV_DIR%" (
    python -m venv "%VENV_DIR%"
)

REM Activate the virtual environment
call "%VENV_DIR%\Scripts\activate.bat"

REM Update pip in the virtual environment
python -m pip install --upgrade pip

echo Python development environment initialized.
```

### Conclusion
What you should choose depends on the expertise of your team, and how you plan to manage distribution and maintenance of the bots going forward. If you don't know how to make Python packages, then the packing option may not be best the solution for you. 

There is no single right answer. Any solution you choose will have trade-offs. For now, if are short on time, you should use the solution your team feels most familiar with. Make note of the short comings as you notice them. Depending on the expected lifespan of the project, you can address these short comings when if and when your team has capacity to do so. 