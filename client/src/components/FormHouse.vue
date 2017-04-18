<template lang="html">
  <div class="form">
    <el-row>
      <el-col :span="24">
        <div class="form">
          <div class="w3-container">
            <h2>Add your Home</h2>
            <el-button :plain="true" type="success" onclick="document.getElementById('id01').style.display='block'">Add</el-button>
            <div id="id01" class="w3-modal">
              <div class="w3-modal-content">
                <div class="w3-container">
                  <span onclick="document.getElementById('id01').style.display='none'">Cancel</span>
                    <el-row>
                      <el-col :span="20">
                        <el-form ref="ruleForm2" label-width="200px" class="demo-ruleForm">
                          <el-form-item label="Title" prop="pass">
                            <el-input type="text"auto-complete="off" v-model="house_data.title"></el-input>
                          </el-form-item>
                          <el-form-item label="Description" prop="checkPass">
                            <el-input type="text" auto-complete="off" v-model="house_data.description"></el-input>
                          </el-form-item>
                          <el-form-item label="Price" prop="age">
                            <el-input type="text" v-model="house_data.price"></el-input>
                          </el-form-item>
                          <el-form-item label="Owner" prop="age">
                            <el-input type="text" v-model="house_data.owner"></el-input>
                          </el-form-item>
                          <el-form-item label="Image" prop="age">
                            <el-input type="text" v-model="house_data.image"></el-input>
                          </el-form-item>
                          <el-form-item label="Address" prop="age">
                            <el-input type="text" v-model="house_data.address"></el-input>
                          </el-form-item>
                          <el-form-item label="Maps" prop="age">
                            <iframe width="500" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q='-6.259864','106.781456'&hl=es;z=14&amp;output=embed"></iframe><br /><small><a href="https://maps.google.com/maps?q='+data.lat+','+data.lon+'&hl=es;z=14&amp;output=embed" style="color:#0000FF;text-align:left" target="_blank">See map bigger</a></small>
                          </el-form-item>
                          <el-form-item>
                            <el-button type="primary" @click="createHouse()">Submit</el-button>
                            <el-button>Reset</el-button>
                          </el-form-item>
                        </el-form>
                      </el-col>
                    </el-row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      house_data: {
        title : null,
        description: null,
        price: null,
        owner: null,
        image: null,
        address: null
      }
    }
  },
  methods: {
    createHouse() {
      axios.post('http://localhost:3000/house', {
        title: this.house_data.title,
        description: this.house_data.description,
        price: this.house_data.price,
        owner: this.house_data.owner,
        image: this.house_data.image,
        address: this.house_data.address
      }).then(function(res) {
          window.location.href = 'http://localhost:8080/#/list';
      }).catch(function(err) {
        console.log(err);
      })
    }
  }
}
</script>

<style lang="css">
</style>
