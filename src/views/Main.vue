<template>
  <div id="container">
      <div class="enter" @click="enter"></div>
  </div>
</template>

<script>

export default {
data(){
    return {
    }
  },
  methods: {
    enter(){
      this.$router.push('/start')
    }
  },
  mounted(){
    new Image().src = require('../assets/01-05页/02/2-1.png')
  }
}
</script>

<style scoped>
#container{
  width: 24.36rem;
  height: 11.25rem;
    /* background-color: blueviolet; */
    /* text-align: center; */
    /* display: table-cell; */
/* vertical-align: middle; */
background-image: url(../assets/01-05页/01shouye/1-1.png);
background-size:100% 100%;
background-repeat:no-repeat;
}
.enter{
  width: 6.5rem;
  height: 2rem;
  border: 1px solid #000;
  position: relative;
  top: 6.28rem;
  left: 8.8rem;
}
</style>