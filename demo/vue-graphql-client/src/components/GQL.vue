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
            name
          }
          birth_year
          homeworld {
            name
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
