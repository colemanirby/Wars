# WarsApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



Heroes project:

	Pages:
		Landing Page
		Account Registration (no email or password required)
		New Game Page
			- Role Selection
			- Hero Selection
			- Aspect Selection (Ability?)
			- Focus Roll
			- Attribute Allotment
			- Name and Background
			- Background
		Current Game Page
		(Future) Profile Page
		

The webpage that will be built for this game will be focused on the MVP (Minimum Viable Product). 
This will consist of a Landing Page, Account Registration with anonymous information, New Game Page (which will be multiple pages in one), Curent Game Page (where the game will be played).
If things are going well then the Account Registration will require users to include a password and the Profile page can be enhanced to include email registration(optional), password reset, and 2FA.

Technologies used:
Node.js
Angular 9
DynamoDB
Amazon S3
Amazon Dynamo DB

Tasks:

Landing Page
Account Registration
New Game
-> Current Game Page
    - Dice Roller (current task)
    - Character Info
    - Situation Info
    For Narrator:
    - NPC Creation
    - Scenario Updater
Profile Page (User Info, Password Reset, 2FA)
