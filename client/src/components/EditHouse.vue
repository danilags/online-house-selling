<template lang="html">
  <div class="editHouse">
    <el-button @click="dialogVisible = true" type="primary" icon="edit"></el-button>

    <el-dialog title="Tips" v-model="dialogVisible" size="small">
      <h3>Edit House</h3>
      <el-form ref="ruleForm2" label-width="80px" class="demo-ruleForm">

        <el-form-item label="Title" prop="age">
          <el-input type="text" v-model="datahouse.title"></el-input>
        </el-form-item>

        <el-form-item label="Description" prop="age">
          <el-input type="textarea" v-model="datahouse.description"></el-input>
        </el-form-item>

        <el-form-item label="Price" prop="age">
          <el-input type="text" v-model="datahouse.price"></el-input>
        </el-form-item>

        <el-form-item label="Owner" prop="age">
          <el-input type="text" v-model="datahouse.owner"></el-input>
        </el-form-item>

        <el-form-item label="Image" prop="age">
          <el-input type="text" v-model="datahouse.image"></el-input>
        </el-form-item>

        <el-form-item label="Address" prop="age">
          <el-input type="text" v-model="datahouse.address"></el-input>
        </el-form-item>

        <el-form-item label="Longitut" prop="age">
          <el-input type="text" v-model="datahouse.location.long"></el-input>
        </el-form-item>

        <el-form-item label="Latitut" prop="age">
          <el-input type="text" v-model="datahouse.location.lat"></el-input>
        </el-form-item>

      </el-form>
        <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="updateHouse(datahouse)">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['datahouse'],
  data() {
    return {
      dialogVisible : false,
      houses_get : []
    }
  },
  methods: {
    updateHouse(newData) {
      // console.log("hdsidaisdiasd ------", newData);
      axios.put(`http://localhost:3000/house/${newData._id}`, {
        title: newData.title,
        description: newData.description,
        price: newData.price,
        owner: newData.owner,
        image: newData.image,
        address: newData.address,
        long: newData.location.long,
        lat: newData.location.lat
      })
        .then(function(res) {
          console.log("-------- ++++ ",res);
          window.alert('Data updated !')
        }).catch(function(err) {
          console.log(err);
        })
        this.dialogVisible = false
    }
  }
}
</script>

<style lang="css">
.editHouse {
    display: table;
    float: left;
    padding: 0 10px;
}
</style>
