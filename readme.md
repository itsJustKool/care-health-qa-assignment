# Care Health QA Assignment

## Requirement

#### JDK 8+

https://www.oracle.com/java/technologies/javase-downloads.html

#### Nodejs 14

https://nodejs.org/en/

#### Allure (to view the report)

https://docs.qameta.io/allure/#_installing_a_commandline)

## Installation

1. Clone the repository

2. Install dependencies: Open a terminal and go to the root folder of the repository and run the command:

```bash
yarn install
```

## Usage

- Open a terminal and go to the root folder of the repository

- To run the web test script:
```bash
yarn run test-web
```

## Report

After the test script finish, we can view the report by run below command at the root folder of the repository

```bash
allure open report/allure-report
```