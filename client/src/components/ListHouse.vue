<template lang="html">
  <div class="list-home">
    <h3>{{ msg }}</h3>
    <ul class="list" v-for="house in houses">
      <li>Name : {{ house.title }}</li>
      <li>Description : {{ house.description }}</li>
      <li>Price : {{ house.price }}</li>
      <li>Owner : {{ house.owner }}</li>
      <li>Address : {{ house.address }}</li>
      <li>Location : {{ house.location }}</li>
      <li>
        <div class="image">
          <img :src="house.image" alt="">
        </div>
      </li>
      <li>
        <edit-house :datahouse="house"></edit-house>
        <el-button type="primary" icon="delete" @click="deleteHouse(house)"></el-button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import EditHouse from './EditHouse'

export default {
  components: {
    EditHouse
  },
  data () {
    return {
      msg: 'List Rumah',
      houses: [],
      dataDelete: null
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
          //  console.log(self.houses);

    },
    deleteHouse(data) {
      console.log("-------- + ", data);
      axios.delete(`http://localhost:3000/house/${data._id}`)
           .then(function(res) {
             window.alert('Data success deleted !')
             window.location.reload();
           }).catch(function(err) {
             console.log(err);
           })
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
    width: 50%;
}

.image img {
    width: 300px;
    height: auto;
}
</style>
