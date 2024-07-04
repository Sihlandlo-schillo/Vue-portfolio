<template>
  <div class="mainDiv">
    <navbar-comp/>
    <main>
      <router-view/>
    </main>
      <footer-comp/>
  </div>

</template>

<script>
import FooterComp from './components/FooterComp.vue'
import NavbarComp from './components/NavbarComp.vue'


  export default {
  components: { NavbarComp, FooterComp },
    name: 'App'
  }

</script>

<style>
  body{
    background-image: url('https://sihlandlo-schillo.github.io/images/images2/CreamandBrown.png');
    background-repeat: no-repeat;
    background-size: cover;
    /* background-size: 500%; */
    
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-bottom: auto;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.mainDiv{
  display: grid;
  grid-template-rows: auto minmax(100dvh, 100%) auto;
  background-size: 100vh;
}

/* footer{
  background-color: rgb(219, 189, 189);
  height: 55px;
  align-content: center;
  text-align: center;
  justify-content: center;
  bottom: 0;
  margin-top: auto;
  width: 100%;
} */
/* footer-comp{
  margin-top: 25px;
  bottom: 0%;
  margin-bottom: 0;
} */
@media only screen and (max-width: 900px) {
  body{
    /* height: 139vh; */
  }
  #app{
      margin-bottom: 20%
    }
}
@media only screen and (min-width: 901px) {
  body{
    /* height: 100vh; */
  }
}
@media only screen and (max-width: 490px) {
  body{
    /* height:180vh; */
  }
  
}
</style>
