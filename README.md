# Simiarity_Detector
**A basic Nodejs API developed on Express for calculating similarity percentage/plagiarism percentage between original and reference code.**

This is a simple plagiarism detection tool for python code, the basic idea is to normalize python AST representation and use difflib to get the modification from referenced code to candidate code. The plagiarism defined in pycode_similar is how many referenced code is plagiarized by candidate code, which means swap referenced code and candidate code will get different result.

- Clone the repo on to your system.
- Add all the dependencies.

After adding all the dependencies run - 

```
nodemon index.js

```
Now make **POST** request using POSTMAN or some other service to make a request to - **http://127.0.0.1:3000/upload**
and in the body of the request upload your two python files with the argument name - **files**

**NOTE**
- **Important** Use only modular python codes i.e code must be written within functions.
- use **.txt** version of the files, don't upload .py files.
- make sure the files are compiled correctly, should not have syntactical errors.

