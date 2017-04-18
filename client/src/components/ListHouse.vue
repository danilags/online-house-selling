<template lang="html">
  <div class="list-home">
    <h3>{{ msg }}</h3>
    <ul class="list" v-for="house in houses">
      <li>Name : {{ house.title }}</li>
      <li>Description : {{ house.description }}</li>
      <li>Price : {{ house.price }}</li>
      <li>Owner : {{ house.owner }}</li>
      <li>
        <div class="image">
          <img :src="house.image" alt="">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      msg: 'List Rumah',
      houses: []
    }
  },
  methods: {
    getHouse() {
      let self = this
      axios.get('http://localhost:3000/house')
           .then(function(res) {
             res.data.forEach(function(data) {
               self.houses.push(data)
             })
           }).catch(function(err) {
             console.log(err);
           })
           console.log(self.houses);

    }
  },
  mounted() {
    this.getHouse()
  }
}
</script>

<style lang="css">

.list-home ul {
    list-style: none;
    float: left;
    text-align: left;
}

.image img {
    width: 300px;
    height: auto;
}
</style>
