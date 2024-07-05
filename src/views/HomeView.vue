<template>
    <div class="container my-5">
  <header class="text-center mb-5 d-flex">
    <h1 class="greets">Greetings</h1>
    <p class="lead p-5 ">Welcome!!</p>
  </header>

  <section id="mission" class="mb-5">
    <div class="row align-items-center">
      <div class="col-md-6">
        <img src="https://sihlandlo-schillo.github.io/images/images2/Mna.jpg" class="img-fluid">
        
      </div>
      
      <div class="col-md-6">
        <p class="belowPic">I am Sihlandlo Makhumsha. A beginner <span>full-stack</span> web developer</p>
      </div>
    </div>
  </section>
 </div>
</template>

<script>
// import HelloWorld from '../components/HelloWorld.vue'
// // @ is an alias to /src


// export default {
//   components: {
//     HelloWorld
//   }
// }
</script>
<style scoped>
  h1{
    color: white;
    background-color: lightco;
  }
  img{
    /* position: absolute; */
    width: 307.26px;
    height: 327.73px;
    border-radius: 360px;
    transform: rotate(0.11deg);
    /* width: 350px;
    border-radius: 50%; */
  }
  .greets{
    position: absolute;
    /* width: 444px;
    height: 333px; */

    font-family: 'Inter';
    font-style: italic;
    font-weight: 900;
    font-size: 32px;
    line-height: 39px;
    text-transform: capitalize;

color: #141313;
  }
  span{
    color: white;
  }
  .belowPic{
    font-size: 190%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
</style>

