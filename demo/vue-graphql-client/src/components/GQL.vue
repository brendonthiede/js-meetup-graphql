<template>
  <div>
    <people-list :people="people" />
  </div>
</template>

<script>
import gql from 'graphql-tag'
import PeopleList from '@/components/PeopleList'

export default {
  apollo: {
    // Simple query that will update the 'hello' vue property
    people: gql`
      {
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
      }
    `
  },
  components: {
    'people-list': PeopleList
  },
  data () {
    return {
      // Initialize your apollo data
      people: ''
    }
  }
}
</script>
