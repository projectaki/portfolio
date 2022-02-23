# Project initiliazation with must-have tools 🪛

In this example I am going to be talking about initializing a coding project or framework, with some helpful tools.

## Basic initializing

When starting a new project, for a very long time, my initiation flow looked something like this:

1. Create project directory
1. Git init
1. Add to Git remote
1. Start writing application logic

## Useful considerations when initializing a new project

I will just give a simple list of a few elements that I like to use in my projects, which is great to set up at initialization.
Of course these can be added in at a later time, but it will definitely be more complex then setting them at initialization.

- Linter
- Formatter
- Pre-commit hooks
- Testing framework/strategies
- CI/CD pipelines

## Linter

A linter is a tool which helps you write better code. It can be configured with recommended as well as custom rules, which will prevent you
from writing bad quality code. A linter will analyze your code and warn you of potential bugs or code smells. In my opinion it is a must for
maintaining a clean code repository. If you are working in a team, then it is even more important, as it can standardize the rules, and enforce
them for each team member.

## Formatter

A formatter is a tool which will format your code according to a set of rules. This ties in closely with a linter. The advantages of a formatter
are identical to the advantages of using a linter.

## Pre-commit hooks

A pre-commit hook is a function which will run before a commit to your repository is authorized. The pre-commit function is a great place to run your
code validations. This can be running your linter/formatter or even unit tests. If any of the validations return with an error, the commit will be aborted.
Pre-commit functions can ensure that only good quality code makes it into your repository. Once again this becomes even more crucial when working in a team,
by ensuring that the code is written according to a uniform standard.

## Testing frameworks/strategies

Testing is a crucial element of development. In my experience, when testing is missing from a project, it is because it wasn't properly planned as a part
of the development, and became more and more difficult to implement into the already existing project. We can make it easier to implement testing by
considering it before writing our application logic.

### Testing framework

At initilization we can choose a testing framework or frameworks, and configure it up before we write any application logic. This will make it easier to start
writing tests straight away when we start wiriting the application.

### Testing strategy

Once we have the frameworks set up, we can create a testing strategy. This can be a contract with yourself, or between a team, of how testing ties in with development.
This can be where you decide if you are going to use TDD, or a less strict approach. If you can get this step done before jumping into the project, it will be
routine to include testing as a part of development. Ontop of that, you kind of have to write tests, as you want to follow the contract.

## CI/CD pipelines

Depending of what kind of application you are developing, it can be smart to build a CI/CD pipeline for your project. A CI/CD pipeline is a tool for automating frequent
manual tasks. It is usually declared in a yaml configuration file. It includes a sequence of steps which you want to automate. One common example for a use case is
a test/build/deploy pipeline. You can automate the testing, building and deploying of your project. This can save you or your team many hours which you would spend on
manual tasks.

## Examples for Javascript/TypeScript projects

I will show some code examples for JavaScript/TypeScript frameworks. This could be nodejs backend, or something like Angular, React on the frontend.

### Linter

The following code snippet is an Eslint config file example.

```javascript
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
```

### Formatter

The following example is a prettier config.

```json
{
  "trailingComma": "es5",
  "semi": true,
  "singleQuote": true,
  "endOfLine": "auto",
  "bracketSameLine": true,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "printWidth": 120
}
```

### Pre-commit hook

The following snippet is a pre-commit hook using Husky. The important part is the `npx lint-staged` command. This is a command to run linting on staged files, but it can be a script from the `package.json` file. This can be any user defined script, which will run as a pre-commit event.

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged

```

### CI/CD yaml

The following snippet is a CI/CD pipeline example using a github action. It is for building and deploying my static website to
github pages.

```yaml
name: Build and deploy

on:
  release:
    types:
      - created

  workflow_dispatch:

jobs:
  build:
    name: Build and Deploy
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
      - uses: actions/setup-node@v2
        with:
          node-version: '16'
      - uses: cmgriffing/scully-gh-pages-action@v9
        with:
          access-token: ${{ secrets.ACCESS_TOKEN }}
          deploy-branch: gh-pages
          build-args: --stats-json
          scully-args: --scanRoutes
```

## Conclusion

To ensure developer happiness and project maintainability, it can be a good idea to consider and configure some tools and strategies,
before kicking off development.

Thank you for reading! 😀
