<template>
    <div class="container my-5" >
        <h1>Contact Me</h1>
        <header class="text-center mb-5">
            
        </header>

        <section id="mission" class="mb-5">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <p class="lead"><span><img src="https://sihlandlo-schillo.github.io/images/images2/email2-removebg-preview.png" alt=""></span>sihlandlom@gmail.com</p>
                    <p class="lead"><span><img src="https://sihlandlo-schillo.github.io/images/images2/Location-removebg-preview.png" alt=""></span>Khayelitsha, Cape Town</p>
                    <p class="lead"><span><img src="https://sihlandlo-schillo.github.io/images/images2/call-iCON-removebg-preview.png" alt=""></span>0725047852</p>
                </div>
    
                <div class="col-md-6">
                    <contacts-comp/>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import ContactsComp from '@/components/ContactsComp.vue'
export default {
  components: { ContactsComp }
//   methods:{
//         contacts(){
//             return this.$store.state.contacts

//         }
//     },
//     computed:{
//         getContacts(){
//             return this.$store.dispatch('getContacts')
//         }
//     },
//     mounted(){
//         this.getContacts
//     }
// 
}
</script>
<style scoped>
    img{
        width: 25px;
    }
</style>