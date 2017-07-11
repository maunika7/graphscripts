# Using Azure Functions to expand the Microsoft Graph API ecosystem

## Table of contents

* [Introduction](#introduction)
* [Prerequisites](#prerequisites)
* [Register the application](#register-the-application)
* [Build and run the sample](#build-and-run-the-sample)
* [Examples](#code-of-note)
* [Questions and comments](#questions-and-comments)
* [Contributing](#contributing)
* [Additional resources](#additional-resources)

## Introduction
This sample project provides a repository of code snippets that use the Microsoft Graph to perform common tasks, such as sending email, managing groups, and other activities from within an ASP.NET MVC app. 


## Prerequisites

This sample requires the following:  

  * [Visual Studio 2015](https://www.visualstudio.com/en-us/downloads) 
  * Either a [Microsoft account](https://www.outlook.com) or an [Office 365 for business account](https://msdn.microsoft.com/en-us/office/office365/howto/setup-development-environment#bk_Office365Account). An Office 365 administrator account is required to run admin-level operations. You can sign up for [an Office 365 Developer subscription](https://msdn.microsoft.com/en-us/office/office365/howto/setup-development-environment#bk_Office365Account) that includes the resources that you need to start building apps.


#### 1. Setup
* Clone this repo

![git clone link](screenshots/clone-link.PNG)
* Install Node.js (if you haven't)
* ```npm install``` to install project dependencies after moving into the project directory
* ``` npm run build ``` to start TypeScript compiler and watch for changes (leave this open in another console)

#### 2. App registration

* Register your application at https://apps.dev.microsoft.com/
* Add `http://localhost:3000` as a redirect URL under Platforms -> web
* Add Application permissions (Directory.ReadWrite.All, Calendars.Read, User.ReadWrite.All, Mail.Send)
* Update `secrets.ts` with your application id
* Update `secrets.ts` with an app secret (click 'generate new password')
* Update `secrets.ts` with your tenant domain like `MOD507192.onmicrosoft.com`

#### 3. Allow your app running as a service to access Graph

* Visit `https://login.microsoftonline.com/common/adminconsent?client_id=YOUR_APP_ID&state=12345&redirect_uri=http://localhost:3000` and grant the app access. Replace `YOUR_APP_ID`. After granting access you will be redirected to `localhost:3000` and nothing is running there, which is expected.

#### 4. Deploy to Azure Functions

* Create an Azure function app at https://portal.azure.com and create a new 'Function App'
![create function app by searching](screenshots/azure-function-search.png)
![create function app](screenshots/create-function-app.png)
* You may need to setup credentials under `Platform Features / Code Deployment / Deployment Credentials`
* Configure your app to allow Git deployments
   * Under `Platform features` select `Deployment Options` and choose `Local Git Repository` as the source.
* Add your Function as a git remote
   * Under `General Settings` -> `Properties`, select your `Git Url`
   * `git remote add azure YOUR_GIT_URL`
* Push a deployment
  * (Make sure TypeScript recompiled after you updated your secrets file with npm run build. You should be seeing messages like 'Compilation complete' when you save the .ts files.)
  * `git add .`, `git commit -m 'Initial commit'`, `git push azure master` 

#### 5. Verify deployment and run the function!
* Since this starter project uses an HTTP trigger function, you can get a URL to execute your code. Click `Get function URL`, and open in a new tab. You can find this link by expanding the Functions panel in the left sidebar and clicking on our function.

![get function url button](screenshots/get-function-url.png)

* Check the logs and your function should be running!


## Questions and comments

We'd love to get your feedback about this sample. You can send us your questions and suggestions in the [Issues](https://github.com/microsoftgraph/aspnet-snippets-sample/issues) section of this repository.

Your feedback is important to us. Connect with us on [Stack Overflow](http://stackoverflow.com/questions/tagged/microsoftgraph). Tag your questions with [MicrosoftGraph].

## Contributing

If you'd like to contribute to this sample, see [CONTRIBUTING.md](CONTRIBUTING.md).

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments. 

## Additional resources

- [Other Microsoft Graph Snippets samples](https://github.com/MicrosoftGraph?utf8=%E2%9C%93&query=snippets)
- [Microsoft Graph overview](http://graph.microsoft.io)
- [Office developer code samples](http://dev.office.com/code-samples)
- [Office dev center](http://dev.office.com/)

## Copyright
Copyright (c) 2016 Microsoft. All rights reserved.
