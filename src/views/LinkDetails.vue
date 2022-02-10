<template>
  <div class="about">
    <h1>id of routing is {{id}}</h1>
  </div>
</template>



<script>
export default {
   data() {
    return {
      id: this.$route.params.id,
    }
  },
  mounted(){
    console.log("routing",this.$route.params.id);
  }
}
</script>

<style>

</style>