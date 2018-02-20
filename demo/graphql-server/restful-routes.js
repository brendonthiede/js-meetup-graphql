const people = require('./data/people.json')
const species = require('./data/species.json')
const homeworld = require('./data/homeworlds.json')
const peopleBasics = require('./data/peopleBasics.json')
const peopleDetails = require('./data/peopleDetails.json')
const _ = require('lodash')

module.exports = {
    "init": function (router) {
        router.get('/', function (req, res) {
            res.json({
                fatJson: '/api/people',
                thinJson1: '/api/peopleBasics',
                thinJson2: '/api/peopleDetails'
            });
        });

        router.get('/people', function (req, res) {
            res.json(people);
        });

        router.get('/people/:id', function (req, res) {
            res.json(_.find(people, { id: parseInt(req.params.id) }))
        });

        router.get('/species/:id', function (req, res) {
            res.json(_.find(species, { id: parseInt(req.params.id) }))
        });

        router.get('/homeworld/:id', function (req, res) {
            res.json(_.find(homeworld, { id: parseInt(req.params.id) }))
        });

        router.get('/peopleBasics', function (req, res) {
            res.json(peopleBasics);
        });

        router.get('/peopleBasics/:id', function (req, res) {
            res.json(_.find(peopleBasics, { id: parseInt(req.params.id) }))
        });

        router.get('/peopleDetails', function (req, res) {
            res.json(peopleDetails);
        });

        router.get('/peopleDetails/:id', function (req, res) {
            res.json(_.find(peopleDetails, { id: parseInt(req.params.id) }))
        });
    }
}

