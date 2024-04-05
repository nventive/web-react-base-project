# How to use

Pre-requisites:

- Node ^18.0.0 || >=20.0.0
- Make sure yarn is installed globally

Clone this projet to your machine. Navigate to the root folder of the project and run the following commands:

Run `yarn install` to download needed packages

## How to run npx package locally

### With NPN (easier)

```
npm i -g
npx create-nventive-app <project-name>
```

### With Yarn

```
yarn
yarn build
yarn global add file:$PWD # equivalent to npm install -g
```

Now, navigate to where you want your new project to be created and run:

```
create-nventive-app <project-name>
```

This will do the following:

- Use vite.js to create a project using the react-ts template
- Install all dependencies for the newly created project
- Add default libraries used by nventive (MUI, react router, i18next, etc.) to the project's dependencies
- Update the project's code to setup these base libraries

---

## Making changes

Everytime you make a change and want to test it out, you need to run `yarn build`

# Open Source Project Template

This repository contains a template to seed a repository for an Open Source
project.

## How to use this template

1. Check out this repository
2. Delete the `.git` folder
3. Git init this repository and start working on your project!
4. Prior to submitting your request for publication, make sure to review the
   [Open Source guidelines for publications](https://nventive.visualstudio.com/Internal/_wiki/wikis/Internal_wiki?wikiVersion=GBwikiMaster&pagePath=%2FOpen%20Source%2FPublishing&pageId=7120).

## Features (to keep as-is, configure or remove)

- [Mergify](https://mergify.io/) is configured. You can edit or remove [.mergify.yml](/.mergify.yml).

The following is the template for the final README.md file:

---

# Project Title

{Project tag line}

{Small description of the purpose of the project}

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)

## Getting Started

{Instructions to quickly get started using the project: pre-requisites, packages
to install, sample code, etc.}

## Features

{More details/listing of features of the project}

## Breaking Changes

Please consult [BREAKING_CHANGES.md](BREAKING_CHANGES.md) for more information about version
history and compatibility.

## License

This project is licensed under the Apache 2.0 license - see the
[LICENSE](LICENSE) file for details.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on the process for
contributing to this project.

Be mindful of our [Code of Conduct](CODE_OF_CONDUCT.md).
