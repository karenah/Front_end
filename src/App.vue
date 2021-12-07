<template>
  <div class="app" id="app">
    <div class="header">
      <h1>Bienvenido al Portal de Pruebas Covid-19</h1>
      <nav>
        <button  v-on:click="loadInicio">    Inicio        </button>
        <button  v-on:click="loadAgregar">   Agregar       </button>
        <button  v-on:click="loadconsultar"> Consultar     </button>
        <button  v-on:click="loadSignUp">    Cerrar Sesión </button>
        <button  v-on:click="loadLogin">     IniciarSesión </button>
        <button  v-on:click="loadSignUp">    Registrarse   </button>
      </nav>
    </div>

    <div class="main-component">
      <router-view
        v-on:completedLogin="completedLogin"
        v-on:completedSignUp="completedSignUp"
        >
      </router-view>
    </div>

    <div class="footer">
      <h2> Karen Avila Holguin</h2>
     </div>
  </div>      
</template>


<script>
  export default{
    name: 'App',

    data: function(){
      return {
        isAuth: false
      }; 
    },
  
    methods:{
      verifyAuth: function (){
        this.isAuth = localStorage.getItem("isAuth") || false;
        if(this.isAuth == false){
          this.$router.push({name: 'login'});
        }
      
      },

      loadLogin: function (){
        this.$router.push({name: 'login'});
      },
      loadSignUp: function (){
        this.$router.push({name: 'signUp'});
      },
      completedLogin: function (data){
        localStorage.setItem('username',data.username);
        localStorage.setItem('token_refresh',data.token_refresh);
        localStorage.setItem('token_access',data.token_access);
        localStorage.setItem('isAuth', true);
        alert("Autenticación exitosa");
        this.verifyAuth();
      },
      completedSignUp: function(data){
        alert("Registro exitoso");
        this.completedLogin(data);
      },
    },
    created: function(){
      this.verifyAuth();
    }
  }
</script>
<style>
   body {
    max-width: 0 0 0 0;
    margin: 0 0 0 0;
    margin:0;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    background-color:rgb(255, 255, 255);
    color: black;
    justify-content: space-between;
    align-items: center;
  }
  .header{
    margin: 0;
    margin: 0 0 0 0;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    background-color: #1c819b;
    color:rgb(255, 255, 255) ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
  }
  .header h1{
    width: 80%;
    text-align: center;
  }
  .header nav {
    height: 100%;
    width: 20%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
  }
  .header nav button{
    color: #E5E7E9;
    background: #283747;
    border: 1px solid #E5E7E9;
    border-radius: 5px;
    padding: 10px 20px;
  }
  .header nav button:hover{
    color: #283747;
    background: #E5E7E9;
    border: 1px solid #E5E7E9;
  }
  .main-componentt{
    height: 75vh;
    margin: 0%;
    padding: 0%;
    background:white ;
    align-content: center;

  }
  .footer{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    background-color: #313131;
    color: #ffffff;
  }
  .footer h2{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
   