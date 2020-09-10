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
  
  <hr>
<button class="button is-success" @click="register">
Editar
</button> 
  </div>
</div>
     
    </div>
</template>

<script>
import axios from 'axios'
export default {
    created(){
  var req={
          headers:{
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        }
        axios.get('http://localhost:8686/user/' +this.$route.params.id, req).then(res=>{
   this.name=res.data.name,
        this.email = res.data.email,
        this.id = res.data.id

        }).catch(error=>{
            console.log(error)
            this.$router.push({name:'Home'})
        })

    },
    data(){
        return{
            name:'',
            email:'',
            id: -1,
            error:''

        }
    },
methods:{
register(){
     var req={
          headers:{
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        }
    axios.put('http://localhost:8686/user/',{id:this.id, name:this.name, senha:this.senha, role:0}, req,{
   
    }).then( (res)=>{
             console.log(res)

            this.$router.push({name:'User'})


} ).catch(error=>{

        console.log(error)
        this.$router.push({name:'Home'});

    })
    }
}
    

}
</script>

<style scoped>

</style>