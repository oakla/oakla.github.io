# What is this folder for?
I have been having trouble getting jupyter to export to html. At first I thought this was caused by my poor understanding/setup of pipenv in my project.

I have since realised that the problem might be caused by **nbconvet**, the package that coverts notebooks to html/pdf, has an error in it in the new version.

Downgrading to a previous verions `pip install nbconvert==5.6.1` creates a new problem.
```
ImportError: cannot import name 'contextfilter' from 'jinja2' (C:\Python310\lib\site-packages\jinja2\__init__.py)
```

I have installed the following packages at using pip at what I believe is the 'global' or 'system' level
```
$ pip install jupyter
$ pip install nbconvert==5.6.1
```

Now I will do the following
1. open a jupyter notebook in vscode
   - vscode prompts to select interpreter - chose `c:\python310\python
   - notebook runs
2. export to html from vscode command pallet
   - **Result**: `error 19:49:9.308: Export failed [Error: Importing notebooks requires Jupyter nbconvert to be installed.`
   - This is weird because `pip show` from admin cmd says jupyter and nbconvert are installed at
     - `Location: c:\python310\lib\site-packages`
     - `Location: c:\python310\lib\site-packages`
   - From vscode terminal `pip show` says they're installed at
     - `Location: c:\python310\lib\site-packages`
     - `Location: c:\python310\lib\site-packages`
3. export to html from admin cmd
   - run `$ jupyter nbconvert --to html scratch_nb.ipynb`
   - gives error: `ImportError: cannot import name 'contextfilter' from 'jinja2' (C:\Python310\lib\site-packages\jinja2\__init__.py)`
4. These are two different problems. I am confused!
   1. This must mean that vscode and cmd are using different interpreters
   2. **cmd** `$ where jupyter`
     - `C:\Users\alexa\AppData\Roaming\Python\Python310\Scripts\jupyter.exe`
     - This is different from the result of `$ pip show jupyter`
     - *realization* this is the directory from the **pipenv** installation tutorial
     - **Action**: delete all the python executables from the `roaming/.../Scripts` directory