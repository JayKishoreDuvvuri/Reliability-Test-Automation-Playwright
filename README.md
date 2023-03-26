### Reliability Automation Testing with Playwright

An example project demonstrating Reliability test automation of playwright tests using page object design pattern 
framework (UI) and Intercept/Mock


#### Test Cases

```bash
#### Test Case 1: TC_01_reliability_mock.test.js
/* Scenario 1 (Intercept/Mock): 
Intercept the Request with api endpoint and mock the response 

Scenario Description: 
Intercept the request and modify/mock the response with a user defined error

Test Steps:
1.Intercept The request
2.Modify the 'text' with user defined error message
3.Navigate to the website and click on Open App tab
4.User is on My Facts page and checks the mocked response on the UI
5.User validates the error message on the UI
*/

Application Under Test
We are using https://cat-fact.herokuapp.com/ as the Application Under Test. 

- URL: https://cat-fact.herokuapp.com/
- OS : macOS 
- IDE : Visual Studio Code
```
 

 ```bash
#### Test Case 2: TC_02_reliability_mock.test.js
/* Scenario 2 (Intercept/Mock): 
Intercept the Request with api endpoint and mock the response 

Scenario Description: 
Intercept the request and modify/mock the response with a user defined error

Test Steps:
1.Intercept The request
2.Modify the Book 'Title', 'Author', 'Price' and 'Preview Rating' with user defined error message
3.Navigate to the website
4.User is on Books - crime category page and checks the mocked response on the UI
5.User validates the modified mocked message on the UI
*/

Application Under Test
We are using https://danube-web.shop/category?string=crime as the Application Under Test. 

- URL: https://danube-web.shop/category?string=crime
- OS : macOS 
- IDE : Visual Studio Code
```

 ```bash
#### Test Case 3: TC_03_reliability_ui.test.js
/* Scenario 3 (UI): 
Login to the app and capture the error message for the Reliability test

Scenario Description: 
Capture Error message for Reliability Test

Test Steps:
1.User navigates to Home Page
2.User verifies the title and url
3.User clicks on the Let Me Hack Button
4.User fills the form and leaves the Message descrption bo empty and clicks on Submit Button
5.User Validates the Error message as a part of the Reliability test.
*/

Application Under Test
We are using https://automationintesting.online/ as the Application Under Test. 

- URL: https://automationintesting.online/
- OS : macOS 
- IDE : Visual Studio Code
```

 ```bash
#### Test Case 4: TC_04_reliability_ui.test.js
/* Scenario 3 (UI): 
Login to the app and capture the error message for the Reliability test

Scenario Description: 
Capture Error message for Reliability Test

Test Steps:
1.User is on the Login Page
2.Enter credentials and click login button
3.User is on the Home page
4. User verifies the title and url
5.User clicks the Request Loan option from the side nav bar menu
6.User clicks on the Apply Now Button
7.User Validates the Error message as a part of the Reliability test.
*/

Application Under Test
We are using https://parabank.parasoft.com/parabank/index.htm as the Application Under Test. 

- URL: https://parabank.parasoft.com/parabank/index.htm
- OS : macOS 
- IDE : Visual Studio Code
```

#### Installation

Install the dependencies and devDependencies to run the test.

- Clone (OR) Download this repo as zip folder on to your local machine
- Navigate to project's directory on terminal and run the following commands:

Clone the repository

```bash
git clone https://github.com/JayKishoreDuvvuri/Reliability-Test-Automation-Playwright.git
```

Install dependencies

```bash
npm install
npx playwright install
```

#### Run application

Run tests in Parallel chrome

```bash
npm run test - Runs all Four test cases in Parallel on chrome browser
```

#### Playwright Test Report 

```bash
Html-test-report :
npm run test:playwright-report
```

#### Allure Test Report

```bash
Allure-test-report :
1.	npm run allure:clean
2.	npm run test:allure-report
3.	npm run allure:report
```

#### GitLab Repo
```bash
https://gitlab.com/jaykishore96/Reliability-Automation-Testing-Playwright
```

#### GitLab Pipeline
```bash
https://gitlab.com/jaykishore96/Reliability-Automation-Testing-Playwright/-/pipelines
https://gitlab.com/jaykishore96/Reliability-Automation-Testing-Playwright/-/jobs/4003044362
```