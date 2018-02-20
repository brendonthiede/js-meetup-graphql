<template>
  <div>
    <people-list :people="people" />
  </div>
</template>

<script>
import axios from 'axios'
import PeopleList from '@/components/PeopleList'

export default {
  data () {
    return {
      people: {}
    }
  },
  created () {
    axios.get('http://localhost:3000/api/people')
      .then(response => {
        this.people = response.data
        this.people.forEach(person => {
          axios.get('http://localhost:3000/api/species/' + person.species)
            .then(response => {
              person.species = response.data
            })
          axios.get('http://localhost:3000/api/homeworld/' + person.homeworld)
            .then(response => {
              person.homeworld = response.data
            })
        })
      })
  },
  components: {
    'people-list': PeopleList
  }
}
</script>
