<template>
  <div class="home">
    <TextInput/>
    <LinkGenerator/>
  </div>
</template>

<script>
// @ is an alias to /src
import TextInput from '@/components/TextInput.vue';
import LinkGenerator from '@/components/LinkGenerator.vue';

export default {
  name: 'Home',
  components: {
    TextInput,
    LinkGenerator
  }
}
</script>
