# vue-graphql-client

> Demonstration of Apollo GraphQL client with Vue JS

## Project creation

From the `demo` directory:

``` bash
# If you don't already have Vue CLI installed
npm install -g vue-cli
vue init webpack vue-graphql-client
# Had to run the following as Administrator on Windows
cd vue-graphql-client
npm install --save vue-apollo graphql apollo-client apollo-link apollo-link-http apollo-cache-inmemory graphql-tag
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
