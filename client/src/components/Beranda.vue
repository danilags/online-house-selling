<template lang="html">
  <div class="">

    <div class="image-slide">
      <el-row>
        <el-col :span="24">
          <img class="banner" src="https://s-media-cache-ak0.pinimg.com/originals/04/45/34/0445346acdd0a2a35b037dbca1136866.jpg" alt="">
        </el-col>
      </el-row>
    </div>
    <form-house></form-house>
  </div>
</template>

<script>
import FormHouse from './FormHouse'

export default {
  components : {
    FormHouse
  }
}
</script>

<style lang="css">
img.banner {
    width: 100%;
}
</style>
