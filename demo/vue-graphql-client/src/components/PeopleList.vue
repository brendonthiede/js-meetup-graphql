<template>
  <div>
    <div v-for="person in people" v-bind:key="person.id">
      <bio :person="person"></bio>
    </div>
  </div>
</template>

<script>
import Bio from '@/components/Bio'

export default {
  name: 'PeopleList',
  props: ['people'],
  components: {
    'bio': Bio
  }
}
</script>
