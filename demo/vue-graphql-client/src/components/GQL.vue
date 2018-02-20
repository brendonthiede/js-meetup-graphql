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
