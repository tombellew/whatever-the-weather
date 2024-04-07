# Whatever the Weather

## Overview
- An app to satisfy the technical requirements of the IT Dev Assessment 2024 document.
- A user can visit the webpage, enter a location, and see the upcoming weather forecast for the next 5 days.

## Technical approach
- Express server to host page.
- Webpack / babel used to compile client side code.
- React (with TypeScript) used as a frontend framework.
- SCSS in BEM structure for styles.
- Cypress for e2e testing.

## Prerequisites 
- node (v. 16.18.0)
- npm (v. 8.19.2)

## Getting started
- Clone this repo.
- Open a terminal in the directory created.
- `npm install`
- `npm run server` to run the server
- `npm run dev` in a separate terminal to compile the client side assets
- Open webpage at [http://localhost:1337](http://localhost:1337)

## Testing
- `npm run test` This will open Cypress and follow prompts for end to end tests.

### Code tour
- The server code is soley in the file [/src/server/server.ts](/src/server/server.ts)
- The entry point for the client side JavaScript code is in [/src/client/index.ts](/src/client/js/index.tsx)
- The entry point for the styling is in [/src/client/styles.scss](/src/client/styles/styles.scss)
- Tests are located in and alongside this file [/cypress/e2e/app.cy.ts](/cypress/e2e/app.cy.ts)
