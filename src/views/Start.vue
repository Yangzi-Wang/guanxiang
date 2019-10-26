<template>
  <div class="start">
    <div class="login" @click="$router.push('/login/1')"></div>
    <div class="register" @click="$router.push('/login/0')"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {
    new Image().src = require("../assets/01-05页/03/3-1.png");
    new Image().src = require("../assets/01-05页/04/4-1.png");
  }
};
</script>

<style scoped>
.start {
  width: 24.36rem;
  height: 11.25rem;
  background-image: url(../assets/01-05页/02/2-1.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.login {
  width: 6.5rem;
  height: 2rem;
  border: 1px solid #000;
  position: relative;
  top: 3.06rem;
  left: 8.9rem;
}
.register {
  width: 6.5rem;
  height: 2rem;
  border: 1px solid #000;
  position: relative;
  top: 4.28rem;
  left: 8.9rem;
}
</style>