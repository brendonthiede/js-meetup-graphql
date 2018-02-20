<template>
  <div>
    <h3>{{ person.name }}</h3>
    <span v-if="person.gender !== 'n/a'">
    {{ person.gender }}
    </span>{{ person.species.speciesName }}
    born in {{ person.birth_year }} on {{ person.homeworld.homeworldName }}
    <hr/>
  </div>
</template>

<script>
export default {
  name: 'Bio',
  props: ['person']
}
</script>
