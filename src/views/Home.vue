<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>

  <div id="app">
      <li v-for="item in response" v-bind:key="item.title">
        <div >{{ item.title }}</div>
      </li>
  </div>
  
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
      return {
          response: null
      }
  },
  mounted: function() {

      fetch('https://jsonplaceholder.typicode.com/posts')
          .then(res => res.json())
          .then(data => this.response = data) // pass the data to the response variable
          .then(console.log("test"))
          .then(console.log("other test"))
          .then(data => console.log(data)) // print to the console
      .catch(function (err) {
          console.log('ERROR CATCHED - ' + err);
      });
  }
}
</script>
