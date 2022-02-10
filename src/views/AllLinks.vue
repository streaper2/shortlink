<template>
  <div>
      <p>All link</p>
      <div v-for="item in allLinks" :key="item.id" >
            <router-link :to="'/linkDetails/' + item.id">
                 {{item.url}}
            </router-link>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    computed: {
        allLinks() {
            
            return this.$store.getters.allLinks;
        }
    },
}
</script>

<style>

</style>