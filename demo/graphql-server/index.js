const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const { makeExecutableSchema } = require('graphql-tools')
const _ = require('lodash')
const people = require('./data/people.json')
const homeworlds = require('./data/homeworlds.json')

// The GraphQL schema in string form
const typeDefs = `
type Query {
    hello: String,
    people: [Person],
    person(id: Int): Person,
    homeworlds: [HomeWorld],
    homeworld(id: Int): HomeWorld
}

type Person {
    id: ID!,
    name: String!,
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: String,
    homeworld: HomeWorld
}
type HomeWorld {
    id: ID!,
    name: String!,
    rotation_period: Int,
    orbital_period: Int,
    diameter: Int,
    climate: String,
    gravity: String,
    terrain: String,
    surface_water: Int,
    population: Int,
    residents: [String],
    films: [String],
    created: String,
    edited: String,
    url: String
}
`

// The resolvers
const resolvers = {
    Query: {
        hello: (root, args, context) => "Hello world!",
        people: () => people,
        person: (root, args) => _.find(people, args),
        homeworlds: () => homeworlds,
        homeworld: (root, args) => _.find(homeworlds, args)
    },
    Person: {
        homeworld: (person) => _.find(homeworlds, { id: person.homeworld })
    }
}

// Put together a schema
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

// Initialize the app
const app = express()

// Setup REST endpoints
const router = express.Router()
const restfulRoutes = require('./restful-routes')
restfulRoutes.init(router)

app.use('/api', router)

// The GraphQL endpoint
app.use('/graphql', cors(), bodyParser.json(), graphqlExpress({ schema }))

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

// Start the server
app.listen(3000, () => {
    console.log('Go to http://localhost:3000/graphiql to run queries!')
})
