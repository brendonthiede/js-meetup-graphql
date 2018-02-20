<template>
  <div>
    <div v-if="$apollo.loading">Loading...</div>
    <div v-else>
      <div v-for="person in people" v-bind:key="person.id">
        <h3>{{ person.name }}</h3>
        <span v-if="person.gender !== 'n/a'">
        {{ person.gender }}
        </span>{{ person.species.speciesName }}
        born in {{ person.birth_year }} on {{ person.homeworld.homeworldName }}
        <hr/>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  apollo: {
    // Simple query that will update the 'hello' vue property
    people: gql`{
  people {
    name
    gender
    species {
      speciesName: name
    }
    birth_year
    homeworld {
      homeworldName: name
    }
  }
}`
  },
  data () {
    return {
      // Initialize your apollo data
      people: ''
    }
  }
}
</script>
