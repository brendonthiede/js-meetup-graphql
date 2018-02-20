<template>
  <div class="bio">
    <h3>{{ title }}</h3>
    <div class="description">
      {{ description }}
    </div>
    <hr/>
  </div>
</template>

<script>
export default {
  name: 'Bio',
  props: ['person'],
  computed: {
    title: function () {
      return this.person.name
    },
    description: function () {
      const displayGender = this.person.gender === 'n/a' ? '' : this.person.gender.charAt(0).toUpperCase() + this.person.gender.slice(1)
      const creationType = this.person.species.name === 'Droid' ? 'created' : 'born'
      return `${displayGender} ${this.person.species.name} ${creationType} in ${this.person.birth_year} on ${this.person.homeworld.name}`
    }
  }
}
</script>
