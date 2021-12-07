<template>
    <div class="logInUser">
        <div class="containerLoginUser">
            <h2>Iniciar Sesión</h2>
            <form v-on:submit.prevent="processLogInUser">
                <input type="text" v-model="user.username" placeholder="usuario">
                <input type="password" v-model="user.userpassword" placeholder="contraseña">
                <button type="submit">Iniciar Sesión</button>


            </form>
              
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
      name: 'logIn',

      data: function(){
          return{
              User:{
                username: "",
                password : ""
}
          }


      },

      methods: {
          processLogInUser: function(){
              
              axios.post(
                  'http://localhost:8084/#/login',
                   this.user,
                   {headers:{}}
              )
              .then((result) => {
                let dataLogin ={
                  username : this.user.username,
                  tokenAccess: result.data.access,
                  tokenRefresh: result.data.refresh,
                }
                
                this.$emit('completedLogin', dataLogin)
              })
              .catch((error) => {
                if(error.response.status == "401")
                   alert("Credenciales Incorrectas");
              }


              );

              

          }
      }   
    }
</script>
<style >
  .loginUser{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    color:#ffffff ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
  }
  .containerLoginUser{
    border: 3px blue;
    width: 25%;
    border-radius: 10px;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  body {
    max-width: 0 0 0 0;
  }
  .header{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    background-color: #1c819b;
    color:#ffffff ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-size: cover;
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
  .main-component{
    height: 75vh;
    margin: 0%;
    padding: 0%;
    background: #acacac ;
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