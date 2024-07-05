<template>
    <div class="parent">
        <form  action="https://formcarry.com/s/koOwMO21l5o"
  method="POST"
  enctype="multipart/form-data">
            <!-- Using v-model to save data in properties -->
            <label>Name:</label>
            <input type="name" placeholder="John Snow">
            <label>Email:</label>
            <input type="email" v-model="email" placeholder="example@domain">
            <label>Mesage:</label>
            <textarea type="text" v-model="message" placeholder="Type Your Message Here"></textarea>
            <section id="mainButtons">
                <section class="clearSec">
                    <button type="reset" class="clear">CLEAR</button>
                </section>
                <section class="sendSec">
                    <button type="submit" class="send">SEND</button>
                </section>
            </section>
        </form>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    form{
        display: grid;

    }
    button{
        width: 70px;
        background-color: black;
        color: white;
    }
    section{
        padding: 2px;
    }
    #mainButtons{
        display: flex;
        justify-content: space-between;
    }
</style>