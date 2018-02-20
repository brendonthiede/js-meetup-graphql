const people = require('./data/people.json')
const peopleBasics = require('./data/peopleBasics.json')
const peopleDetails = require('./data/peopleDetails.json')

module.exports = {
    "init": function (router) {
        router.get('/', function(req, res) {
            res.json({
                fatJson: '/api/people',
                thinJson1: '/api/peopleBasics',
                thinJson2: '/api/peopleDetails'
            });   
        });

        router.get('/people', function(req, res) {
            res.json(people);
        });

        router.get('/people/:id', function(req, res) {
            const id = parseInt(req.params.id);

            if (isNaN(id)) {
                res.json(people.filter(person => (new RegExp(req.params.id, 'i')).test(person.name)));
            } else {
                res.json(people.filter(person => person.id === id));
            }
        });

        router.get('/peopleBasics', function(req, res) {
            res.json(peopleBasics);
        });

        router.get('/peopleBasics/:id', function(req, res) {
            const id = parseInt(req.params.id);

            if (isNaN(id)) {
                res.json(peopleBasics.filter(person => (new RegExp(req.params.id, 'i')).test(person.name)));
            } else {
                res.json(peopleBasics.filter(person => person.id === id));
            }
        });

        router.get('/peopleDetails', function(req, res) {
            res.json(peopleDetails);
        });

        router.get('/peopleDetails/:id', function(req, res) {
            res.json(peopleDetails.filter(person => person.id === parseInt(req.params.id)));
        });
    }
}

