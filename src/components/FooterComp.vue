<template>
    <div class="footer">
        <div>
            <p>&copy;{{ year }} by Sihlandlo Makhumsha</p>
        </div>
        <div>
            
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            year: new Date().getFullYear()
        }
    }
}
</script>
<style scoped>
    /* .footer{
        background-color: rgb(219, 189, 189);
    } */
</style>