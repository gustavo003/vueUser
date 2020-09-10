<template>
    <div>
        <h2>
            Registro de usuário
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
          Nome
      </p>
  <input type="text" class="input" placeholder="Nome do usuário" v-model="name">
  <p>
          Email
      </p>
  <input type="email" class="input" placeholder="Email" v-model="email">
  <p>
          Senha
      </p>
  <input type="password" class="input" placeholder="Senha" v-model="password">
  <hr>
<button class="button is-success" @click="register">
Cadastrar
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
            name:'',
            password:'',
            email:'',
            error:''

        }
    },
methods:{
register(){
    axios.post('http://localhost:8686/user', {
        name:this.name,
        senha:this.password,
        email:this.email
    }).then( (res)=>{
        console.log(res)
        this.$router.push({name:'Home'});
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