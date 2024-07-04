import { createStore } from 'vuex'

export default createStore({
  state: {
    about:null,
    education:null,
    projects:null,
    skills:null,
    testimonials:null,
    contacts:null
  },
  mutations: {
    setAbout(state,payload){
      state.about = payload
    },
    setEducation(state,payload){
      state.education = payload
    },
    setProjects(state,payload){
      state.projects = payload
    },
    setSkills(state,payload){
      state.skills = payload
    },
    setTestimonials(state,payload){
      state.testimonials = payload
    },
    setContacts(state,payload){
      state.contacts = payload
    }
  },
  actions: {
   async getAbout(aboutContent){
    let fetchedInfo = await fetch('https://sihlandlo-schillo.github.io/first_api/data/')
    let converted = await fetchedInfo.json()
    aboutContent.commit('setAbout', converted.aboutMe)
   },
   async getEducation(educationContent){
    let fetchedInfo = await fetch('https://sihlandlo-schillo.github.io/first_api/data/')
    let converted = await fetchedInfo.json()
    educationContent.commit('setEducation', converted.education)
   },
   async getProjects(projectsContent){
    let fetchedInfo = await fetch('https://sihlandlo-schillo.github.io/first_api/data/')
    let converted = await fetchedInfo.json()
    projectsContent.commit('setProjects', converted.projects)
   },
   async getSkills(skillsContent){
    let fetchedInfo = await fetch('https://sihlandlo-schillo.github.io/first_api/data/')
    let converted = await fetchedInfo.json()
    skillsContent.commit('setSkills', converted.skills)
   },
   async getTestimonials(testimonialsContent){
    let fetchedInfo = await fetch('https://sihlandlo-schillo.github.io/first_api/data/')
    let converted = await fetchedInfo.json()
    testimonialsContent.commit('setTestimonials', converted.testimonials)
   },
   async getContacts(contactsContent){
    let fetchedInfo = await fetch('https://sihlandlo-schillo.github.io/first_api/data/')
    let converted = await fetchedInfo.json()
    contactsContent.commit('setContacts', converted.contacts)
  },
},
getters: {
},
modules: {
}
})
