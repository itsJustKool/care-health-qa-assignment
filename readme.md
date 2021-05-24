# Care Health QA Assignment

## Requirement

#### JDK 8+

https://www.oracle.com/java/technologies/javase-downloads.html

#### Nodejs 14

https://nodejs.org/en/

#### Allure (to view the report)

https://docs.qameta.io/allure/#_installing_a_commandline)

#### Appium server

http://appium.io/

#### Xcode

*install from App store*

#### Android SDK

*The easiest way to install Android SDK is installing Android Studio. It will install Android SDK automatically.* https://developer.android.com/studio 

## Installation

1. Clone the repository

2. Install dependencies: Open a terminal and go to the root folder of the repository and run the command:

```bash
yarn install
```

(*) After step #2, the preparation for automation test on web application is done.

3. Apply Path (Environment variables)

Open shell config file
```bash
# if you use bash
vi ~/.bashrc

# or if you use zsh
vi ~/.zshrc
```

Add below lines into the shell config file
```bash
#### Java
# Replace "16" by the version of Java JDK that installed in your machine  
export JAVA_HOME=`/usr/libexec/java_home -v 16`
export PATH=$JAVA_HOME/bin:$PATH

#### Android SDK
# Below is the default path, you can change them according to your installed directory 
export ANDROID_HOME=~/Library/Android/sdk
export PATH=$ANDROID_HOME/tools/bin:$PATH
export PATH=$ANDROID_HOME/emulator:$PATH
export PATH=$ANDROID_HOME/platform-tools:$PATH
```

After you finish adding the lines in shell config file, execute the following command:
```bash
# if you use bash
source ~/.bashrc

# or if you use zsh
source ~/.zshrc
```

4. Create an Android Emulator & an iOS Simulator for testing

- Using Android Studio AVD to create an Emulator:
    * deviceName: android-test
    * API: S
    * model: Google Pixel XL (optional)
    
- Using Xcode to create a Simulator:
    * deviceName: iPhone 12
    * iOS: 14.5
    * model: iPhone 12

(*)Note: if you're using Macbook with M1 chip, there's an issue with Android Emulator and required workaround. The workaround solution is quite complicated so I didn't include it in this readme.
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