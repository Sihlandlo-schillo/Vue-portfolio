<template>
    <nav class="navbar navbar-expand-lg bg-body-secondary sticky-top">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="#"><img src="https://sihlandlo-schillo.github.io/images/images2/to.png" alt="logo"></router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">HOME</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">ABOUT</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/education">RESUME</router-link>
                    </li> 
                    <li class="nav-item">
                        <router-link class="nav-link" to="/projects">PROJECTS</router-link>
                    </li>
                
                    <li class="nav-item">
                        <router-link class="nav-link" to="/contacts">CONTACTS</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    img{
    width: 117px;
    height: 73px;
    border-radius: 15px;
    }
</style>