![museum-about](https://github.com/user-attachments/assets/8720d8f9-0519-42ff-81d0-3e01ab5efc82)

## Contents

- [About the project](#About-the-project)
- [Project features](#Project-features)
- [Graphic representation example](#Graphic-representation-example)
- [Technologies used](#Technologies-used)

## About the project

_Prod: https://museum-of-art.vladislav-malchevskiy.ru/_

_Read the project description in other languages: [en](README.md), [ru](README.ru.md)_

An application for displaying a catalog of paintings. The homepage is the informational part of the app where you can search and sort the received data. The homepage also features pagination for three paintings per page. Clicking on a selected painting takes you to a detailed information page to explore the artwork further. You can add favorite paintings to quickly access and view them later.

## Project features

- Fetching data about paintings from an external API;
- Displaying a list of paintings with pagination;
- Implementing a search form with input validation;
- Using routing to separate different pages of the application;
- Implementing debounce for the search form;
- Ability to add paintings to a favorites list with saving them in LocalStorage;
- Option to view more detailed information about a painting;
- Interface for viewing the favorites list and removing paintings from it;
- Implementing sorting functionality for paintings by different criteria.

### The project also has the following features

- A Loader is implemented when products are loading;
- The design is optimized for mobile devices (up to 390px);
- A burger-menu is implemented;
- TypeScript is used for typing to reduce the number of potential bugs;
- Error handling is done through the **_Error Boundaries_** pattern;
- Aliases are used for importing files;
- Some functionality is covered by tests;
- The file structure of the React application is organized. [Link to the structure](https://github.com/mkrivel/structure);
- Configurations for eslint, prettier, [husky](https://dev.to/ivadyhabimana/setup-eslint-prettier-and-husky-in-a-node-project-a-step-by-step-guide-946) are set up;
- [GitFlow](https://www.atlassian.com/ru/git/tutorials/comparing-workflows/gitflow-workflow) is used;
- [Commit Convention](https://www.conventionalcommits.org/en/v1.0.0/) is used;
- Data is fetched from the [ART API](https://api.artic.edu/docs/#introduction)

## Graphic representation example

Link to the mockup: [Mockup](https://www.figma.com/file/XSLT4bMToK5tOdbXBBuqhP/Trainee-task-1?type=design&node-id=0-1&mode=design&t=tthepIdFQRlAXlVS-0).

## Technologies used

- **_node.js_** - A software platform based on the V8 engine (translating JavaScript into machine code);
- **_eslint_** - [Linter](https://eslint.org/docs/user-guide/configuring) for JavaScript code;
- **_prettier_** - [Tool](https://prettier.io/docs/en/install.html) for automatic code formatting;
- **_yarn_** - Package manager;
- **_react_** - [JavaScript library](https://reactjs.org/docs/getting-started.html) for building user interfaces;
- **_typescript_** - A strongly typed language for reducing potential bugs;
- **_styled-components_** - A [styling system](https://www.styled-components.com/docs) for React components;
- **_jest_** - A library for unit testing;
- **_react-router-dom_** - A library for navigation between different parts of the web application;
- **_yup_** - A library for form validation;
- **_formik_** - A library for handling form input elements.
