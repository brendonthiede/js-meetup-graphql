<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="link in links" v-bind:key="link.route">
        <router-link v-bind:to="link.route">{{ link.description }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloMeetup',
  data () {
    return {
      msg: 'This way to the demo:',
      links: [
        {
          'route': '/gql',
          'description': 'GraphQL based implementation using Apollo'
        },
        {
          'route': '/rest',
          'description': 'REST based implementation using Axios'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  font-size: larger;
}
a {
  color: #42b983;
}
</style>
