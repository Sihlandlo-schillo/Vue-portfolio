<template>
    <spinner-comp/>
    <projects-card-comp>
        <template #projectSlot>
            <section>
                    <div v-for="testimonial in testimonials()" :key="testimonial" class="card image-fluid" style="width: 18rem;">
                        <img v-bind:src="testimonial.image" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title">{{ testimonial.name }}</h5>
                            <p class="card-text">{{ testimonial.text }}</p>
                            <p></p>
                        </div>
                    </div>
                </section>
        </template>
    </projects-card-comp>
</template>
<script>
import ProjectsCardComp from '@/components/ProjectsCardComp.vue'
import SpinnerComp from '@/components/SpinnerComp.vue'
export default {
  components: { ProjectsCardComp, SpinnerComp },
  methods:{
        testimonials(){
          return this.$store.state.testimonials
        }
    },
    computed:{
        getTestimonials(){
            return this.$store.dispatch('getTestimonials')
        }
  },
  data() {
    return {
      loading: true
    }
  },
  mounted(){
    this.getTestimonials,
    setTimeout(() => {
      this.loading = false
    }, 4000)
  }
    
}
</script>
<style scoped>
    section{
        margin-top: 5px;
        margin-left: 10%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin-bottom: 5px;
    }
    .card{
    background: transparent;

    }
    
    @media screen and (max-width:800px) {
        section{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            margin-left: 8%;
            margin-top: 5px;
            margin-bottom: 5px;
        }
    }
    @media screen and (max-width:770px) {
        section{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            justify-content: center;
            margin-left: 20%;
        }
    }
</style>