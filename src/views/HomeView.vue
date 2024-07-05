<template>
    <div class="container my-5">
  <header class="text-center mb-5 d-flex">
    <h1 class="greets animate__animated animate__bounce">Greetings</h1>
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
  <div>
    <a href="https://github.com/Sihlandlo-schillo">
      <img src="https://sihlandlo-schillo.github.io/images/images2/GIThub%20logo.png" alt="" class="icons">
    </a>
    <a href="https://www.facebook.com/sihlandlo.makhumsha.3">
      <img src="https://sihlandlo-schillo.github.io/images/images2/facebook_logo-removebg-preview.png" alt="" class="icons">
    </a>
    <a href="https://vercel.com/sihlandlos-projects">
      <img src="https://sihlandlo-schillo.github.io/images/images2/vercel_logo-removebg-preview.png" alt="" class="icons">
    </a>
  </div>
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
    background-color: gray;
  }
  .icons{
    padding: 4px;
    height: 50px;
    width: 50px;
  }
  .belowPic{
    font-size: 190%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
</style>

