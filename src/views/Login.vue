<template>
    <div>
        <h2>
            Login de usuário
        </h2>
        <hr>
        <div class="columns is-mobile is-centered">
  <div class="column is-half">

<div v-if="error!=''" class="notification is-danger">
    <button class="delete">

    </button>
<p>
    {{error}}   
</p>

</div>
  
  <p>
          Email
      </p>
  <input type="email" class="input" placeholder="Email" v-model="email">
  <p>
          Senha
      </p>
  <input type="password" class="input" placeholder="Senha" v-model="password">
  <hr>
<button class="button is-success" @click="login">
Login
</button> 
  </div>
</div>
     
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            password:'',
            email:'',
error:''
        }
    },
methods:{
login(){
    axios.post('http://localhost:8686/login', {
        senha:this.password,
        email:this.email
    }).then( (res)=>{
        console.log(res)

        localStorage.setItem('token', res.data.token)
        
        this.$router.push({name:'User'});
    } ).catch(error=>{
        this.error=error.response.data.error;
        console.log(error.response);

    })
    }
}
    

}
</script>

<style scoped>

</style>