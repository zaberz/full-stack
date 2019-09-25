<template>
  <div class="login">
    <input type="text" placeholder="account" v-model="formData.account">
    <input type="password" placeholder="password" v-model="formData.password">
    <button @click="login">登陆</button>
    <button @click="register">注册</button>
  </div>
</template>

<script>
import {login, register} from "@/api/user";
import {setToken} from "@/libs/auth";

export default {
  name: 'login',
  data: ()=> {
    return {
      formData: {
        account: '',
        password: '',
      }
    }
  },
  async mounted() {
  },
  methods: {
    async login() {
      let res = await login(this.formData).catch(e=> {
        console.log(e);
      })

      let {token, expireAt} = res
      setToken(token)
      console.log(res);
    },
    async register() {
      let res = await register(this.formData)
      console.log(res);
    }
  }
}
</script>
