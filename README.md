
# Flight Booking Framework using Cypress

## Motivation and Purpose
I developed this Cypress framework as a personal learning project. My primary motivation was to implement the Page Object Model (POM) design pattern, which promotes maintainability and reusability of test code. By building this framework, I aimed to consolidate my understanding of essential Cypress concepts and create a practical example for beginners.

## Key Features
### 1. Page Object Model (POM):
The framework follows the POM architecture, organizing test code into reusable page objects.
Each page or component of the flight booking web app has a dedicated class, making it easier to manage and maintain.

### 2. Mochawesome Reports:
Test execution results are captured using Mochawesome, generating detailed and visually appealing HTML reports. After test execution a folder 'reports' will be created automatically which will hold report.

### 3. Video Capture:
The framework records video during test runs, aiding in debugging and documentation.
Video evidence helps identify issues and provides context for failed tests. After test execution a folder 'videos' will be created automatically which will hold video of test execution.

## Target Audience
This project is ideal for beginners who want to learn how to structure a Cypress project using the POM pattern. Whether you’re new to Cypress or looking to reinforce your skills, this framework provides practical examples and best practices.

## Getting Started
### 1. Prerequisites:
Ensure you have Node.js and Cypress installed on your system.
Clone this repository to your local machine.
### 2. Installation:
Run npm install to install project dependencies.
Customize the configuration files (e.g., cypress.json, tsconfig.json) as needed.
### 3. Usage:
Write your test scenarios using the POM classes.
Execute tests using
```bash
npx cypress open 
```
or 
```bash
npx cypress run
```
Additionally you could use my custom scripts to execute the tests. Check out '[package.json](https://github.com/Shikhar-Joshi/flight-booking-testing-framework/blob/main/package.json)' file for more info.
An example to execute test using my custom scripts
```bash
npm run cy:edgeHead "cypress/e2e/PageObjectTest.cy.js"
```

## Contributions
Contributions are welcome! If you’d like to enhance this framework or add new features, feel free to submit pull requests or report issues.
