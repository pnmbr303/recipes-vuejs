<template>

  <h1>Chicken Page</h1>


  <div id="app">
      <!-- <li v-for="item in response" v-bind:key="item.title">
        <div >{{ item.title }}</div>
      </li> -->

      <!-- marche partiellement -->
      <!-- <ul v-for="item in response" v-bind:key="item">
        <div >{{ item.recipe.label }}</div>
      </ul> -->

      <div class="grid-food" >

        <figure v-for="(item) in response" v-bind:key="item">
          <div >{{ item.recipe.label }}</div>
          <img :src="item.recipe.image">
          <p><a :href="item.recipe.url">More Info</a></p>
        </figure>

      </div>


  </div>
  
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {

  },
  data() {
      return {
          response: null
      }
  },
  mounted: function() {

      // https://api.edamam.com/search?app_id=c04187d1&app_key=99b477f61b795f07d663c375f9d93b00&q=chicken

      // fetch('https://jsonplaceholder.typicode.com/posts')
      //     .then(res => res.json())
      //     .then(data => this.response = data) // pass the data to the response variable
      //     .then(console.log("test"))
      //     .then(console.log("other test"))
      //     .then(data => console.log(data)) // print to the console
      // .catch(function (err) {
      //     console.log('ERROR CATCHED - ' + err);
      // });

      const APP_ID = "c04187d1";
      const API_KEY = "99b477f61b795f07d663c375f9d93b00";

      // marche partiellement
      // fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=chicken`)
      //     .then(res => res.json())
      //     .then(data => this.response = data.hits) // pass the data to the response variable
      //     .then(console.log("test"))
      //     .then(console.log("other test"))
      //     .then(data => console.log(data.hits)) // print to the console
      // .catch(function (err) {
      //     console.log('ERROR CATCHED - ' + err);
      // });

      fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=chicken`)
          .then(res => res.json())
          .then(data => this.response = data.hits) // pass the data to the response variable
          .then(console.log("test"))
          .then(console.log("other test"))
          .then(data => console.log(data)) // print to the console
      .catch(function (err) {
          console.log('ERROR CATCHED - ' + err);
      });

  }
}
</script>

<style lang="scss">
 
  .grid-food {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

</style>