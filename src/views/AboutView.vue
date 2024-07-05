<template>
  <!-- {{ $store.state }} -->
 <div class="container my-5">
  <header class="text-center mb-5">
    <h1>About Me</h1>
    <p class="lead">{{ aboutMe0 }}</p>
  </header>

  <section id="mission" class="mb-5">
    <div class="row align-items-center">
      <div class="col-md-6">
        <h1>My Journey</h1>
        <p>{{ aboutMe1 }}</p>
        
      </div>
    
      <div class="col-md-6">
        <img src="https://sihlandlo-schillo.github.io/images/images2/tree_staircases-removebg-preview.png" alt="Our Mission" class="img-fluid">
      </div>
    </div>
  </section>
 </div>
<!-- <p>{{ aboutMe }}</p> -->
 <!-- <about-me/> -->
</template>

<script>
// import AboutMe from '../components/AboutMeComp.vue'
export default {
  // components: {
  //   AboutMe
  // }
  methods:{
    // aboutMe(){
    // }
  },
  computed:{
    aboutMe0(){
      return this.$store.state.aboutMe0
    },
    aboutMe1(){
      return this.$store.state.aboutMe1
    }
  },
  mounted(){
    return this.$store.dispatch('getAboutMe')
  }
}
</script>

<style scoped>
  .about{
    background-color: aqua;
    display: flex;
    flex-direction: row;
  }
  img{
    width:250px;
  }
</style>
