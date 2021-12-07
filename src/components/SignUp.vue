<template>
 
  karen
         
</template>
<script>
   /* import axios from 'axios';
    export default {
       name: 'logIn',
      
      data: function(){
          return{
              User:{
                username: "",
                password : "",
                eps      : "",
                departamento: "",
                account:{
                lastChangeDate:(new Date()).toJSON().toString(),
                balance: 0,
                isActive:true
                }
                }
                }
                },
            methods:{
                processSignUp: function(){
                axios.post(
                   'http://localhost:8084/user',
                   this.user,
                   {headers:{}}
                )
                .then((result) => {
                let dataSignUp = {
                  username : this.user.username,
                  tokenAccess: result.data.access,
                  tokenRefresh: result.data.refresh,
                }
                
                this.$emit('completedSignUp', dataSignUp)
              })
              .catch((error) => {
                if(error.response.status == "401")
                   alert("Error en el REGISTRO");
              });
              }
              }   
    }
*/   
</script>
<style >
.SignUpUser{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
.containerSignUpUser{
    border: 3px rgb(5, 5, 5);
    width: 25%;
    border-radius: 10px;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .SignUpUser h2{
      color: coral;
  }
  .SignUpUser form{
      width: 70%;
  }
  .SignUpUser input{
      height: 40px;
      width: 100%;
      box-sizing: border-box;
      padding: 10px 20px;
      margin: 5px 0;
      border: 1px sandybrown;

  }
  .SignUpUser button{
      width: 100%;
      height: 40px;
      color: sandybrown;
      background:seagreen;
      border: 1px slategrey;
      border-radius: 5px;
      padding: 10px 25px;
      margin: 5px 0 25px 0;
  }
  .SignUpUser button:hover{
      color: tan;
      background: violet;
      border: 1px saddlebrown;
  }
</style>