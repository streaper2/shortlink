<template>
  <div>
  
      <input type="" name="" v-model="link">
      <h1>{{this.generated}}</h1>
      <button @click="generateLink" >Generate</button>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import {required, minLength, url} from 'vuelidate/lib/validators';

export default {
setup(){
    return { v$: useVuelidate() }
},
data() {
    return {
        link: '',
        generated:'',
    }
},
components: {

},
validations: {
    link: {
        required,
        minLength: minLength(5),
        //maxLength: maxLength(20),
        url
    
    }
},
methods: {
     async generateLink() {
        let resValidate = await this.v$.link.$validate() ;
      
        let shortLinkGenerated           = '';
        let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        let siteUrl = window.location.protocol + "//" + window.location.hostname + '/';


        if(resValidate) {
            
            this.$toast.open({message:"Généré",type:"success"});

            for ( let i = 0; i < 5; i++ ) {
                shortLinkGenerated += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            this.generated = siteUrl +shortLinkGenerated;
        } else {
            if(this.v$.link.required.$invalid) {
                 this.$toast.open({message:"Le champ est requis",type:"error", position:"bottom"});
            
            } else if (this.v$.link.minLength.$invalid){
                this.$toast.open({message:"le nombre de charactere minimum est de 5",type:"error", position:"bottom"});
            } else if (this.v$.link.url.$invalid) {
                this.$toast.open({message:'un format de type "https://google.com" est attendue',type:"error", position:"bottom"});
            } else {
                this.$toast.open({message:"Une erreur inatendue est survenue",type:"error", position:"bottom"});
            }
        }

        
        
        console.log("res", window.location);

       
    }//end generateLink
}
}
</script>

<style>

</style>