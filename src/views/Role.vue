<template>
  <div class="role">
    <div class="select" @click="select"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      role: 1
    };
  },
  methods: {
    async select() {
      //   this.$router.push('/start')
      const res = await this.$http.put(`role/${sessionStorage.userid}`, {
        role: this.role
      });
    }
  },
  mounted() {
    // new Image().src = require('../assets/01-05页/02/2-1.png')
  }
};
</script>

<style scoped>
.role {
  width: 24.36rem;
  height: 11.25rem;
  background-image: url(../assets/01-05页/05/5-1.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.select {
  width: 6.5rem;
  height: 2rem;
  border: 1px solid #000;
  position: relative;
  top: 6.28rem;
  left: 8.8rem;
}
</style>