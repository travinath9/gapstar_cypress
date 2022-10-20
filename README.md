Harver QA Exercise
========================

This exercise assesses API testing skills.

## Prequisites

1.Git client installed. To verify if git client is installed properly, open Command Prompt on Windows, or Terminal on Mac, then execute this command git --version

2.NodeJS 8+ installed. To verify if nodejs is installed properly, open Command Prompt on Windows, or Terminal on Mac, then execute this command node --version

## Setup

1.Download sample source code in this repo under cypress-sample-master.zip package and extract them to

2.Open Terminal (for Mac or Linux), or Command Prompt if you are on Windows
Navigate to source code folder

3.Run this command to install Cypress:

    'npm install'

## Run Cypress test 

This step is to verify you can run Cypress test using VS Code.

1.Open the Visual Studio Code and open the unzipped folder.
2.Open the VS Code command terminal for the project folder location
3.Run this command to execute Cypress test dependent on your Operting System

    'Windows: node_modules\.bin\cypress run --browser chrome'

(In additionally if you want to open cypress window IDE, Run this command in terminal)

    'npx cypress open'

4. You should see Cypress is launched and all the tests are executed on Chrome browser. The execution will take some times as Cypress is executing all the specs in this sample so if you don't want to wait for the execution to be finished, simply press Ctrl + C to terminate the execution.