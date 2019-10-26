<template>
  <div id="login">
    <input v-model="model.username" class="name_input" />
    <input type="password" v-model="model.password" class="pw_input" />
    <div class="login-btn" @click="login"></div>
  </div>
</template>

<script>
export default {
  props: {
    type: {} //1登录、0注册
  },
  data() {
    return {
      model: {}
    };
  },
  methods: {
    async login() {
      let _url;
      this.type == 0 && (_url = "register");
      this.type == 1 && (_url = "login");
      try {
        const res = await this.$http.post(_url, this.model)
        console.log(res)
        sessionStorage.userid = res.data.userid
        this.type == 0 && this.$router.push('/role')
      } catch (err) {
        // console.log(err)
      }

      
      // localStorage.token = res.data.token
      // this.$router.push('/')
      // this.$message({
      //   type: 'success',
      //   message: '登录成功'
      // })
      // console.log(this.model);
      // console.log(this.type);
    }
  },
  mounted() {
    if(this.type == 0) {
      document.getElementById("login").style.backgroundImage = "url(" + require("../assets/01-05页/04/4-1.png") + ")";
      new Image().src = require('../assets/01-05页/05/5-1.png');
    }
  }
};
</script>

<style scoped>
#login {
  width: 24.36rem;
  height: 11.25rem;
  background-image: url(../assets/01-05页/03/3-1.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
input {
  border: black 1px solid;
  width: 5rem;
  height: 1.5rem;
  display: block;
  background-color: transparent;
}
.name_input {
  position: relative;
  top: 2.5rem;
  left: 11rem;
}
.pw_input {
  position: relative;
  top: 3.1rem;
  left: 11rem;
}
.login-btn {
  border: black 1px solid;
  width: 6.58rem;
  height: 2.06rem;
  position: relative;
  top: 4rem;
  left: 8.9rem;
}
</style>