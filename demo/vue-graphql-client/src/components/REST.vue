<template>
  <div>
    <div v-if="$apollo.loading">Loading...</div>
    <div v-else>
      <div v-for="person in people" v-bind:key="person.id">
        <h3>{{ person.name }}</h3>
        <span v-if="person.gender !== 'n/a'">
        {{ person.gender }}
        </span>{{ person.species.name }}
        born in {{ person.birth_year }} on {{ person.homeworld.name }}
        <hr/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      people: {}
    }
  },
  created () {
    /**
    fetch('http://localhost:3000/api/people')
      .then((resp) => resp.json())
      .then(function (data) {
        this.people = data
        this.people.forEach(person => {
          fetch('http://localhost:3000/api/species/' + person.species)
            .then((resp) => resp.json())
            .then(function (data) {
              this.person.species = data.name
            })
        })
      }.bind(this))
    */
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
  }
}
</script>
