<template>
<div>
   <h1>
        Painel ADM
    </h1>
    <table class="table  is-centered">
    <thead>
        <tr>
            <th>
            Nome

            </th>
            <th>
                Email
            </th>
        </tr>
    </thead>
    <tbody>
              <tr v-for="user in users" :key="user.id">
<td>
  {{ user.name}}
</td>
<td>
    {{user.email}}
</td>
<td>
   <router-link :to="{name:'Alter', params:{id:user.id}}">
      <button class="button is-success">
        Editar
    </button>
   </router-link>
</td>
<td>
    <button class="button is-danger" @click="shows(user.id)">
        Deletar
    </button>
</td>
            </tr>

    </tbody>
        </table>
<div  :class="{modal:true, 'is-active':show}">
  <div class="modal-background"></div>
  <div class="modal-content">
    <div class="card">
  <header class="card-header">
    <p class="card-header-title">
      Component
    </p>
    <a href="#" class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </a>
  </header>
  <div class="card-content">
    <div class="content">
Tem certeza que deseja deletar?
    </div>
  </div>
  <footer class="card-footer">
    <a href="#" class="card-footer-item" @click="modals">Cancelar</a>
    <a href="#" class="card-footer-item" @click="deleteuser">Delete</a>
  </footer>
</div>
    <!-- Any other Bulma elements you want -->
  </div>
  <button class="modal-close is-large" aria-label="close"></button>
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

        axios.get('http://localhost:8686/user', req).then(res=>{
            console.log(res);
this.users = res.data;
}).catch(error=>{
console.log(error);
        })



}
,data(){
    return{
    users:[],
    show:false,
    delete:-1

    }
},

methods:{
    modals(){
        this.show=!this.show;
    },
    shows(id){
        this.delete = id;
this.show=!this.show;
    },
    deleteuser(){
         var req={
          headers:{
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        }
axios.delete('http://localhost:8686/user/'+this.delete, req).then(res=>{
console.log(res);
this.users = this.users.filter(u=>u.id!=this.delete)
}).catch(error=>{
    console.log(error)
})
    }
}
,
filters:{
    processRole:function(value){
        if(value==0){
            return "usuario comum"
        }else if (value==1){
return "Admin"
        }
    }
}
}
</script>
<style scoped>
  .table {
      margin-left: auto;
      margin-right: auto;
    }

</style>