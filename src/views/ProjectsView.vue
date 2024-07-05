<template>
    <div>
        <projects-card-comp>
            <template #projectSlot>
                <section>
                    <div v-for="project in projects()" :key="project" class="card" style="width: 18rem;">
                        <img v-bind:src="project.image" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title">{{ project.name }}</h5>
                            <p class="card-text">{{ project.description }}</p>
                            <a v-bind:href="project.github" class="btn btn-primary" target="_blank">Git</a>
                            <a v-bind:href="project.vercel" class="btn btn-primary" target="_blank">live</a>
                        </div>
                    </div>
                </section>
            </template>
        </projects-card-comp>
        
    </div>
</template>
<script>
import projectsCardComp from '@/components/ProjectsCardComp.vue'
export default {
    components:{
        projectsCardComp
    },
    methods:{
        projects(){
            return this.$store.state.projects

        }
    },
    computed:{
        getProjects(){
            return this.$store.dispatch('getProjects')
        }
    },
    mounted(){
        this.getProjects
    }

}
</script>
<style scoped>
    section{

        display: grid;
        grid-template-columns: repeat(3,1fr);
        margin: 5%;
    }
    a{
        padding: 3px;
    }
    .card{
        background: transparent;
    }
    @media screen and (max-width:900px) {
            section{
                display: grid;
                grid-template-columns: repeat(2,1fr);
            } 
    }
    @media screen and (max-width:800px) {
        section{
            display: grid;
            grid-template-columns: repeat(1,1fr);
            justify-content: center;
            align-content: center;
            margin: 2% 25% ;
        }
        .card-body a{
            margin: 3px;
        }
        .card{
            background: transparent;
        }
    }
    @media screen and (max-width:490px) {
        section{
            display: grid;
            grid-template-columns: repeat(1,1fr);
            justify-content: center;
            align-content: center;
            margin: 10%;
        }
        .card-body a{
            margin: 3px;
        }
    }
</style>