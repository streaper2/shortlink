<template>
  <div>
      redirecting ...
  </div>
</template>

<script>
export default {
    data() {
        return {
            link: this.$store.getters.getLinkById(this.$route.params.id),
        }
    },
    computed: {
        
    },
    methods: {
        
    },
    mounted () { 
        console.log("we are mounted");
        console.log(this.link);
        this.$store.dispatch('viewLink', this.$route.params.id);
        let link= this.$store.getters.getLinkById(this.$route.params.id).url;
        window.location.href = link;
    },
    
}
</script>

<style>

</style>