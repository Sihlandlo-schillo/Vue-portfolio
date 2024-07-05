<template>
    <div class="container my-5">
        <section id="mission" class="mb-5">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <h2>EDUCATION</h2>
                    <div class="card" v-for="ed in education()" :key="ed">
                        <p><b>{{ ed.Institution }}</b></p>
                        <p><b>{{ ed.description }}</b></p>
                        <p><b>{{ ed.status }}</b></p>
                        <p><b>{{ ed.Duration }}</b></p>
                    </div>
                </div>
    
                <div class="col-md-6">
                    <h2>SKILLS</h2>
                    <p class="lead">PROGRAMMING LANGUAGES</p>
                    <div>
                        <img src="https://sihlandlo-schillo.github.io/images/images2/vue-logo-black-and-white-removebg-preview.png" alt="" class="img-fluid">
                        <img src="https://sihlandlo-schillo.github.io/images/images2/JavaScriptLog-removebg-preview.png" alt="" class="img-fluid">
                        <img src="https://sihlandlo-schillo.github.io/images/images2/BS_logo-removebg-preview.png" alt="" class="img-fluid">
                        <img src="https://sihlandlo-schillo.github.io/images/images2/CSS_logo-removebg-preview.png" alt="" class="img-fluid">
                        <img src="https://sihlandlo-schillo.github.io/images/images2/html_logo-removebg-preview.png" alt="" class="img-fluid">
                    </div>
                </div>
            </div>
        </section>
    </div>
    
</template>
<script>
export default {
    methods:{
        education(){
          return this.$store.state.education
        }
    },
    computed:{
        getEducation(){
            return this.$store.dispatch('getEducation')
        }
  },
  mounted(){
    this.getEducation
  }
}
</script>
<style scoped>
    img{
        width: 200px;
    }
    h2{
        align-content: center;
        text-align: center;
        margin-left: 20%;
        height: 60px;
        width: 300px;
        color: white;
        background-color: rgb(85, 65, 65);
        border-radius: 50%;
    }
    .card{
        padding: 2px;
        background: transparent;
        margin-left: 20%;
        width: 300px;
    }
</style>